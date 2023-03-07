import React from 'react';
import { Typography } from '@mui/material';

const MuiTypography = () => {
    return (
      <div>
        <Typography variant="h1">h1 Heading</Typography>
        <Typography variant="h2">h2 Heading</Typography>
        <Typography variant="h3">h3 Heading</Typography>
        <Typography variant="h4">h4 Heading</Typography>
        <Typography variant="h5">h5 Heading</Typography>
        <Typography variant="h6">h6 Heading</Typography>

        <Typography variant="subtitle1">subtitle1</Typography>
        <Typography variant="subtitle2">subtitle2</Typography>

        <Typography variant="body1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus maiores distinctio voluptatum veritatis, ullam veniam esse cum quaerat consequuntur aliquam voluptate iure velit temporibus laborum tempora voluptatem repellat necessitatibus rerum!</Typography>
        <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores labore dolorem cupiditate dolor necessitatibus cumque odio perspiciatis aliquid autem aut, fugit praesentium tenetur hic repellendus quasi, ab est libero vero.</Typography>
      </div>
    );
};

export default MuiTypography;