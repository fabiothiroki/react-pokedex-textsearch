import React from "react";
import { Pokemon } from './Pokemon';
import { render, screen } from "@testing-library/react";

const bulbasaur = {
  name: 'bulbasaur',
  type1: 'Grass',
  description: 'For some time after its birth, it grows by gaining nourishment from the seed on its back.',
};

test("renders pokemon component", () => {
  render(<Pokemon pokemon={bulbasaur} />);

  expect(screen.getByText(bulbasaur.name)).toBeInTheDocument();
});
