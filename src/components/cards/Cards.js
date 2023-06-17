import "./Cards.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Cards = ({ auto }) => {
  return (
    <Card className="cardForm">
      <CardActionArea className="cardArea">
        <CardMedia component="img" image={auto.image} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {auto.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {auto.category}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="center">
        <Box sx={{ "& button": { m: 1 } }}>
          <Button variant="contained" size="medium">
            Ver detalles
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
};

export default Cards;
