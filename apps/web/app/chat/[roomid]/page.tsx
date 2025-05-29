import TextInput from "@repo/ui/text-input";

const page = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100wh",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <div>Chat Room</div>
      <div>
        <TextInput placeholder="send message"/>
      </div>
    </div>
  );
};

export default page;
