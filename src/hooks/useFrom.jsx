import { useState } from "react";

const useForm = (initialArray) => {
  let [values, setValues] = useState(initialArray);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setValues(initialArray);
  };

  return { values, handleChange, resetForm };
};

export default useForm;
