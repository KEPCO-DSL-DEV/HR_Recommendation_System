import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '30%',
    },
  },
}));

const BasicTextFields = () => {
  const classes = useStyles();

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      flex-flow="row"
    >
      <TextField id="schoool" label="학교명" />
      <TextField id="major" label="전공" />
      <TextField id="education" label="학력" />
      <TextField id="language" label="어학" />
      <TextField id="certificate" label="자격증" />
      <TextField id="reward" label="포상" />
    </form>
  );
};

export default BasicTextFields;
