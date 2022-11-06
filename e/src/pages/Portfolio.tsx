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
import Reals from "../components/Reals";

const Portfolio: React.FC = () => {
  return (
    <Container>
      <Reals />
    </Container>
  );
};

export default Portfolio;
