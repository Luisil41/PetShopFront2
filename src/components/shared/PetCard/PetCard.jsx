import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function PetCard({pet}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={pet.avatar}
          alt={pet.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {pet.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <ul>
              <li>{pet.age}</li>
              <li>{pet.size}</li>
              <li>{pet.breed}</li>
              <li>{pet.sex}</li>
            </ul>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}
