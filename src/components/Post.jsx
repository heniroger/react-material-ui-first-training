import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10)
    },
    media: {
        height: 250,
        [theme.breakpoints.down("sm")]: {
            height:150,
        }
    },
    card: {
        marginBottom:theme.spacing(5)
    }
}));

const Post = () => {
  const classes = useStyles();
    return <Card className={classes.card}>
        <CardActionArea>
            <CardMedia
                media="img"
                className={classes.media}
                image="https://images.pexels.com/photos/8042462/pexels-photo-8042462.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                title="My Posts"
            />
            <CardContent>
                <Typography gutterBottom variant="h5"> My First Post</Typography>
                <Typography variant="body2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis voluptatem earum vero modi ducimus quasi quos fuga ullam
                    a error, maiores tenetur! Harum expedita nemo maiores sit quia earum voluptate.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis voluptatem earum vero modi ducimus quasi quos fuga ullam
                    a error, maiores tenetur! Harum expedita nemo maiores sit quia earum voluptate.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Debitis voluptatem earum vero modi ducimus quasi quos fuga ullam
                    a error, maiores tenetur! Harum expedita nemo maiores sit quia earum voluptate.
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">Share</Button>
            <Button size="small" color="primary">Learn More...</Button>
        </CardActions>
  </Card>;
};


export default Post;