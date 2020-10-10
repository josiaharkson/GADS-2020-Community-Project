import React from "react";
import { connect } from "react-redux";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Styles from "../../assist.module.css";
import { go_to_previous } from "../../../../store/actions/assist";

const Index = props => {
  const {
    qNumber,
    onClick,
    questionHistory,
    go_to_previous,
    diabledNextButton,
  } = props;

  const onGoToPrevious = () => {
    go_to_previous({
      qNumber,
      questionHistory,
    });
  };
  return (
    <div className={Styles.q_nav}>
      <Typography variant="h5">Question {qNumber}</Typography>

      {questionHistory[0] !== "Q_1" && (
        <Button
          size="small"
          variant="contained"
          onClick={() => onGoToPrevious()}
        >
          PREVIOUS
        </Button>
      )}

      <Button
        size="small"
        variant="contained"
        onClick={() => onClick()}
        disabled={diabledNextButton ? diabledNextButton : false}
      >
        NEXT
      </Button>
    </div>
  );
};

const mapPropsToComponent = store => ({
  questionHistory: store.assist.questionHistory,
});

export default connect(mapPropsToComponent, { go_to_previous })(Index);
