import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = a => ({
  root: {},
  input: {},
  iconButton: {},
});

/*
makeStyles(theme => ({
  root: {
  //  display: 'flex',
  //  width: 400,
  //justifyItems: 'center',
  //},
  //root: {
  //'& > *': {
  //  margin: theme.spacing(1),
  //  width: '5ch',
  //},
  //},
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 1,
  },
}));
*/

const SearchBar = () => {
  const classes = useStyles();

  return (
    <form>
      <div>
        <InputBase required className={classes.input} />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </div>
    </form>
  );
};

export default SearchBar;
