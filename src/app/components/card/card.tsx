import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardContent, Typography } from '@mui/material';
import styles from './card.module.scss';

export default function MovieCard() {
  return (
    <Card sx={{ maxWidth: 345 }} className={styles.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="https://picsum.photos/200/300"
          alt="green iguana"
        />
        <CardContent className={styles.cardContent}>
          <Typography gutterBottom variant="h5" component="div" className={styles.movieTitle}>
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary" className={styles.movieDescription}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
