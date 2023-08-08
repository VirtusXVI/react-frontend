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
      onClick={createEmployee}
    >
      <Box height="400" width="400" border_radius="25" bg="lightgrey">

      </Box>
    </Box>
  );
}
