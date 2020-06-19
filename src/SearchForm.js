import React from "react";
import useForm from "./useForm";

const SearchForm = props => {
  const Submit = searchTerm => {
    props.onChange(searchTerm);
  };

  const { handleSubmit, handleChange } = useForm(Submit);

  return (
    <Form
      onSubmit={event => {
        event.preventDefault();
        handleSubmit(event);
      }}
    >
      <InputField name="search" onChange={handleChange}>
        Search Term
      </InputField>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

const Form = ({ onSubmit, children }) => (
  <form onSubmit={onSubmit}>{children}</form>
);

const Button = ({ onClick, type = "button", children }) => (
  <button type={type} onClick={onClick}>
    {children}
  </button>
);

const InputField = ({ name, value, type = "text", onChange, children }) => (
  <label>
    {children}
    <input name={name} value={value} type={type} onChange={onChange} />
  </label>
);

export default SearchForm;
