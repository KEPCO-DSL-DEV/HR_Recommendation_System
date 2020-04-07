import React from 'react';
import Header from '../components/common/Header';
import SearchBox from '../components/write/SearchBox';
import ItemList from '../components/write/ItemList';
import Button from '../components/common/Button';
import SearchList from '../components/write/SearchList';
import AbilityGraph from '../components/write/AbilityGraph';
import Chart from '../components/write/ComparisonChart';

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

const PostsPosition = () => {
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
            보직 추천
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h6 className={classes.h6}>인재 선택</h6>
            <SearchBox></SearchBox>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h6 className={classes.h6}>검색결과: 개인정보</h6>
            <SearchList />
          </Paper>
          <Paper className={classes.button}>
            <Button className={classes.button}>추천</Button>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h6 className={classes.h6}>추천</h6>
            <AbilityGraph />
            <SearchList />
            <ItemList />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h6 className={classes.h6}>보직 평균과 비교</h6>
            <Chart />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default PostsPosition;
