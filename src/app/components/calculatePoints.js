"use client";

import React, {useState, useEffect} from "react";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import tims from "../assets/tims.png";
import sportsCheck from "../assets/sportsCheck.png";
import subway from "../assets/subWay.jpg";
import {defaultTransactions} from "./exampleTransactions";

const icons = {
  tim_hortons: tims.src,
  sportcheck: sportsCheck.src,
  subway: subway.src,
};

function calculatePoints(transactions) {
  // SETUP
  let hm = {sportcheck: 0, tim_hortons: 0, subway: 0};
  let memo = {};
  let total = 0;

  // INITIALIZE HM
  for (const [key, value] of Object.entries(transactions)) {
    if (value["merchant_code"] in hm) {
      hm[value["merchant_code"]] += value["amount_cents"];
    } else {
      hm[value["merchant_code"]] = value["amount_cents"];
    }
    total += value["amount_cents"];
  }

  for (const [key, value] of Object.entries(hm)) {
    hm[key] = Math.floor(value / 100);
  }

  // CALCULATE TOTAL POINTS
  function backTrack(hm, total) {
    if (total === 0) {
      return 0;
    }
    if (memo[JSON.stringify(hm)] !== undefined) {
      return memo[JSON.stringify(hm)];
    }
    let currPoints = 0;

    // RULE 1
    if (
      hm["sportcheck"] >= 75 &&
      hm["tim_hortons"] >= 25 &&
      hm["subway"] >= 25
    ) {
      const newHm = {...hm};
      newHm["sportcheck"] -= 75;
      newHm["tim_hortons"] -= 25;
      newHm["subway"] -= 25;
      currPoints = Math.max(
        currPoints,
        500 + backTrack(newHm, total - (75 + 25 + 25))
      );
    }

    // RULE 2
    if (hm["sportcheck"] >= 75 && hm["tim_hortons"] >= 25) {
      const newHm = {...hm};
      newHm["sportcheck"] -= 75;
      newHm["tim_hortons"] -= 25;
      currPoints = Math.max(
        currPoints,
        300 + backTrack(newHm, total - (75 + 25))
      );
    }

    // RULE 3
    if (hm["sportcheck"] >= 75) {
      const newHm = {...hm};
      newHm["sportcheck"] -= 75;
      currPoints = Math.max(currPoints, 200 + backTrack(newHm, total - 75));
    }

    // RULE 4
    if (
      hm["sportcheck"] >= 25 &&
      hm["tim_hortons"] >= 10 &&
      hm["subway"] >= 10
    ) {
      const newHm = {...hm};
      newHm["sportcheck"] -= 25;
      newHm["tim_hortons"] -= 10;
      newHm["subway"] -= 10;
      currPoints = Math.max(
        currPoints,
        150 + backTrack(newHm, total - (25 + 10 + 10))
      );
    }

    // RULE 5
    if (hm["sportcheck"] >= 25 && hm["tim_hortons"] >= 10) {
      const newHm = {...hm};
      newHm["sportcheck"] -= 25;
      newHm["tim_hortons"] -= 10;
      currPoints = Math.max(
        currPoints,
        75 + backTrack(newHm, total - (25 + 10))
      );
    }

    // RULE 6
    if (hm["sportcheck"] >= 20) {
      const newHm = {...hm};
      newHm["sportcheck"] -= 20;
      currPoints = Math.max(currPoints, 75 + backTrack(newHm, total - 20));
    }

    // RULE 7
    const rule7Sum = Object.values(hm).reduce((acc, curr) => acc + curr, 0);

    memo[JSON.stringify(hm)] = Math.max(currPoints, rule7Sum);
    return memo[JSON.stringify(hm)];
  }

  return backTrack(hm, total);
}

function SplitComponent() {
  const [points, setPoints] = useState(0);
  const [jsonInput, setJSONInput] = useState("");
  const [parsedObject, setParsedObject] = useState(defaultTransactions);

  const calPoints = () => {
    setParsedObject(defaultTransactions);
    setPoints(calculatePoints(defaultTransactions));
  };

  const handleInputChange = (e) => {
    setJSONInput(e.target.value);
  };

  const handleParseJSON = () => {
    try {
      const jsonString = jsonInput.replace(/'/g, '"');
      const parsed = JSON.parse(jsonString);
      setParsedObject(parsed);
      setPoints(calculatePoints(parsed));
    } catch (error) {
      console.error("Error parsing JSON:", error);
      setParsedObject(defaultTransactions);
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#0d3d6b",
            fontWeight: "700",
            marginBottom: "1%",
            width: "70%",
          }}
        >
          Curious about your potential rewards? Our system crunches the numbers
          using your monthly transaction history as a guide, try it out!
        </h2>
      </div>
      <div style={{display: "flex", height: "50vh"}}>
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h3 style={{color: "#3472aa", margin: "10px"}}>
            Enter your own transactions history
          </h3>
          <label>
            <textarea
              value={jsonInput}
              onChange={handleInputChange}
              placeholder={`{\n     'T1': {'date': '2021-05-09', 'merchant_code' : 'sportcheck', 'amount_cents': 2500},\n     'T2': {'date': '2021-05-10', 'merchant_code' : 'tim_hortons', 'amount_cents': 1000},\n     'T3’: {'date': '2021-05-10', 'merchant_code' : 'the_bay', 'amount_cents': 500}\n}`}
              rows={20}
              cols={60}
            />
          </label>
          <Button
            variant="contained"
            style={{backgroundColor: "green"}}
            onClick={handleParseJSON}
          >
            Submit
          </Button>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Paper style={{maxHeight: 250, overflow: "auto", width: "50%"}}>
            <List
              sx={{width: "100%", maxWidth: 360, bgcolor: "background.paper"}}
            >
              {parsedObject
                ? Object.entries(parsedObject).map(([key, value]) => (
                    <ListItem key={key}>
                      <ListItemAvatar>
                        <Avatar
                          alt="Cindy Baker"
                          src={icons[value["merchant_code"]]}
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary={`${value["merchant_code"]} - \$${
                          value["amount_cents"] / 100
                        }`}
                        secondary={value["date"]}
                      />
                    </ListItem>
                  ))
                : null}
            </List>
          </Paper>
          <h3 style={{color: "#3472aa", margin: "10px"}}>
            Total points earnable: {points}
          </h3>
          <Button
            variant="contained"
            style={{backgroundColor: "green"}}
            onClick={calPoints}
          >
            Example transaction 1
          </Button>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginBottom: "3%",
        }}
      >
        <div
          style={{
            width: "75%",
            height: "1px",
            backgroundColor: "#0d3d6b",
            alignSelf: "center",
            borderRadius: "25px",
            padding: "3",
            marginBottom: "1%",
            marginTop: "1%",
          }}
        ></div>
        Copyright @ Khush Patel 2024
      </div>
    </div>
  );
}

export default SplitComponent;
