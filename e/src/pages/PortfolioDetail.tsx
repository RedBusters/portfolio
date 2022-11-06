import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import { data } from "../data";
import { useParams } from "react-router-dom";

const PortfolioDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const actualData = data.find(el => el.link === `/portfolio/${id}`);

  return (
    <Container>
      <img src={actualData?.image} alt={actualData?.name} />
      <Typography variant='h4'>{actualData?.name}</Typography>
      <Typography variant='body1'>{actualData?.description}</Typography>
    </Container>
  );
};

export default PortfolioDetail;
