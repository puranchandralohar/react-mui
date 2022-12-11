import React from "react";

import { Typography } from "@mui/material";

export const Typo = () => {
  return (
    <div>
      <Typography variant="h1" color="primary">
        h1 Heading
      </Typography>
      <Typography variant="h2">h2 heading</Typography>
      <Typography variant="h3">h3 heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>h4 heading</Typography>
      <Typography variant="h5">h5 heading</Typography>
      <Typography variant="h6">h6 heading</Typography>

      <Typography variant="subtitle1">Subtitle1</Typography>
      <Typography variant="subtitle2">Subtitle2</Typography>

      <Typography variant="body1">
        Body-1 Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aspernatur, repellat.
      </Typography>
      
      <Typography variant="body2">
        Body-2 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Dolorem, totam non qui ipsam id exercitationem eligendi eaque saepe
        maiores nemo asperiores deserunt consequuntur itaque modi.
      </Typography>
    </div>
  );
};
