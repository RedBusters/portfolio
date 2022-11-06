import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import { data } from "../data";

import { Link as RouterLink } from "react-router-dom";

const Reals: React.FC = () => {
  return (
    <Grid container spacing={4}>
      {data.map(el => (
        <Grid item lg={6}>
          <Card>
            <CardMedia component='img' image={el.image} alt={el.name} />
            <CardContent>
              <Typography variant='h4'>{el.name}</Typography>
              <Typography variant='body1'>{el.description}</Typography>
            </CardContent>
            <CardActions>
              <Button
                variant='contained'
                LinkComponent={RouterLink}
                to={el.link}
              >
                Voir le projet
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
export default Reals;
