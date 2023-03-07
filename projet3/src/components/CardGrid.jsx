import React from "react";

import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";

export default function MediaCard() {
  return (
    <Card>
      <Grid container>
        <Grid item xs={12} sm={4} md={2}>
          <Box
                      backgroundColor={"blue"}
                      p={2}
                      sx={{ display: "flex", justifyContent: "center" }}
          >
            <Avatar
              alt="Remy Sharp"
              src="http://pngimg.com/uploads/mark_zuckerberg/mark_zuckerberg_PNG35.png"
              sx={{ width: 90, height: 90 }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} md={6}>
          <Box
            backgroundColor={"red"}
            direction="column"
            textAlign={{ xs: "center", sm: "left" }}
            py={2}
          >
            <Typography gutterBottom variant="body1" color="text.secondary">
              Métier (job_id)
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              Mark Zuckerberg
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Box backgroundColor={"yellow"} p={2}>
            <Button variant="contained" startIcon={<SendIcon />}>
              MAIL
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} backgroundColor={"green"} p={2}>
          <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            euismod lorem eu nunc vehicula blandit.
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}
