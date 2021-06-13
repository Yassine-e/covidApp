import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NativeSelects(props ) {
  const classes = useStyles();
  const [state] = React.useState({
    age: '',
    name: '',
  });

//   const handleChange = (event) => {
//     const name = event.target.value;
//     setState({
//       ...state,
//       [name]: event.target.value,
//     });
//     console.log(name);
//   };

  return (
    <div>
      
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor="filled-age-native-simple">Options</InputLabel>
        <Select
          native
          value={state.age}
          onClick={(e)=>props.handleComponent(e.target.value)}
          onChange={(e)=>props.handleComponent(e.target.value)}
          onClick={(e)=>props.handleComponent(e.target.value)}
          inputProps={{
            name: 'age',
            id: 'filled-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value='NewConfirmed'>New Confirmed</option>
          <option value='TotalConfirmed'>Total Confirmed</option>
          <option value='NewDeaths'>New Deaths</option>
          <option value='TotalDeaths'>Total Deaths</option>
          <option value='NewRecovered'>New Recovered</option>
          <option value='TotalRecovered'>Total Recovered</option>
          <option value='TotalActif'>Total Actif</option>
          <option value='TotalVaccinated1'>Total Vaccinated 1</option>
          <option value='TotalVaccinated2'>Total Vaccinated 2</option>
        </Select>
      </FormControl>
    </div>
  );
}
