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
      onClick={createEmployee}
    >
      <Box>
        
      </Box>
    </Box>
  );
}
