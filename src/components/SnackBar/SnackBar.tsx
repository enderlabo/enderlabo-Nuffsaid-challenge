import React from 'react';
import Snackbar, { SnackbarOrigin } from '@material-ui/core/Snackbar';


export interface State extends SnackbarOrigin {
  open: boolean;
}

interface IProsErrorMsg {
  errorMessage: String[]
}


export const PositionedSnackbar = ({errorMessage}: IProsErrorMsg) => {
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };



  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        autoHideDuration={2000}
        message={errorMessage}
        key={vertical + horizontal}
      />
    </>
  );
}