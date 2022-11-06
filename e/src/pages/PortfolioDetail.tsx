import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import { data } from "../data";
import { useParams } from "react-router-dom";

const PortfolioDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const actualData = data.find(el => el.link === `/portfolio/${id}`);

  return (
    <Container>
      <pre>{JSON.stringify(actualData, null, 2)}</pre>
    </Container>
  );
};

export default PortfolioDetail;
