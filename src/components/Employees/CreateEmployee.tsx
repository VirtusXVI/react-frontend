import Box from "../common/Box";
import { useEffect } from "react";

interface Props {
  createEmployee: () => void;
}

export default function CreateEmployee(props: Props) {
  const { createEmployee } = props;

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      // Anything in here is fired on component unmount.
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <Box
      position="absolute"
      bg="rgba(0, 0, 0, 0.6)"
      top={"0"}
      flex="true"
      align="center"
      justify="center"
      style={{ height: '100vh' }}
    >
      <Box
        height="500"
        width="500"
        border_radius="25"
        bg="lightgrey"
        padding="15"
        position="relative"
      >
        <Box
          onClick={createEmployee}
          style={{ height: "auto" }}
          flex="true"
          align="center"
          justify="flex-end"
        >
          <i style={{ cursor: "pointer" }} className="fa-solid fa-xmark"></i>
        </Box>
        <Box style={{ height: "auto", fontSize: "2rem" }}>New Employee</Box>
      </Box>
    </Box>
  );
}
