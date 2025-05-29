"use client"
import TextInput from "@repo/ui/text-input";
import { useRouter } from "next/navigation";
import { ChangeEvent, SetStateAction, useState } from "react";

export default function Home() {
  const route = useRouter()
  const [roomId,setRoomId] = useState()

  const handleClick = () => {
    route.push("/chat/123")
  }

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <TextInput placeholder="Room Id"/>
      <button onClick={handleClick}>Join</button>
    </div>
  );
}
