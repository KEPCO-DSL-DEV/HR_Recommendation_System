import React from 'react';
import SearchBar from '../../components/common/SearchBar';
import { SettingList } from '../../components/common/Lists';
import Button from '../../components/common/Button';

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

const Setting = () => {
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
            <h6 className={classes.h6}>보직 선택</h6>
            <SearchBar inputName="보직을 입력해주세요" />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h6 className={classes.h6}>인재상</h6>
            <SettingList />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.button}>
            <Button>변경</Button>
            <p>(모델생성)</p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Setting;
