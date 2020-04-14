import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import Button from '../../components/common/Button';
import styled from 'styled-components';

const SearchBoxBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    width: 200,
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.

    '&:focus': {
      borderRadius: 4,
      borderColor: '#03588C',
      boxShadow: '0 0 0 0.2rem rgba(3,87,140,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export const PositionsSelects = () => {
  const [position, setPosition] = React.useState('');
  const handleChange = event => {
    setPosition(event.target.value);
  };

  const classes = useStyles();
  return (
    <FormControl className={classes.margin}>
      {/*<InputLabel id="demo-customized-select-label">보직</InputLabel>*/}
      <SearchBoxBlock>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={position}
          onChange={handleChange}
          input={<BootstrapInput />}
        >
          <MenuItem value="">
            <em>--선택--</em>
          </MenuItem>
          <MenuItem value={10}>사무</MenuItem>
          <MenuItem value={20}>배전</MenuItem>
          <MenuItem value={30}>송변전</MenuItem>
          <MenuItem value={40}>ICT</MenuItem>
          <MenuItem value={50}>건축</MenuItem>
          <MenuItem value={70}>토목</MenuItem>
          <MenuItem value={80}>원자력</MenuItem>
          <MenuItem value={90}>연구</MenuItem>
        </Select>
        <Button type="submit">추천</Button>
      </SearchBoxBlock>
    </FormControl>
  );
};

const BestSelect = () => {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="demo-customized-textbox">Id</InputLabel>
        <BootstrapInput id="demo-customized-textbox" />
      </FormControl>
    </div>
  );
};

export default BestSelect;
