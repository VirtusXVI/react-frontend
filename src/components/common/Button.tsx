import React from "react";
import Box from "./Box";

interface Props {
  onClick?: () => void;
  text: string;
}

export default function Button(props: Props) {
  const { onClick, text } = props;
  return (
    <Box
      margint="20"
      bg="rgba(29, 79, 134, 0.8)"
      height="40"
      width="100"
      border_radius="25"
      flex="true"
      align="center"
      justify="center"
      style={{ color: "white", cursor: "pointer" }}
      onClick={onClick}
    >
      {text}
    </Box>
  );
}
