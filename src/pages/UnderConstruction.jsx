import { Grid } from "@mui/material";
import Heading from "@ui/Heading";

const UnderConstruction = () => {
  return (
    <Grid
      component="section"
      className="mx-auto flex h-full w-[80%] items-center justify-center drop-shadow-(--shadow-v-drop-shadow)"
    >
      <Heading className="text-v-green text-center text-wrap">
        We are mixing ingredients to create a{" "}
        <span className="text-v-purple">unique</span> experience for you!
      </Heading>
    </Grid>
  );
};

export default UnderConstruction;
