"use client";

import Link from "next/link";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { BsGoogle } from "react-icons/bs";

const LoginPage = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};
    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });
    alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
  };

  return (
    <div className="container mx-auto flex justify-center items-center h-screen flex-col">
      <Form
        className="p-4 rounded-lg border flex w-96 flex-col gap-4  "
        onSubmit={onSubmit}
      >
        <h2 className="text-center text-3xl font-bold text-slate-700 mb-5">
          Login your account
        </h2>
        <TextField isRequired name="email" type="email">
          <Label className="text-lg">Email</Label>
          <Input
            placeholder="john@example.com"
            className="border border-gray-300 shadow-none"
          />
          <FieldError />
        </TextField>
        <TextField isRequired minLength={8} name="password" type="password">
          <Label className="text-lg">Password</Label>
          <Input
            placeholder="Enter your password"
            className="border border-gray-300 shadow-none"
          />
          <FieldError />
        </TextField>
        <div className="flex gap-2">
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </div>
        <div>
          <p className="text-center font-medium text-gray-500">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-sky-400">
              Sign up
            </Link>
          </p>
          <p className="my-5 text-center text-gray-500">Or, Login with</p>
          <div className="flex items-center justify-center border gap-5 p-3 rounded-xl cursor-pointer ">
            <BsGoogle className="text-2xl" />
            <span className="font-medium text-slate-700">
              Login with Google
            </span>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;
