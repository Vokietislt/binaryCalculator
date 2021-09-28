import React, {useState} from 'react';
import { Button, TextField } from '@material-ui/core';

  export default function Calculator () {
    const [count, setCount] = useState(0)
    const [countWhole, setCountWhole] = useState(0)
    const [changedCount,sechangedCount] = useState(0)
    
    const calculateBinary = (el) => {
      const numberRe = /[^0-1]/;
      const charRe = /[0-9]*/;
      if (el==="0" || el ===""){return false}
      let numbers = el.split(numberRe).filter(e =>  e);
      let chars = el.split(charRe).filter(e =>  e);
      let counting = []
      let sum = 0
     numbers.forEach((element , index) => {
       counting.push( parseInt(element, 2))
       if (chars[index]){counting.push(chars[index])}
      });
      sum = eval(counting.join(""))
      setCountWhole(el)
      sechangedCount(sum)
      setCount(sum.toString(2))

    }
    const buttonForGrid = (value) => {
      return <Button color="primary" type="button"
             onClick={e => setCount(count+value)}
              >{value}</Button>
    }
    const element = (
        <div className="down">
          <p >Dec: {changedCount}</p>
          <p>{countWhole}</p>
          <TextField 
          id="input"
          inputProps={{ style: { textAlign: 'right' }}}
          label="" 
          variant="outlined"  
          type="text" 
          value={count}
          onChange={e => validateInput(e.target.value)}
          />
          <div className="flex-right">
          <div className="flex-down">
          <Button color="primary" type="button"
            onClick={e => calculateBinary(count)}
          >Calculate</Button>
          <Button color="primary" type="button"
            onClick={e => setCount(count.slice(0, -1))}
          >&#x23CE;</Button>
          <Button color="primary" type="button"
            onClick={e => setCount(0)}
          >Clear</Button>
          </div>
          <div className="buttonGrid">
            {buttonForGrid("0")}
            {buttonForGrid("1")}
            {buttonForGrid("+")}
            {buttonForGrid("-")}
            {buttonForGrid("*")}
            {buttonForGrid("/")}
           </div>
           </div>
        </div>
    );   
    const validateInput = (input) =>{
      const re = /^[0-1,+,\-,*,/]+$/;
      let length = input.length
      console.log(input[length-1],input[length-2])
      if(re.test(input))
      setCount(input)
      if(isNaN(input[length-1]) && isNaN(input[length-2]) ){
      }
     }
return element;
 }