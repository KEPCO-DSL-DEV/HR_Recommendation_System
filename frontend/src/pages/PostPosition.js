import React from 'react';
import Header from '../components/common/Header';
import SearchBox from '../components/write/SearchBox';
import ItemList from '../components/write/ItemList';
import Button from '../components/common/Button';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 0.5,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    padding: theme.spacing(2),
    textAlign: 'right',
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
            보직 별 인재상 반영
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
            <SearchBox />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <ItemList />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.button}>
            <Button>변경</Button>
            <p>
              <b>(모델생성)</b>
            </p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default PostsPosition;
