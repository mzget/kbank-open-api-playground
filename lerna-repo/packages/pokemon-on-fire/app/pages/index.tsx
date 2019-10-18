import React from "react";
import Head from "next/head";
import styled from "styled-components";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader";

import MediaCard from "../src/components/MediaCard";
import { Pokedex } from "../src/mock/pokedex";

function Home(props: any) {
  let [column, setColumn] = React.useState(2);
  React.useEffect(() => {
    console.log("Home Page");
    let viewPort = document.getElementById("App-Container");
    if (viewPort) {
      let cardWidth = 300;
      let column = viewPort.clientWidth / cardWidth;
      setColumn(Math.floor(column));
    }
  }, [setColumn]);

  return (
    <React.Fragment>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StyledShop className="StyledShop">
        <StyledGridList cellHeight={"auto"} cols={column}>
          <GridListTile
            key="Subheader"
            cols={column}
            style={{ height: "auto" }}
          >
            <ListSubheader component="div">Choose your pokemons</ListSubheader>
          </GridListTile>
          {Pokedex.map(v => (
            <GridListTile key={v.key}>
              <MediaCard key={v.key} pokemon={v} />
            </GridListTile>
          ))}
        </StyledGridList>
      </StyledShop>
    </React.Fragment>
  );
}

export default Home;

const StyledShop = styled.div`
  display: flex;
  justify-content: center;
`;
const StyledGridList = styled(GridList)`
  && {
    width: 100%;
  }
`;
