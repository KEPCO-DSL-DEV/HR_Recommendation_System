import React from 'react';

import SearchBar from '../../components/common/SearchBar';
import Button from '../../components/common/Button';
import TotalInfoList from '../../components/common/Lists';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    padding: theme.spacing(2),
    textAlign: 'right',
  },
  h6: {
    padding: theme.spacing(1),
    textAlign: 'left',
    fontWeight: 'bold',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    fontWeight: 'bold',
  },
}));

const Search = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={3}>
          <Paper
            className={classes.paper}
            style={{ backgroundColor: '#1C2F40', color: 'white' }}
          >
            보직, 인재 추천
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper
            className={classes.paper}
            style={{ backgroundColor: '#D7D7D9', color: 'black' }}
          >
            직원 검색
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h6 className={classes.h6}>조건 검색</h6>
            <SearchBar inputName="전공" />
            <p />
            <SearchBar inputName="어학" />
            <p />
            <SearchBar inputName="자격증" />
            <p className={classes.button}>
              <Button>검색</Button>
            </p>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h6 className={classes.h6}>검색 결과</h6>
            <TotalInfoList />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Search;
