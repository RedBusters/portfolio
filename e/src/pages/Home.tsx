import { Typography, Button, Container, Box, Stack } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Reals from "../components/Reals";

const Home: React.FC = () => {
  return (
    <Container>
      <Box mt={8}>
        <Typography variant='h1'>Je suis Mallory Macrez</Typography>
        <Typography paragraph>
          Je développe des sites pour ceux qui aiment Staline et l'armée rouge
        </Typography>
        <Button
          size='large'
          LinkComponent={RouterLink}
          to='/portfolio'
          sx={{ mt: 4 }}
        >
          Voir mes projets
        </Button>
      </Box>
      <Box mt={24}>
        <Box my={8}>
          <Typography variant='h2'>Mes projets</Typography>
        </Box>
        <Reals />
      </Box>
    </Container>
  );
};

export default Home;
