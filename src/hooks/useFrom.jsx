import { useState } from "react";

const useForm = (initialObject) => {
  let [values, setValues] = useState(initialObject);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setValues(initialObject);
  };

  return { values, handleChange, resetForm };
};

export default useForm;
