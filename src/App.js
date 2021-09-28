import './App.css';
import { Button, TextField } from '@material-ui/core';
import Calculator from './forma.js';

function App() {
  return (
    <div id="container" className="down">
      <Calculator/>
    {/* <TextField onChange = {this.handleChange} id="outlined-basic" label="Calculator" variant="outlined" /> */}
    {/* <Button onClick={calculate} color="primary">Calculate</Button> */}
    </div>
  );
}

export default App;
