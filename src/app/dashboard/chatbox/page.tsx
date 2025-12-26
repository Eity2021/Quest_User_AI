"use client";
import { useState } from "react";
import ChatBox from "@/components/ui/chat-box/chatBox";
import CustomModal from "@/components/ui/custom-modal/custom-modal";
import ModalContentChat from "@/components/ui/chat-box/modal-content-chat";

export default function page() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <section className="relative">
      <div className="absolute -top-10 right-0 w-60 h-60 rounded-full bg-[#FF5A5F] blur-[160px] opacity-70 -z-10"></div>
      <div className="absolute top-0 left-0 w-60 h-60 rounded-full bg-[#FF5A5F] blur-[160px] opacity-80 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-[#FF5A5F] blur-[200px] opacity-70 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-[#FF5A5F] blur-[200px] opacity-70 -z-10"></div>
      <ChatBox setOpen={setOpen}></ChatBox>
      <CustomModal isOpen={open} onClose={() => setOpen(false)} title="Filters">
        <div>
          <ModalContentChat></ModalContentChat>
        </div>
      </CustomModal>
    </section>
  );
}
