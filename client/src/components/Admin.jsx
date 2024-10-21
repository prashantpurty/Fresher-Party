import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import { ShootingStarsAndStars } from "./AdminBg";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  ScrollShadow,
} from "@nextui-org/react";
import { GetVerifyTicket } from "../graphql/query/user";
import { useVerifyTicket } from "../hooks/client";
import GetAllUserCom from "./GetUser";

const Admin = () => {
  const [data, setData] = useState("No result");
  const { ticket, error } = useVerifyTicket(data);
  console.log(ticket);

  if (error) console.log(error?.response?.errors?.[0]?.message);

  return (
    <ShootingStarsAndStars>
      <div className="flex flex-col justify-center align-middle relative z-50">
        <div className="w-full h-72">
          <QrReader
            onResult={(result, error) => {
              if (!!result) {
                setData(result.text);
              }

              if (!!error) {
                console.info(error);
              }
            }}
            constraints={{ facingMode: "environment" }}
            style={{ width: "100%" }}
          />
        </div>
        <div className="relative">
          <Card className="max-w-[400px] w-96 h-full mt-4">
            {/* <CardHeader className="flex gap-3">
              <Image
                alt="nextui logo"
                height={40}
                radius="sm"
                src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">NextUI</p>
                <p className="text-small text-default-500">nextui.org</p>
              </div>
            </CardHeader> */}
            <CardHeader>{ticket?.id || "No Id Found!"}</CardHeader>
            <Divider />
            <CardBody>
              {error ? (
                error?.response?.errors?.[0]?.message
              ) : (
                <div>
                  <p>owner: {ticket?.ownerId || "No Name Found!"}</p>
                  <p>Food: {ticket?.foodPreference || "No Name Found!"}</p>
                  <p>Redeem: {ticket?.redeemed || "No Name Found!"}</p>
                </div>
              )}
            </CardBody>
            <Divider />
            {/* <CardFooter>
              <Link
                isExternal
                showAnchorIcon
                href="https://github.com/nextui-org/nextui"
              >
                Visit source code on GitHub.
              </Link>
            </CardFooter> */}
          </Card>
        </div>
      </div>
    </ShootingStarsAndStars>
  );
};

export default Admin;
