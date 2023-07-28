import Box from "../common/Box";
import HeaderElement from "./HeaderElement";
import { useState } from "react";

interface Section {
  id: number;
  title: string;
}

interface Props {
  setSection: (id: number) => void;
}

export default function Header(props: Props) {
  const { setSection } = props;
  const [sections] = useState<Section[]>([
    { id: 1, title: "Impiegati" },
    { id: 2, title: "Statistiche" },
    { id: 3, title: "Ordini" },
  ]);
  return (
    <>
      <Box flex={+true} height={"60"} borderb="1px solid black">
        {sections.map((section) => {
          return (
            <HeaderElement
              key={section.id}
              section={section}
              setSection={setSection}
            ></HeaderElement>
          );
        })}
      </Box>
    </>
  );
}
