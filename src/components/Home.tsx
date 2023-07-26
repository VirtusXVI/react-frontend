import Box from './common/Box';
import List from './List'
import Header from './Header/Header';
import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState<number>(1)

  const checkActiveSection = () => {
    if(activeSection === 1){
      return <List />;
    }
  }

  return (
    <Box>
      <Header setActiveSection={setActiveSection} />
      {checkActiveSection}
    </Box>
  )
}
