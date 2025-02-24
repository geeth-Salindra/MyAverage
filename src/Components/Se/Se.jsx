import './Se.css';
import { useState, useEffect } from "react";
import '../../App.css';
import Header from '../Header/Header';
import DevMarksFinal from '../DevMarksFinal/DevMarksFinal';

export default function Se(){

    const [totalSum, setTotalSum] = useState({});
    const [moduleAverages, setModuleAverages] = useState({});
    const [click, setClick] = useState(0);
    const [error, setError] = useState(false);
  
    function setbtn() {
      const allComponentsFilled = Object.keys(totalSum).length === calculate.length;
      const allValid = Object.values(totalSum).every(sum => sum !== 0);
  
      if (allComponentsFilled && allValid) {
        setClick(totalAverage);
        setError(false);
      } else {
        setError(true);
      }
    }
  
    const calculate = [
      { Points: 20, Title: "Real World Project" },
      { Points: 20, Title: "Design for User Experience 1" },
      { Points: 20, Title: "Programming, Algorithm and Data Structures " },
      { Points: 20, Title: "Design for User Experience 2" },
      { Points: 20, Title: "Data and Information Retrieval " },
      { Points: 10, Title: "Effective Communication Skills 2" },
      { Points: 10, Title: "Technology and its Social, Legal and Ethical Context " },
      { Points: 20, Title: "Web API Development " },
      { Points: 20, Title: "Interactive Pervasive Computing " },
      { Points: 20, Title: "iOS Application Development " },
      { Points: 30, Title: "Individual Project" },
      { Points: 20, Title: "Agile Development" },
      { Points: 10, Title: "Artificial Intelligence and Human-Computer Interaction" }
    ];
  
    const totalPoints = calculate.reduce((sum, item) => sum + item.Points, 0);
  
    const updateTotal = (index, sum, avg, valid) => {
      setTotalSum(prev => ({ ...prev, [index]: valid ? sum : 0 }));
      setModuleAverages(prev => ({ ...prev, [index]: valid ? avg : 0 }));
    };
  
    const validSums = Object.values(totalSum).filter(sum => sum > 0);
    const totalAverage = validSums.length > 0 ? (validSums.reduce((acc, curr) => acc + curr, 0) / totalPoints).toFixed(2) : 0;

    
    return(
        <>
     <Header Title="Grade Calculator" SUBTitle="(SE Grade calculator)"/>

{calculate.map((item, index) => (
  <DevMarksFinal
    key={index}
    points={item.Points}
    title={item.Title}
    updateTotal={(sum, avg, valid) => updateTotal(index, sum, avg, valid)}
  />
))}

<div className="style-button-div">
  <button className="style-button" onClick={setbtn}>Calculate the final average</button>
</div>

{error && <div><label className="lbl-error">Error Handling: Each module must have at least two filled fields.</label></div>}

<h2>Total Sum of All Modules: {Object.values(totalSum).reduce((acc, curr) => acc + curr, 0)}</h2>
<h2>Total Average of All Modules: {click}</h2>
        </>
    );
}