import React, { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { addLessonToCart, removeLessonFromCart } from "redux/actions";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { ILessonProps } from "./Lesson.type";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 600,
      marginBottom: 20,
    },
    media: {
      height: 0,
      paddingTop: "36.25%", // 16:9
    },
    avatar: {
      backgroundColor: red[500],
    },
  })
);

const Lesson: React.FC<ILessonProps> = ({
  index,
  name,
  description,
  author,
  publishDate,
  duration,
  image,
  isInCart,
}) => {
  const classes = useStyles();
  const dispatch: Dispatch<any> = useDispatch();

  const addToCart = () => {
    dispatch(addLessonToCart(index));
  };

  const removeFromCart = () => {
    dispatch(removeLessonFromCart(index));
  };

  const renderActionButton = () => {
    return isInCart ? (
      <IconButton aria-label="settings">
        <RemoveShoppingCartIcon onClick={() => removeFromCart()} />
      </IconButton>
    ) : (
      <IconButton aria-label="settings">
        <AddShoppingCartIcon onClick={() => addToCart()} />
      </IconButton>
    );
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {author[0]}
          </Avatar>
        }
        action={renderActionButton()}
        title={name}
        subheader={publishDate}
      />
      <CardMedia className={classes.media} image={image} title="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Lesson;
