import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(
  seq,
  department,
  totalScore,
  schoolScore,
  majorScore,
  school,
  language,
  education,
  certificate,
  mbo,
) {
  return {
    seq,
    department,
    totalScore,
    schoolScore,
    majorScore,
    school,
    language,
    education,
    certificate,
    mbo,
  };
}

const rows = [
  createData(
    1,
    '데이터사이언스연구소',
    99,
    99,
    99,
    '숭실대학교',
    'TOEIC 990',
    'GE',
    '정보처리기사',
    'S',
  ),
];

const DenseTable = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>추천</TableCell>
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
          {rows.map(row => (
            <TableRow key={row.seq}>
              <TableCell component="th" scope="row" align="right">
                {row.seq}
              </TableCell>
              <TableCell align="right">{row.department}</TableCell>
              <TableCell align="right">{row.totalScore}</TableCell>
              <TableCell align="right">{row.schoolScore}</TableCell>
              <TableCell align="right">{row.majorScore}</TableCell>
              <TableCell align="right">{row.school}</TableCell>
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

export default DenseTable;
