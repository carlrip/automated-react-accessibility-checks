import React from 'react';
import { useForm } from 'react-hook-form';

type FormData = { name: string };

export function Form1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input type="text" {...register('name', { required: true })} />
      {errors.name && <div>You must enter your name</div>}
      <button type="submit">Submit</button>
    </form>
  );
}
