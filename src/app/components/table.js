import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return {name, calories, fat, carbs, protein};
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const pointRules = [
  {
    ruleNum: 1,
    disc: "every $75 spend at Sport Check, $25 spend at Tim Hortons and $25 spend at Subway",
    points: 500,
    sportsCheck: 75,
    timHortons: 25,
    subway: 25,
    other: 0,
  },
  {
    ruleNum: 2,
    disc: "every $75 spend at Sport Check and $25 spend at Tim Hortons",
    points: 300,
    sportsCheck: 75,
    timHortons: 25,
    other: 0,
  },
  {
    ruleNum: 3,
    disc: "every $75 spend at Sport Check",
    points: 200,
    sportsCheck: 75,
    other: 0,
  },
  {
    ruleNum: 4,
    disc: "every $25 spend at Sport Check, $10 spend at Tim Hortons and $10 spend at Subway",
    points: 150,
    sportsCheck: 25,
    timHortons: 10,
    subway: 10,
    other: 0,
  },
  {
    ruleNum: 5,
    disc: "every $25 spend at Sport Check and $10 spend at Tim Hortons",
    points: 75,
    sportsCheck: 25,
    timHortons: 10,
    other: 0,
  },
  {
    ruleNum: 6,
    disc: "every $20 spend at Sport Check",
    points: 75,
    sportsCheck: 20,
    other: 0,
  },
  {
    ruleNum: 7,
    disc: "every $1 spend for all other purchases (including left over amount)",
    points: 1,
    other: 1,
  },
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 950}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{color: "#3472aa"}}>Point System</TableCell>
            <TableCell style={{color: "#3472aa"}} align="right">
              Other
            </TableCell>
            <TableCell style={{color: "#3472aa"}} align="right">
              Subway
            </TableCell>
            <TableCell style={{color: "#3472aa"}} align="right">
              Tim Hortons
            </TableCell>
            <TableCell style={{color: "#3472aa"}} align="right">
              Sport Check
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pointRules.map((row) => (
            <TableRow
              key={row.points}
              sx={{"&:last-child td, &:last-child th": {border: 0}}}
            >
              <TableCell
                style={{fontWeight: "bold"}}
                component="th"
                scope="row"
              >
                +{row.points}
              </TableCell>
              <TableCell align="right">
                {row.other ? "$" + row.other : "-"}
              </TableCell>
              <TableCell align="right">
                {row.subway ? "$" + row.subway : "-"}
              </TableCell>
              <TableCell align="right">
                {row.timHortons ? "$" + row.timHortons : "-"}
              </TableCell>
              <TableCell align="right">
                {row.sportsCheck ? "$" + row.sportsCheck : "-"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
