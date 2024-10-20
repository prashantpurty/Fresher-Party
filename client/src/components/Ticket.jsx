import { useRef } from "react";
import TicketHintPage from "./Card";
import { ConfettiDemo } from "./Confiet";
import { Confetti } from "./ui/ConfietCon";
import TicketCom from "./ui/Ticketcom";
import { IconStackBackward } from "@tabler/icons-react";
import { useCurrectUser } from "../hooks/client";
import Grabticket from "./Grabticket";

function Ticket() {
  const { user } = useCurrectUser();
  const isTicket = user && user.Ticket;
  return (
    <div className="relative h-svh  w-full bg-background overflow-hidden borde dark:bg-black ">
      <TicketCom
        className="z-0 absolute inset-0 "
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
      />
      {isTicket ? <Grabticket /> : <TicketHintPage />}
    </div>
  );
}

export default Ticket;
