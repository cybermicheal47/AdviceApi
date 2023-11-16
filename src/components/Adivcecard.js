import React, { useEffect, useState } from "react";
import desktopdivider from "../images/pattern-divider-desktop.svg";
import icondice from "../images/icon-dice.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Advicecard = () => {
  const [adviceid, setAdviceid] = useState("");
  const [advice, setAdvice] = useState("");

  const url = "https://api.adviceslip.com/advice";
  const fetchadvice = () => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Sorry ,try again ");
        }
        return res.json(); // Parse response body as JSON
      })
      .then((data) => {
        // Work with the parsed JSON data here
        setAdviceid(data.slip.id);
        setAdvice(data.slip.advice);
        console.log(data);
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`);
      });
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
