const { prismaClient } = require("../client/index");
const axios = require("axios");
const { JWTServices } = require("../service/jwt");
const { JWTServicesticket } = require("../service/jwt");

const ADMIN = process.env.ADMIN;

const queries = {
  verifyGoogleToken: async (parent, { token }) => {
    const GoogleAuthToken = token;
    const GoogleAuthUrl = new URL("https://oauth2.googleapis.com/tokeninfo");
    GoogleAuthUrl.searchParams.set("id_token", GoogleAuthToken);
    const { data } = await axios.get(GoogleAuthUrl.toString(), {
      responseType: "json",
    });

    const emailPattern =
      /^(220714100|230714100|240714100|230704440)\d*@(cutm\.ac\.in)$/; // Updated regex for email validation
    if (!emailPattern.test(data.email)) {
      throw new Error(
        "Invalid email address. Must start with one of the specified prefixes and be from @cutm.ac.in."
      );
    }

    console.log(data);
    const user = await prismaClient.user.findUnique({
      where: { email: data.email },
    });

    if (!user) {
      await prismaClient.user.create({
        data: {
          name: data.name,
          email: data.email,
          picture: data.picture,
        },
      });
    }

    const GetByDB = await prismaClient.user.findUnique({
      where: { email: data.email },
    });

    if (!GetByDB) throw new Error("Something Went Wrong!");

    const userToken = JWTServices.GenereateJWT(GetByDB);

    return userToken;
  },

  getCurrectUser: async (parent, args, context) => {
    console.log(context);
    const id = context.user?.id;
    if (!id) null;

    const user = await prismaClient.user.findUnique({
      where: { id },
      include: { Ticket: true },
    });
    console.log(user);
    return user;
  },

  VerifyTicket: async (parent, { ticket }, context) => {
    if (!ticket) throw new Error("Unauthorized");
    console.log("called1");

    if (!context.user?.email) throw new Error("Unauthorized");

    if (!ADMIN.split(",").includes(context.user.email))
      throw new Error("Unauthorized");
    console.log("called2");

    // check ticket is already redeemed
    const ticketData = await prismaClient.ticket.findUnique({
      where: { id: ticket },
    });
    if (!ticketData) throw new Error("Ticket not found");
    if (ticketData.redeemed) throw new Error("Ticket already redeemed");

    // update the ticket
    const ticketRec = await prismaClient.ticket.update({
      where: { id: ticket },
      data: { redeemed: true },
    });

    return ticketRec;
  },
};

const mutation = {
  makeTicket: async (parent, { description, foodPreference }, context) => {
    const id = context.user?.id;
    if (!id) throw new Error("Unauthorized");
    console.log("from makeTicket", id);
    // check if the ticket is already created
    const ticketExists = await prismaClient.ticket.findFirst({
      where: { ownerId: id },
    });
    if (ticketExists) throw new Error("Ticket already created");

    const ticket = await prismaClient.ticket.create({
      data: {
        description,
        foodPreference,
        owner: { connect: { id } },
      },
    });

    console.log(ticket);

    // Generate the JWT token after the ticket is created
    const ticketToken = JWTServicesticket.GenereateJWTticket(ticket);

    return ticketToken;
  },
};

const resolvers = {
  queries,
  mutation,
};

module.exports = resolvers;
