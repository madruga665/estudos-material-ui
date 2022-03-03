import { useState } from "react";

const useForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = {
      name: name,
      email: email,
      phone: phone,
      address: address,
    };
    console.log(formData);
  };

  return {
    name,
    email,
    phone,
    address,
    handleSubmit,
    setName,
    setEmail,
    setPhone,
    setAddress
  };
};

export default useForm;
