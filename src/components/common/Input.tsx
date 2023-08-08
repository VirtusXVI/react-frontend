import React from "react";
import Box from "./Box";

interface Props {
  name: string;
  text: string;
  type: string;
  onChange: React.Dispatch<React.SetStateAction<any>>;
}

export default function Input(props: Props) {
  const { name, text, type, onChange } = props;

  const x = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    onChange({ text });
  }

  return (
    <Box style={{ fontSize: "1.5rem", height: "auto", width: "calc(95% / 2)" }}>
      <Box>{text}</Box>
      <Box>
        <input
          style={{ borderRadius: "25px", paddingLeft: '10px', paddingRight: '10px' }}
          type={type}
          name={name}
          id={name}
          onChange={x}
        />
      </Box>
    </Box>
  );
}
