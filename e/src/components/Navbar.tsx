import React from "react";
import { Container, Stack, Box, Link, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <Container>
      <Stack direction='row' justifyContent={"space-between"} sx={{ my: 4 }}>
        <Box>logo</Box>
        <Box>
          <Stack alignItems={"center"} direction='row' gap={4}>
            <Link component={RouterLink} to='/'>
              ACCUEIL
            </Link>
            <Link component={RouterLink} to='/about'>
              QUI-SUIS-JE
            </Link>
            <Link component={RouterLink} to='/contact'>
              CONTACT
            </Link>
            <Button LinkComponent={RouterLink} to='/portfolio'>
              Portfolio
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Navbar;
