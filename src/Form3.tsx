import React from 'react';
import { useForm } from 'react-hook-form';

type FormData = { name: string };
export function Form3() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        aria-invalid={errors.name ? 'true' : 'false'}
        {...register('name', { required: true })}
      />
      {errors.name && <div role="alert">You must enter your name</div>}
      <button type="submit">Submit</button>
    </form>
  );
}
