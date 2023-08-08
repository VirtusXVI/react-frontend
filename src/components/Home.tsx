import Box from "./common/Box";
import List from "./Employees/List";
import Orders from "./Orders/Orders";
import Stats from "./Stats/Stats";
import Header from "./Header/Header";
import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState<number>(1);

  const setSection = (id: number) => {
    setActiveSection(id);
  };

  return (
    <Box position="relative">
      <Header setSection={setSection} activeSection={activeSection} />
      {activeSection === 1 ? (
        <List />
      ) : activeSection === 2 ? (
        <Stats />
      ) : activeSection === 3 ? (
        <Orders />
      ) : null}
    </Box>
  );
}
