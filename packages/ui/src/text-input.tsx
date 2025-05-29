import React, { ChangeEvent } from "react";

interface PropType {
  placeholder: string;
}

const TextInput = ({ placeholder }: PropType) => {
  return (
    <input
      type="text"
      style={{
        padding: 10,
        margin: 10,
        borderColor: "black",
        borderWidth: 1,
      }}
      placeholder={placeholder}
    />
  );
};

export default TextInput;
