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
    dispatch(createUser(userData));
  } 

  dispatch(createUser(values));

  return (
    <form action="">
      <div className="border-lime-900 border-[1px] mb-5">
        <Input
          name="name"
          value={values.name}
          onChange={handleChange}
        />
      </div>
      <div className="border-lime-900 border-[1px] mb-5">
        <Input 
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </div>
      <div className="border-lime-900 border-[1px] mb-5">
        <Input
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </div>
      <div className="border-lime-900 border-[1px] mb-5">
        <Input
          name="avatar"
          value={values.avatar}
          onChange={handleChange}
        />
      </div>
      <MButton 
        label="Войти"
        onClick={handleSubmit}
      />
      <Link href={'/auth'} >
        Have an account
      </Link>
    </form>
  )
}

export default SingUpForm;