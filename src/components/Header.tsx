import Switch from "react-switch";

import { useTranslation } from "react-i18next";

import "./Header.css";

const Header = (props: { toggleTheme: any; theme: string }) => {
  const [t, i18n] = useTranslation("global");

  return (
    <header className="headerContainer">
      <div className="switchConatiner">
        <div>
          <button onClick={() => i18n.changeLanguage("es")}>ES</button>
          <button onClick={() => i18n.changeLanguage("en")}>EN</button>
        </div>
        <div className="infoContainer">
          {i18n.language === "en" ? (
            <label>
              {props.theme === "light" ? "Light Mode" : "Dark Mode"}
            </label>
          ) : (
            <label>
              {props.theme === "light" ? "Modo Claro" : "Modo Oscuro"}
            </label>
          )}
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
