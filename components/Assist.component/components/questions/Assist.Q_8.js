import React from "react";
import clsx from "clsx";
import { connect } from "react-redux";

import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Radio from "@material-ui/core/Radio";

import Styles from "../../assist.module.css";
import { go_to_Q8 } from "../../../../store/actions/assist";

import AssisQ_Nav from "./Assist.Q_Nav";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles(theme => ({
  table: {
    minWidth: 600,
  },
  tb_head: {
    padding: 444,
  },
  rot: {
    width: "100%",
    fontWeight: 700,
    height: "100%",
    fontSize: 12,
    letterSpacing: 1,
    lineHeight: 1,
  },
  rot_gray: {
    backgroundColor: theme.palette.action.hover,
  },
  rot_white: {
    backgroundColor: "inherit",
  },
}));

const Index = () => {
  const classes = useStyles();
  const [keyValue, setKeyValue] = React.useState("");

  const handleChange = value => {
    setKeyValue(value);
  };

  const onProceed = () => {
    console.log({ keyValue });
  };

  return (
    <div className={Styles.body}>
      <AssisQ_Nav qNumber={8} onClick={() => onProceed()} />
      <Paper elevation={10} className={Styles.body_2}>
        <Divider />
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead className={classes.tb_head}>
              <TableRow>
                <TableCell padding="checkbox"></TableCell>
                <TableCell></TableCell>
                <TableCell
                  className={clsx(classes.rot, classes.rot_gray)}
                  align="center"
                  padding="checkbox"
                >
                  No, Never
                </TableCell>
                <TableCell
                  className={clsx(classes.rot, classes.rot_white)}
                  align="center"
                  padding="checkbox"
                >
                  Yes, in the past 3 months
                </TableCell>
                <TableCell
                  className={clsx(classes.rot, classes.rot_gray)}
                  align="center"
                  padding="checkbox"
                >
                  Yes, but not in the past 3 months
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableCell padding="checkbox">1</TableCell>
                <TableCell>
                  Have you ever Have you ever used any drug by injection? used
                  any drug by injection? (NON-MEDICAL USE ONLY)
                </TableCell>
                <TableCell
                  className={classes.rot_gray}
                  align="center"
                  padding="checkbox"
                >
                  <Radio
                    size="small"
                    checked={keyValue === "0"}
                    onChange={e => handleChange(e.target.value)}
                    value="0"
                    name="No, Never"
                    inputProps={{ "aria-label": Math.random() }}
                  />
                </TableCell>
                <TableCell
                  className={classes.rot_white}
                  align="center"
                  padding="checkbox"
                >
                  <Radio
                    size="small"
                    checked={keyValue === "2"}
                    onChange={e => handleChange(e.target.value)}
                    value="2"
                    name="Yes, in the past 3 months"
                    inputProps={{ "aria-label": Math.random() }}
                  />
                </TableCell>

                <TableCell
                  className={classes.rot_gray}
                  align="center"
                  padding="checkbox"
                >
                  <Radio
                    size="small"
                    checked={keyValue === "1"}
                    onChange={e => handleChange(e.target.value)}
                    value="1"
                    name="Yes, but not in the past 3 months"
                    inputProps={{ "aria-label": Math.random() }}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default connect(null, { go_to_Q8 })(Index);
