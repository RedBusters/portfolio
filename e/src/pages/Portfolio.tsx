import React from "react";
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Box,
  Stack,
  Button,
  Grid,
  Link,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { data } from "../data";

const Portfolio: React.FC = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default Portfolio;
