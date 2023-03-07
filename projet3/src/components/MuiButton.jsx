import React from 'react';
// import { Button } from "@mui/material";
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
const MuiButton = () => {
    return (
      <div>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
          spacing={1}
          pt={2}
        >
          <Chip label="Javascript" size="small" />
          <Chip label="Node.js" size="small" />
          <Chip label="React" size="small" />
        </Stack>
      </div>
    );
};

export default MuiButton;