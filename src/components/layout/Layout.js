import classes from "../css/Layout.module.css";
import MainNavigation from "./MainNavigation";
const Layout = function (props) {
  //   return <div className={classes.main}>{props.children}</div>;
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};
export default Layout;
