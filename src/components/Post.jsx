import { Link } from "react-router-dom";
import classes from "./Post.module.css";

function Post(props) {
  return (
    <li className={classes.post}>
      <Link to={props.id}>
        <p className={classes.author}>{props.name}</p>
        <p className={classes.text}>{props.description}</p>
      </Link>
    </li>
  );
}

export default Post;
