import React from "react";
import styled from "styled-components";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";

import MediaCard from "components/Card";

import { Pokedex } from "mock/pokedex";

function Shop() {
  return (
    <StyledShop>
      <StyledGridList cellHeight={420}>
        <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
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
`;
const StyledGridList = styled(GridList)`
  width: 100%;
`;
