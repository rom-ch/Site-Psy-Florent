import { useState } from "react";
import styles from "./FormInput.module.css";

function FormInput(props) {
  const [focused, setFocused] = useState(false);
  const { id, label, errorMessage, onChange, ...inputProps } = props;

  const handleFocused = () => {
    setFocused(true);
  };

  return (
    <div className={styles.formInput}>
      <label>{label}</label>
      <input
        id={id}
        onChange={onChange}
        onBlur={handleFocused}
        focused={focused.toString()}
        {...inputProps}
      />
      <span className={styles["error-message"]}>{errorMessage}</span>
    </div>
  );
}

export default FormInput;
