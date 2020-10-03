import React from "react";
import dynamic from "next/dynamic";
import { connect } from "react-redux";
import Styles from "./assist.module.css";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import AssistDialog from "./components/Assist.dialog";

import { FullScreenLoader, InlineLoader } from "../general/IsLoading";

const Q_Page = value => {
  const Component = dynamic(
    () => import(`./components/questions/Assist.${value}`),
    {
      loading: () => <FullScreenLoader />,
    }
  );
  return <Component />;
};

const Index = props => {
  const { substances, questionHistory, Q_isLoading } = props;
  const [loading, setLoading] = React.useState("");
  const [openDialog, setOpenDialog] = React.useState("assist_dialog");

  // const trigger = useScrollTrigger({
  //   target: undefined,
  //   disableHysteresis: true,
  //   threshold: 150,
  // });

  return (
    <>
      {loading && <FullScreenLoader />}
      <AssistDialog
        open={openDialog === "assist_dialog"}
        handleClose={() => setOpenDialog(null)}
        setLoading={setLoading}
      />

      <div className={Styles.root}>
        {Q_isLoading && <InlineLoader type="dark" />}
        {!Q_isLoading && <> {Q_Page(questionHistory[0])}</>}
      </div>
    </>
  );
};

const mapPropsToComponent = store => ({
  Q_isLoading: store.assist.Q_isLoading,
  substances: store.assist.substances,
  questionHistory: store.assist.questionHistory,
});

export default connect(mapPropsToComponent)(Index);
