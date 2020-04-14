import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#8C7264',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  body: {
    color: '#BF947A',
    fontSize: 14,
    fontWeight: '200',
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: '',
    },
  },
}))(TableRow);
const useStyles = makeStyles({
  table: {
    minWidth: 200,
  },
});

function createData(school, major, toeic, etc1, etc2) {
  return { school, major, toeic, etc1, etc2 };
}

const rows = [
  createData('숭실대학교', '글로벌미디어학부', 990, '정보처리기사', 4.0),
];

const ItemList = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">인재상</StyledTableCell>
          </TableRow>
        </TableHead>
      </Table>
      <Table className={classes.table} aria-label="customized table">
        <TableBody>
          <StyledTableRow>
            <StyledTableCell align="center">학교</StyledTableCell>
            <StyledTableCell align="right">숭실대학교</StyledTableCell>
            <StyledTableCell align="right">다중선택</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell align="center">전공</StyledTableCell>
            <StyledTableCell align="right">글로벌미디어</StyledTableCell>
            <StyledTableCell align="right">다중선택</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell align="center">학점</StyledTableCell>
            <StyledTableCell align="right">4.50</StyledTableCell>
            <StyledTableCell align="right">다중선택</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell align="center">토익</StyledTableCell>
            <StyledTableCell align="right">990</StyledTableCell>
            <StyledTableCell align="right">다중선택</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell align="center">자격증</StyledTableCell>
            <StyledTableCell align="right">정보처리기사</StyledTableCell>
            <StyledTableCell align="right">다중선택</StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ItemList;
