import './index.css'

import React,{useState} from 'react';



function App() {
const [weight, Setweight]=useState(0);
const [height,Setheight]=useState(0);
const[bmi, Setbmi]=useState(0);
const [message, setMessage] = useState('')

let culcbmi=(event)=>{

  event.preventDefault();


  if( height===0 && weight===0){
    alert('Please enter valid credential for height and weight')

  }

  else{
    let bmi=((weight*weight)/(height));
    Setbmi(bmi.toFixed(2));
    if(bmi<25){
      setMessage('you are underweight');

    }
    else if(bmi>=25 && bmi<30){
setMessage('Congratulations You are healthy ');
    }
    else {
      
      setMessage('Sorry you are Overweight  ');
    }


  }

}

let reload = () => {
    window.location.reload()
  }

  let imgSrc;

  if (bmi < 1) {
    imgSrc = null
  } else {
    if(bmi < 25) {
      imgSrc = require('../src/assets/underweight.png')
    } else if (bmi >= 25 && bmi < 30) {
      imgSrc = require('../src/assets/healthy.png')
    } else {
      imgSrc = require('../src/assets/overweight.png')
    }
  }


  return (
    <div className=" container ">
      <h2 className="center"  type='submit'> BMI CALCULATOR </h2>
      <form onSubmit={culcbmi}>
        <div>
          <label> Enter Your Weight in lbs </label>
          <input value={height} onChange={(e)=> Setheight(e.target.value)}></input>
        </div>
        <div>
          <label> Enter your Height in inches </label>
          <input value={weight} onChange={(e)=>Setweight(e.target.value)}></input>
          
        </div>
        <div>
          <button className="btn btn-" type='submit'> SUBMIT</button>
          <button className="btn btn-outline" onClick={reload} > RELOAD</button>
        </div>
        
      </form>

      <div className="center">
        <h3> Your BMI is: {bmi}</h3>
        <p> {message}</p>
        
      </div>

       <div className="img-container">
         <img src={imgSrc} alt=''></img>
       </div>
      
    </div>
  );
}

export default App;
