import "./RadioButton.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

function RadioButton4({
  value1,
  value2,
  value3,
  value4,
  handleSubmit,
  onChange,
  selectedValue,
}) {
  return (
    <div className="radio-btn-container">
      <form onSubmit={handleSubmit}>
        <FormControl className="form-container">
          <RadioGroup
            name="radio-btn-group"
            className="radio-btn"
            onChange={onChange}
            value={selectedValue}
          >
            <FormControlLabel
              value={value1}
              control={<Radio />}
              label={value1}
            />
            <FormControlLabel
              value={value2}
              control={<Radio />}
              label={value2}
            />
            <FormControlLabel
              value={value3}
              control={<Radio />}
              label={value3}
            />
            <FormControlLabel
              value={value4}
              control={<Radio />}
              label={value4}
            />
          </RadioGroup>
          <button type="submit" className="submit-btn">
            ✓
          </button>
        </FormControl>
      </form>
    </div>
  );
}

export default RadioButton4;
