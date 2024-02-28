import { useState } from "react";
import FormInput from "../FormInput/FormInput";
import styles from "./Form.module.css";
import SubmittedMessage from "../SubmittedMessage/SubmittedMessage";

function Form() {
  const [formSubmited, setFormSubmited] = useState(false);
  const [values, setValues] = useState({
    lastName: "",
    firstName: "",
    email: "",
    object: "",
    message: "",
  });

  const inputsRow = [
    {
      key: 1,
      id: "lastname",
      name: "lastName",
      type: "text",
      label: "Nom :",
      placeholder: "Nom",
      required: true,
      errorMessage: "Renseigner le nom.",
    },
    {
      key: 2,
      id: "firstname",
      name: "firstName",
      type: "text",
      label: "Prénom :",
      placeholder: "Prénom",
      required: true,
      errorMessage: "Renseigner le prénom",
    },
  ];

  const inputs = [
    {
      key: 3,
      id: "email",
      name: "email",
      type: "email",
      label: "E-mail :",
      placeholder: "E-mail",
      required: true,
      errorMessage: "L'e-mail n'est pas valide",
    },
    {
      key: 4,
      id: "obect",
      name: "object",
      type: "text",
      label: "Objet :",
      placeholder: "Objet",
    },
  ];

  const handleSubmit = e => {
    e.preventDefault();

    setFormSubmited(true);
    setValues({
      lastName: "",
      firstName: "",
      email: "",
      object: "",
      message: "",
    });
    setTimeout(() => {
      setFormSubmited(false);
    }, 5000);
  };

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  if (formSubmited) {
    return <SubmittedMessage />;
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      name="contact"
      method="POST"
      data-netlify="true"
    >
      <h3>Me Contacter</h3>
      <div className={styles["input-container-row"]}>
        {inputsRow.map(input => (
          <FormInput
            key={input.key}
            value={values[input.name]}
            onChange={handleChange}
            {...input}
          />
        ))}
      </div>
      <div className={styles["input-container"]}>
        {inputs.map(input => (
          <FormInput
            key={input.key}
            value={values[input.name]}
            onChange={handleChange}
            {...input}
          />
        ))}
      </div>
      <div className={styles.textarea}>
        <label>Message :</label>
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={handleChange}
          placeholder="Rédigez un message"
          rows="5"
        />
      </div>
      <button className={styles.submit} type="submit">
        Envoyer
      </button>
    </form>
  );
}

export default Form;
