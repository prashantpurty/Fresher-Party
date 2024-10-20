const JWT = require("jsonwebtoken");
require("dotenv").config();

const SECRET = process.env.JWT || "secret";

function GenereateJWT(user) {
  const payload = {
    id: user.id,
    email: user.email,
  };
  const token = JWT.sign(payload, SECRET);
  return token;
}

function VerifyJWT(token) {
  try {
    const user = JWT.verify(token, SECRET);
    return user;
  } catch (error) {
    return null;
  }
}

const JWTServices = {
  GenereateJWT,
  VerifyJWT,
};

function GenereateJWTticket(ticket) {
  const payload = {
    id: ticket.id,
    email: ticket.email,
    redeemed: ticket.redeemed,
    foodPreference: ticket.foodPreference,
  };
  const token = JWT.sign(payload, SECRET);
  return token;
}

function VerifyJWTticket(token) {
  try {
    const ticket = JWT.verify(token, SECRET);
    return ticket;
  } catch (error) {
    return null;
  }
}

const JWTServicesticket = {
  GenereateJWTticket,
  VerifyJWTticket,
};

module.exports = {
  JWTServices,
  JWTServicesticket,
};
