import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      width: '20ch',
    },
  },
}));

const SearchList = () => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          required
          id="schoolName"
          label="학교명"
          defaultValue="숭실대학교"
        />
        <TextField
          required
          id="majorName"
          label="전공"
          defaultValue="글로벌미디어"
        />
        <TextField
          required
          id="toeicScore"
          label="어학 성적"
          defaultValue="TOEIC 990"
        />
        <TextField
          required
          id="certificateName"
          label="자격증"
          defaultValue="정보처리기사"
        />
        <TextField
          id="standard-search"
          label="포상"
          type="search"
          defaultValue="-"
        />
        <TextField
          id="additionalInformation"
          label="추가 정보"
          defaultValue="특이 사항 없음"
          helperText="Some important text"
        />
      </div>
    </form>
  );
};

export default SearchList;
