import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '30%',
    },
  },
  table: {
    minWidth: 500,
  },
  setting: {
    width: 500,
    margin: 'auto',
    rowHeight: 30,
  },
  head: {
    backgroundColor: '#587E8C',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
}));

function createData(
  seq,
  department,
  totalScore,
  schoolName,
  schoolScore,
  majorName,
  majorScore,
  language,
  education,
  certificate,
  mbo,
) {
  return {
    seq,
    department,
    totalScore,
    schoolName,
    schoolScore,
    majorName,
    majorScore,
    language,
    education,
    certificate,
    mbo,
  };
}

const samples = [
  createData(
    1,
    '데이터사이언스연구소',
    99,
    '숭실대학교',
    99,
    '글로벌미디어',
    99,
    'TOEIC 990',
    'GE',
    '정보처리기사',
    'S',
  ),
];

const TotalInfoList = () => {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">순번 </TableCell>
            <TableCell align="center">부서</TableCell>
            <TableCell align="center">총 적합도</TableCell>
            <TableCell align="center">학력 적합도</TableCell>
            <TableCell align="center">전공 적합도</TableCell>
            <TableCell align="center">학교</TableCell>
            <TableCell align="center">어학</TableCell>
            <TableCell align="center">교육</TableCell>
            <TableCell align="center">자격증</TableCell>
            <TableCell align="center">MBO</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {samples.map(row => (
            <TableRow key={row.seq}>
              <TableCell component="th" scope="row" align="right">
                {row.seq}
              </TableCell>
              <TableCell align="right">{row.department}</TableCell>
              <TableCell align="right">{row.totalScore}</TableCell>
              <TableCell align="right">{row.schoolScore}</TableCell>
              <TableCell align="right">{row.majorScore}</TableCell>
              <TableCell align="right">{row.schoolName}</TableCell>
              <TableCell align="right">{row.language}</TableCell>
              <TableCell align="right">{row.education}</TableCell>
              <TableCell align="right">{row.certificate}</TableCell>
              <TableCell align="right">{row.mbo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TotalInfoList;

export const SettingList = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.setting}>
      <Table className={classes.setting}>
        {samples.map(row => (
          <TableBody>
            <TableRow>
              <TableCell className={classes.head}>학교</TableCell>
              <TableCell align="right">{row.schoolName}</TableCell>
              <TableCell align="right">다중선택</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className={classes.head}>전공</TableCell>
              <TableCell align="right">{row.majorName}</TableCell>
              <TableCell align="right">다중선택</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.head}>학점</TableCell>
              <TableCell align="right">{row.majorScore}</TableCell>
              <TableCell align="right">다중선택</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.head}>어학</TableCell>
              <TableCell align="right">{row.language}</TableCell>
              <TableCell align="right">다중선택</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.head}>자격증</TableCell>
              <TableCell align="right">{row.certificate}</TableCell>
              <TableCell align="right">다중선택</TableCell>
            </TableRow>
          </TableBody>
        ))}
      </Table>
    </TableContainer>
  );
};

export const BasicInfo = () => {
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
