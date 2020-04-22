import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { ActivePieChart, SimpleBar } from '../../components/common/Recharts';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    padding: theme.spacing(0),
    textAlign: 'right',
  },
  h6: {
    padding: theme.spacing(0),
    textAlign: 'left',
    fontWeight: 'bold',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 'auto',
  },
  firstChild: {
    backgroundSize: '300',
  },
}));

const Statistics = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={3}>
          <Paper
            className={classes.paper}
            style={{ backgroundColor: '#1C2F40', color: 'white' }}
          >
            보직명 :
          </Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper
            className={classes.paper}
            style={{ backgroundColor: '#D7D7D9', color: 'black' }}
          >
            통계
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h6 className={classes.h6}>현재 누적 사원 수 : 00 명</h6>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            최종학력
            <ActivePieChart />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            주요전공 <p>top10</p>
            <SimpleBar fillColour="#024959" />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            출신학교(대학기준) <p>top10</p>
            <SimpleBar fillColour="#027373" />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            수행보직 <p>top10</p>
            <SimpleBar fillColour="#F2B705" />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            이수교육
            <SimpleBar fillColour="#F29F05" />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            보유 자격증
            <SimpleBar fillColour="#F2B999" />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h6 className={classes.h6}>
              평균 MBO 점수: 00
              <br /> 평균 다면평가 점수: 00
              <br /> 평균 포상건수: 00
            </h6>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h6 className={classes.h6}>인재상</h6>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h6 className={classes.h6}>직무 정보 조회</h6>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Statistics;
