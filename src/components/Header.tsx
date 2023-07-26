import Box from "./common/Box";
import { useState } from "react";

interface Section {
  id: number;
  name: string;
}

export default function Header() {
  const [sections] = useState<Section[]>([{ id: 1, name: "Impiegati" }]);
  return (
    <>
      <Box flex={+true} justify={"space-evenly"} align={"center"} height={"60"}>
        {sections.map((section) => {
          return <Box key={section.id}>{section.name}</Box>;
        })}
      </Box>
    </>
  );
}
