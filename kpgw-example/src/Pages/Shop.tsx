import React from "react";
import styled from "styled-components";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader";

import MediaCard from "components/MediaCard";

import { Pokedex } from "mock/pokedex";

function Shop() {
  let [column, setColumn] = React.useState(2);
  React.useEffect(() => {
    let viewPort = document.getElementById("App-Container");
    if (viewPort) {
      let cardWidth = 350;
      let column = viewPort.clientWidth / cardWidth;
      setColumn(Math.floor(column));
    }
  }, [setColumn]);

  return (
    <StyledShop className="StyledShop">
      <StyledGridList cellHeight={"auto"} cols={column}>
        <GridListTile key="Subheader" cols={column} style={{ height: "auto" }}>
          <ListSubheader component="div">Choose your pokemons</ListSubheader>
        </GridListTile>
        {Pokedex.map(v => (
          <GridListTile key={v.key}>
            <MediaCard key={v.key} pokemon={v} />
          </GridListTile>
        ))}
      </StyledGridList>
    </StyledShop>
  );
}

export default Shop;

const StyledShop = styled.div`
  display: flex;
  justify-content: center;
`;
const StyledGridList = styled(GridList)`
  && {
    width: 100%;
  }
`;
