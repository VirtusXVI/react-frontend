import Box from "../common/Box";
import HeaderElement from "./HeaderElement";
import { useState } from "react";

interface Section {
  id: number;
  title: string;
}

interface Props {
  setSection: (id: number) => void;
  activeSection: number
}

export default function Header(props: Props) {
  const { setSection, activeSection } = props;
  const [sections] = useState<Section[]>([
    { id: 1, title: "Employees" },
    { id: 2, title: "Stats" },
    { id: 3, title: "Orders" },
  ]);
  return (
    <>
      <Box flex={+true} height={"60"} borderb="1px solid grey">
        {sections.map((section) => {
          return (
            <HeaderElement
              key={section.id}
              section={section}
              setSection={setSection}
              activeSection={activeSection}
            ></HeaderElement>
          );
        })}
      </Box>
    </>
  );
}
