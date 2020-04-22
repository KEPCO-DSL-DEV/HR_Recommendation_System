import React from 'react';
import SearchBar from '../../components/common/SearchBar';
import TotalInfoList, { BasicInfo } from '../../components/common/Lists';
import AnimatedRadar from '../../components/recommend/RaderChart';
import Chart from '../../components/recommend/ComparisonChart';

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

const Positioning = () => {
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
            <SearchBar inputName="사번을 입력해주세요" labelName="Id" />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h6 className={classes.h6}>베스트 추천</h6>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper style={{ fontWeight: 'normal' }}>
            <AnimatedRadar />
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.paper} style={{ height: '300px' }}>
            <h6 className={classes.h6}>개인정보</h6>
            <BasicInfo />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h6 className={classes.h6}>검색 결과</h6>
            <TotalInfoList />
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

export default Positioning;
