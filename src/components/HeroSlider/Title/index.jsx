import classes from "./index.module.css";

const Title = (props) => {
  return <q className={classes.Container}>{props.children}</q>;
};

export default Title;
