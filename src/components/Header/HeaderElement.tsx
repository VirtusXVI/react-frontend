import Box from "../common/Box";

interface Props {
  section: Section;
  setSection: (id: number) => void;
  activeSection: number
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
      <Box
        height="25"
        width="100"
      >
        {section.title}
        { props.activeSection == props.section.id ? <Box height="2" bg="black"/> : null}
      </Box>
    </Box>
  );
}