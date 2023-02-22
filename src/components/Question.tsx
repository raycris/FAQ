import { useState } from "react";

const Question = ({ question }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section>
      <div className={isOpen ? "open" : "clased"}>
        <h4>{question.title}</h4>
        <button onClick={() => setIsOpen(!isOpen)} className="btn">
          {isOpen ? "-" : "+"}
        </button>
      </div>
      {isOpen && <p>{question.info}</p>}
    </section>
  );
};

export default Question;
