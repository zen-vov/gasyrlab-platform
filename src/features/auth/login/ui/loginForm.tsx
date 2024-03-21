'use client'
import { useState } from "react";
import { loginUser } from "../model/login";
import { useAppDispatch, useAppSelector } from "@/shared/hooks/reduxHooks";
import Input from "@/shared/ui/Input/Input";
import MButton from "@/shared/ui/Button/Button";
import { Link } from "@/navigation";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.user);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginEvent = (e: any) => {
    e.preventDefault();
    let userCredentials = {
      email, password
    }
    dispatch(loginUser(userCredentials)).then((result) => {
      if(result.payload) {
        setEmail('');
        setPassword('')
      }
    })
  } 
  // console.log(dispatch(loginUser()));
  
  return (
    <form action="" className="" onSubmit={handleLoginEvent}>
      <h1 className="mb-5">Auth</h1>
      <div className="border-lime-900 border-[1px] mb-5">
        <Input 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="border-lime-900 border-[1px]">
        <Input 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <MButton 
        label={loading ? 'Loading...' : 'Войти'}
        type="submit"
        // onClick={handleSubmit}
      />
      {error && (
        <div className="alert">{error}</div>
      )}
      <Link href={'/signup'}>
        Sing up?
      </Link>
    </form>
  )
}

export default LoginForm;