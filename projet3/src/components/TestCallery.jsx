import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function ComplexGrid() {
  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 90, height: 90 }}>
            <Img
              alt="complex"
              src="http://pngimg.com/uploads/mark_zuckerberg/mark_zuckerberg_PNG35.png"
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography variant="body2" gutterBottom>
                Métier (job_id)
              </Typography>
              <Typography gutterBottom variant="h2">
                Mark Zuckerberg
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Co-fondateur de Facebook (biography)
              </Typography>
            </Grid>
          </Grid>

          <Button variant="contained" startIcon={<SendIcon />}>
            Message
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
