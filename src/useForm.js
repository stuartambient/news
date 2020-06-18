import { useState, useEffect } from "react";

const useForm = callback => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setIsSubmitting(true);
  };

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (isSubmitting) {
      setIsSubmitting(false);
      return callback(searchTerm);
    }
  }, [callback, isSubmitting, searchTerm]);
  return { handleSubmit, handleChange };
};

export default useForm;
