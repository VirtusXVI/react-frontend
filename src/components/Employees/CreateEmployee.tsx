import Box from "../common/Box";
import Input from "../common/Input";
import Button from "../common/Button";
import axios from "axios";
import { useEffect, useState } from "react";

interface Props {
  employeeModal: () => void;
}

export default function CreateEmployee(props: Props) {
  const { employeeModal } = props;
  let [firstName, setFirstName] = useState<string>("");
  let [lastName, setLastName] = useState<string>("");
  let [email, setEmail] = useState<string>("");
  let [jobTitle, setJobTitle] = useState<string>("");

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      // Anything in here is fired on component unmount.
      document.body.style.overflow = "auto";
    };
  }, []);

  const createEmployee = () => {
    axios
      .post("http://158.180.238.74:8089/employee", {
        firstName: firstName,
        lastName: lastName,
        email: email,
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <Box
      position="absolute"
      bg="rgba(0, 0, 0, 0.6)"
      top={"0"}
      flex="true"
      align="center"
      justify="center"
      style={{ height: "100vh" }}
    >
      <Box
        height="700"
        width="700"
        border_radius="25"
        bg="lightgrey"
        padding="15"
        position="relative"
      >
        <Box
          onClick={employeeModal}
          style={{ height: "auto" }}
          flex="true"
          align="center"
          justify="flex-end"
        >
          <i style={{ cursor: "pointer" }} className="fa-solid fa-xmark"></i>
        </Box>
        <Box style={{ height: "auto", fontSize: "2rem" }}>New Employee</Box>
        <Box
          flex="true"
          align="center"
          gap="10"
          style={{ height: "auto" }}
          flexwrap="true"
        >
          <Input
            name="first_name"
            text="First Name"
            type="text"
            onChange={setFirstName}
          />
          <Input
            name="last_name"
            text="Last Name"
            type="text"
            onChange={setLastName}
          />
          <Input name="email" text="Email" type="email" onChange={setEmail} />
          <Input
            name="job_title"
            text="Job Title"
            type="text"
            onChange={setJobTitle}
          />
        </Box>
        <Button text="Create" onClick={createEmployee} />
      </Box>
    </Box>
  );
}
