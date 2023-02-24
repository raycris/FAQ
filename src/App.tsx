import { createContext, useState } from "react";

import Question from "./components/Question";
import Header from "./components/Header";

import "./App.css";

import { useTranslation } from "react-i18next";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };
  const [t, i18n] = useTranslation("global");

  const questions = [
    {
      id: 1,
      title: (
        <>
          {i18n.language === "en"
            ? "Is this a good product?"
            : "¿Es un buen producto?"}
        </>
      ),
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
    },
    {
      id: 2,
      title: (
        <>
          {i18n.language === "en"
            ? "How much does it cost?"
            : "¿Cuánto cuesta?"}
        </>
      ),
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
    },
    {
      id: 3,
      title: (
        <>
          {i18n.language === "en"
            ? "When can I get it?"
            : "¿Cuándo puedo conseguirlo?"}
        </>
      ),
      info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem.",
    },
  ];

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <h1>{t("faq_section")}</h1>
        <div className="container">
          <h2>{t("faq")}</h2>
          <div className="questions">
            {questions.map((question) => (
              <Question key={question.id} question={question} />
            ))}
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
