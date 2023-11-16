import React, { useEffect, useState } from "react";
import desktopdivider from "../images/pattern-divider-desktop.svg";
import icondice from "../images/icon-dice.svg";

export const Advicecard = () => {
  const [adviceid, setAdviceid] = useState("");
  const [advice, setAdvice] = useState("");

  const url = "https://api.adviceslip.com/advice";
  const fetchadvice = () => {
    try {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setAdviceid(data.slip.id);
          setAdvice(data.slip.advice);

          console.log(data);
        });
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchadvice();
  }, []);
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="cardContainer">
            <p className="adviceid"> ADVICE #{adviceid}</p>
            <p className="advice">{advice}</p>

            <div className="dividerimg">
              <img src={desktopdivider} alt="desktopdivider" />
            </div>

            <div className="icondice">
              <img src={icondice} alt="icondice" onClick={fetchadvice} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
