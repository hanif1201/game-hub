import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Grid
      gridTemplateAreas={{
        base: `"nav " " main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="coral">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="blue">
          aside
        </GridItem>
      </Show>

      <GridItem area="main" bg="red">
        main
      </GridItem>
    </Grid>
  );
};

export default App;
