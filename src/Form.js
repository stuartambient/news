import React from "react";
import useForm from "./useForm";

const Form = () => {
  const submit = searchTerm => {
    console.log("Search term: ", searchTerm);
  };

  const { handleSubmit, handleChange } = useForm(submit);

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <input name="search" onChange={handleChange} type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
