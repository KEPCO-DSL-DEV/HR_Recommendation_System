import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
}));

const ControlledOpenSelect = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = event => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button className={classes.button} onClick={handleOpen}>
        보직 선택
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Position</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>사무</MenuItem>
          <MenuItem value={20}>배전</MenuItem>
          <MenuItem value={30}>송변전</MenuItem>
          <MenuItem value={40}>ICT</MenuItem>
          <MenuItem value={50}>건축</MenuItem>
          <MenuItem value={60}>토목</MenuItem>
          <MenuItem value={70}>원자력</MenuItem>
          <MenuItem value={80}>연구</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default ControlledOpenSelect;
