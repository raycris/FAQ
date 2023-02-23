import Switch from "react-switch";

import "./Header.css";

const Header = (props: { toggleTheme: any; theme: string }) => {
  return (
    <header className="headerContainer">
      <div className="switchConatiner">
        <div></div>
        <div className="infoContainer">
          <label>{props.theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <Switch
            onChange={props.toggleTheme}
            checked={props.theme === "dark"}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
