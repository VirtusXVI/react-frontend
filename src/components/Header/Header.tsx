import Box from "../common/Box";
import HeaderElement from "./HeaderElement";
import { useState } from "react";

interface Section {
  id: number;
  name: string;
}

interface Props{
  setActiveSection: React.Dispatch<React.SetStateAction<number>>
}

export default function Header(props: Props) {
  const [sections] = useState<Section[]>([
    { id: 1, name: "Impiegati",  },
    { id: 2, name: "Statistiche" },
    { id: 3, name: "Ordini" },
  ]);
  return (
    <>
      <Box flex={+true} height={"60"}>
        {sections.map((section) => {
          return (
            <HeaderElement
              key={section.id}
              title={section.name}
              
            ></HeaderElement>
          );
        })}
      </Box>
    </>
  );
}
