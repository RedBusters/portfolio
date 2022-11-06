// footer
import React from "react";
import { Box, Container, Stack, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <Box>
      <Container>
        <Stack>
          <Box>logo</Box>
          <Box>
            <Stack direction='row'>
              <Link component={RouterLink} to='/'>
                home
              </Link>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
