import { Typography, Button, Container, Box, Stack } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

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
    </Container>
  );
};

export default Home;
