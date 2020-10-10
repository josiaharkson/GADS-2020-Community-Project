import React from "react";
import axios from "axios";
import { withRouter } from "next/router";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Index = ({ open, handleClose, setLoading, router }) => {
  const [checked, setChecked] = React.useState(false);
  const [countries, setCountries] = React.useState([]);
  const [country, setCountry] = React.useState("");

  const onClickEnd = () => {
    setLoading(true);
    handleClose();
    setTimeout(() => router.push("/"), 2000);
  };

  const getAllCountries = async () => {
    try {
      const res = await axios.get("/api/country/all");

      setCountries(res.data.countries);
    } catch (e) {}
  };

  React.useEffect(() => {
    if (!countries.length) {
      getAllCountries();
    }
  });

  return (
    <Dialog
      disableBackdropClick
      disableEscapeKeyDown
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Introduction <i>(Please read to patient )</i>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Thank you for agreeing to take part in this brief interview about
          alcohol, tobacco products and other drugs. I am going to ask you some
          questions about your experience of using these substances across your
          lifetime and in the past three months. These substances can be smoked,
          swallowed, snorted, inhaled, injected or taken in the form of pills
          (show drug card). <br />
          <br /> Some of the substances listed may be prescribed by a doctor
          (like amphetamines, sedatives, pain medications). For this interview,
          we will not record medications that are used as prescribed by your
          doctor. However, if you have taken such medications for reasons other
          than prescription, or taken them more frequently or at higher doses
          than prescribed, please let me know. While we are also interested in
          knowing about your use of various illicit drugs, please be assured
          that information on such use will be treated as strictly confidential.
        </DialogContentText>

        <Autocomplete
          id="combo-box-demo"
          options={countries}
          getOptionLabel={option => option.name}
          onChange={e => setCountry(e.target.innerHTML)}
          style={{ width: "100%" }}
          renderInput={params => (
            <TextField
              {...params}
              fullWidth
              label="Where do you live in?"
              variant="outlined"
            />
          )}
        />

        <FormControlLabel
          label={<b>I have carefully read the above instruction</b>}
          control={
            <Checkbox
              value="remember"
              color="secondary"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
          }
        />
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={onClickEnd}>
          END
        </Button>

        <Button
          disabled={!checked || !country}
          onClick={handleClose}
          color="primary"
          variant="contained"
        >
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default withRouter(Index);
