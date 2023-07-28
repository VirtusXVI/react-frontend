import React from "react";
import Box from "../common/Box";

interface Props {
  section: Section;
  setSection: (id: number) => void;
}

interface Section {
  id: number;
  title: string;
}

export default function HeaderElement(props: Props) {
  const { section, setSection } = props;
  return (
    <Box
      flex={+true}
      align="center"
      justify="center"
      cursor_pointer="true"
      onClick={() => setSection(section.id)}
    >
      {section.title}
    </Box>
  );
}
