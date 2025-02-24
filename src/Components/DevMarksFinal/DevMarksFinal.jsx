import { useState, useEffect } from "react";
import "./DevMarksFinal.css";

function DevMarksFinal(props) {
  const [cw1, setCw1] = useState("");
  const [cw2, setCw2] = useState("");
  const [exam1, setExam1] = useState("");
  const [sum, setSum] = useState(0);
  const [average, setAverage] = useState(0);
  const [valid, setValid] = useState(false);

  let modpoint = props.points;

  useEffect(() => {
    let values = [cw1, cw2, exam1].filter(val => val !== "" && val !== "N");

    if (values.length >= 2) {
      let total = values.reduce((acc, curr) => acc + Number(curr), 0);
      let avg = (total / values.length).toFixed(2);
      let calculatedSum = avg * modpoint;

      setSum(calculatedSum);
      setAverage(avg);
      setValid(true);
      props.updateTotal(calculatedSum, avg, true);
    } else {
      setSum(0);
      setAverage(0);
      setValid(false);
      props.updateTotal(0, 0, false);
    }
  }, [cw1, cw2, exam1]);

  return (
    <div className="card">
      <div className="form-container">
        <h2>{props.title}</h2>
        <div className="input-container">
          <label>CW1 (out of 100)</label>
          <input type="number" placeholder="CW1" value={cw1} onChange={(e) => setCw1(e.target.value)} />
        </div>
        <div className="input-container">
          <label>CW2 (out of 100)</label>
          <input type="number" placeholder="CW2" value={cw2} onChange={(e) => setCw2(e.target.value)} />
        </div>
        <div className="input-container">
          <label>EXAM (out of 100)</label>
          <input type="number" placeholder="EXAM" value={exam1} onChange={(e) => setExam1(e.target.value)} />
        </div>

        <p className="module-credit">Module Average: {average}</p>
        <p className="module-credit">Module Credit: {sum}</p>
        {!valid && <p className="error-text">⚠️ At least 2 fields must be filled</p>}
      </div>
    </div>
  );
}

export default DevMarksFinal;
