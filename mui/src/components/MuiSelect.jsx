import React, { useState } from "react";

import { Box, Typography, TextField, MenuItem } from "@mui/material";

export const MuiSelect = () => {
  const [country, setCountry] = useState("");

  console.log({ country });

  const handleChange = (e) => {
    setCountry(e.target.value);
  };
  return (
    <>
      <Typography variant="h2">Select in MUI</Typography>
      <Box width="250px">
        <TextField
          label="Country"
          select
          fullWidth
          value={country}
          onChange={handleChange}
          helperText="Please select your country"
        >
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="US">USA</MenuItem>
          <MenuItem value="AU">Australia</MenuItem>
          <MenuItem value="RUS">Russia</MenuItem>
        </TextField>
      </Box>
    </>
  );
};
