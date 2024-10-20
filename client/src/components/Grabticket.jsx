import IADevsImg from "/logo-ia-devs.svg";
import barCodeImg from "/bar-code.svg";
import { useCurrectUser } from "../hooks/client";
import { Login } from "./Login";
import QrCode from "react-qr-code";

function GrabTicket() {
  const { user } = useCurrectUser();
  console.log(user);
  const isTicket = user && user.Ticket.id;
  if (!isTicket) return <Login />;

  return (
    <div className="relative flex justify-center align-middle h-full">
      <div className="bg-purple-600 w-[43.375rem] h-[25.5rem] p-12 flex justify-center items-center max-[600px]:flex-wrap max-[600px]:h-fit max-[600px]:flex-col-reverse gap-3 self-center">
        <div className="h-5/6">
          <QrCode value={user.Ticket.id} />
        </div>
        <div className="w-full h-full p-4 flex flex-col items-center bg-gray-200">
          <div className="m-4 flex flex-col items-center">
            <img
              src={`${user?.picture}`}
              alt=""
              className="rounded-full h-32"
            />
            <label className="mt-2 text-uppercase text-purple-600 font-sans text-xs">
              EVENT
            </label>
            <p className="font-roboto text-gray-800 text-base font-bold">
              {user.name}
            </p>
          </div>

          <div className="w-full mt-4 flex justify-between">
            <div className="flex flex-col gap-1">
              <label className="text-uppercase font-sans text-xs font-bold">
                EVENT
              </label>
              <label className="text-uppercase font-sans text-xs font-bold">
                DATA
              </label>
              <label className="text-uppercase font-sans text-xs font-bold">
                PLACE
              </label>
            </div>
            <div className="flex flex-col font-bold">
              <label>FRESHER PARTY</label>
              <label>22.10.2024</label>
              <label>CUTM</label>
            </div>
          </div>

          <div
            className="w-full flex justify-center items-center mt-2"
            id="barcode"
          >
            <img src={barCodeImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GrabTicket;
