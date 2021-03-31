import React, { useState } from "react";

type Props = {
  onSubmit: (form: { name: string; nickname: string }) => void;
};

export default function MyForm({ onSubmit }: Props) {
  const [form, setForm] = useState({
    name: "",
    nickname: "",
  });

  const { name, nickname } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: "", nickname: "" });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="name" value={name} onChange={onChange} />
        <input type="text" name="nickname" value={nickname} onChange={onChange} />
        <button>Submit</button>
      </form>
    </div>
  );
}
