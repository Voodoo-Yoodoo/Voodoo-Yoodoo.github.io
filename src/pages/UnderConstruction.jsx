import Heading from "@ui/Heading";
import { motion as m } from "motion/react";
import { useEffect } from "react";

const UnderConstruction = () => {
  useEffect(() => {
    document.title = "Voodoo-Yoodoo Website // Under Construction";
  }, []);
  return (
    <m.div>
      <Heading className="text-wrap text-center">
        We are mixing ingredients to create a unique experience for you!
      </Heading>
    </m.div>
  );
};

export default UnderConstruction;
