'use client'
import { useState } from "react";
import { useAppDispatch } from "@/shared/hooks/reduxHooks"
import { createUser } from "../model/singup";
import MButton from "@/shared/ui/Button/Button";
import Input from "@/shared/ui/Input/Input";
import Link from "next/link";

const SingUpForm = () => {
  const dispatch = useAppDispatch();
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    avatar: ''
  })

  const handleChange = ({ target: { value, name } }: any) => {
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const { avatar, ...userData } = values; 
    const isNotEmpty = Object.values(userData).every((val) => val);

    if(!isNotEmpty) return;
    // dispatch(createUser(userData));
  } 

  // dispatch(createUser(values));

  return (
    <form action="" className="py-5">
      <h1 className="mb-5">Registration</h1>
      <div className="py-3 px-1.5 border-lime-900 border-[1px] mb-5">
        <Input
          name="name"
          className="w-[90%]"
          placeholder="First Name"
          value={values.name}
          onChange={handleChange}
        />
      </div>
      <div className="py-3 px-1.5 border-lime-900 border-[1px] mb-5">
        <Input
          placeholder="Last Name"
          name="avatar"
          value={values.avatar}
          className="w-[90%]"
          onChange={handleChange}
        />
      </div>
      <div className="py-3 px-1.5 border-lime-900 border-[1px] mb-5">
        <Input 
          name="email"
          value={values.email}
          placeholder="Email"
          className="w-[90%]"
          onChange={handleChange}
        />
      </div>
      <div className="py-3 px-1.5 border-lime-900 border-[1px] mb-5">
        <Input
          name="password"
          value={values.password}
          placeholder="Password"
          className="w-[90%]"
          onChange={handleChange}
        />
      </div>
      <MButton 
        label="Войти"
        className="mr-5"
        onClick={handleSubmit}
      />
      <Link href={'/auth'} >
        Have an account?
      </Link>
    </form>
  )
}

export default SingUpForm;