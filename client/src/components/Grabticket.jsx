import IADevsImg from "/logo-ia-devs.svg";
import barCodeImg from "/bar-code.svg";
import { useCurrectUser } from "../hooks/client";
import { Login } from "./Login";
import QrCode from "react-qr-code";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import { RainbowButton } from "./ui/Rainbowbuttoncom";
import html2canvas from "html2canvas";

function GrabTicket() {
  const { user } = useCurrectUser();
  const navigation = useNavigate();
  console.log(user);
  const isTicket = user && user.Ticket.id;
  if (!isTicket) return <Login />;

  function handleDowloadTicket() {
    const ticketHTML = document.querySelector("#capture");
    if (ticketHTML) {
      html2canvas(ticketHTML).then((canvas) => {
        document.body.appendChild(canvas);
        const imgData = canvas.toDataURL("image/png");
        const a = document.createElement("a");
        a.href = imgData;
        a.download = "ticket.png";
        a.click();
      });
    }
  }

  return (
    <>
      <div className="flex flex-col justify-center align-middle md:h-full h-full">
        <div className="relative flex justify-center align-middle h-full">
          <div
            className="hidden md:block bg-[#212121] absolute p-5 rounded-full text-white cursor-pointer top-3 left-4"
            onClick={() => navigation(-1)}
          >
            <IconArrowLeft />
          </div>
          <div
            className="bg-purple-600 w-[43.375rem] h-[25.5rem] p-12 flex justify-center items-center max-[600px]:flex-wrap max-[600px]:h-fit max-[600px]:flex-col-reverse gap-3 self-center "
            id="capture"
          >
            <div className="h-5/6">
              <QrCode value={user.Ticket.id} />
            </div>
            <div className="w-full h-full p-4 flex flex-col items-center bg-gray-200">
              <div className="m-4 flex flex-col items-center">
                <img src={user?.picture} alt="" className="rounded-full h-32" />
                <label className="mt-2 text-uppercase text-purple-600 font-sans text-xs">
                  EVENT
                </label>
                <p className="font-roboto text-gray-800 text-base font-bold">
                  {user.name}
                </p>
              </div>

              <div className="w-full mt-4 flex justify-between align-middle">
                <div className="flex flex-col gap-1">
                  <label className="text-uppercase font-sans text-xs font-bold">
                    EVENT
                  </label>
                  <label className="text-uppercase font-sans text-xs font-bold">
                    DATE
                  </label>
                  <label className="text-uppercase font-sans text-xs font-bold">
                    PLACE
                  </label>
                </div>
                <div className="flex flex-col font-bold">
                  <label>FRESH FUSION</label>
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
        <div className="flex justify-center align-middle relative mb-8">
          <button
            className="bg-slate-800 no-underline group cursor-pointer mt-4 w-fit shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block"
            onClick={() => handleDowloadTicket()}
          >
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 " />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-8 ring-1 ring-white/10 ">
              Download Ticket
              <svg
                fill="none"
                height="16"
                viewBox="0 0 24 24"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default GrabTicket;
