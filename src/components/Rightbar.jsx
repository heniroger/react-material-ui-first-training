import { Avatar, Container, ImageList, ImageListItem, makeStyles, Typography } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';

const useStyles = makeStyles((theme) =>({
       container: {
        paddingTop: theme.spacing(10)
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555"
  }
}));

const Rightbar = () => {
  const classes = useStyles();
  return <Container className={classes.container}>
    <Typography className={classes.title}>Online Friends</Typography>
    <AvatarGroup max={6}  style={{ marginBottom: 20 }}>
          <Avatar alt="Remy Sharp"  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
          <Avatar alt="Travis Howard"  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
          <Avatar alt="Cindy Baker"  src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
          <Avatar alt="Agnes Walker"  src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
          <Avatar alt="Trevor Henderson"  src=""/>
          <Avatar alt="Trevor Henderson"  src="https://material-ui.com/static/images/avatar/5.jpg"/>
          <Avatar alt="Trevor Henderson"  src="https://material-ui.com/static/images/avatar/6.jpg"/>
          <Avatar alt="Trevor Henderson"  src="https://material-ui.com/static/images/avatar/7.jpg"/>
          <Avatar alt="Trevor Henderson"  src="https://material-ui.com/static/images/avatar/8.jpg"/>
    </AvatarGroup>
    <Typography className={classes.title} gutterBottom>Gallery</Typography>
    <ImageList rowHeight={100}  className={classes.imageList} cols={2}>
      <ImageListItem>
          <img src="https://media.istockphoto.com/photos/machete-for-cutting-grass-on-wooden-background-picture-id646350430?s=612x612" alt=""/>
      </ImageListItem>
      <ImageListItem>
          <img src="https://images.pexels.com/photos/4385290/pexels-photo-4385290.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
      </ImageListItem>
      <ImageListItem>
          <img src="https://images.pexels.com/photos/6203797/pexels-photo-6203797.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
      </ImageListItem>
      <ImageListItem>
          <img src="https://images.pexels.com/photos/8749775/pexels-photo-8749775.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
        </ImageListItem> 
      <ImageListItem>
            <img src="https://images.pexels.com/photos/3687749/pexels-photo-3687749.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
      </ImageListItem>
      <ImageListItem>
            <img src="https://images.pexels.com/photos/10111646/pexels-photo-10111646.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
      </ImageListItem>
    </ImageList>
  </Container>;
};


export default Rightbar;