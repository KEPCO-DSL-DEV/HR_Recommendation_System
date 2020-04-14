import React from 'react';
import SearchBar from '../../components/common/SearchBar';
import Button from '../../components/common/Button';
import DenseTable from '../../components/recommend/RecommendationTable';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 0.5,
  },
  button: {
    padding: theme.spacing(2),
    textAlign: 'right',
  },
  bar: {
    padding: theme.spacing(2),
    textAlign: 'center',
    //justifyItems: 'center',
  },
  h6: {
    padding: theme.spacing(1),
    textAlign: 'left',
    fontWeight: 'bold',
  },
  paper: {
    padding: theme.spacing(2),
    fontWeight: 'bold',
    textAlign: 'center',
    justifyItems: 'center',
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
          <Paper>
            <SearchBar>전공</SearchBar>
          </Paper>
          <Paper className={classes.bar}>
            직군 <SearchBar>직군</SearchBar>
          </Paper>
          <Paper className={classes.button}>
            <Button>검색</Button>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h6 className={classes.h6}>검색 결과</h6>
            <DenseTable />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Search;
