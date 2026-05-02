"use client";

import {
  Button,
  Card,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import React from "react";
import { BsGoogle } from "react-icons/bs";

const RegisterPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Card className="border mx-auto w-120 py-10 mt-5">
        <h2 className="text-center text-2xl font-bold">Register Page</h2>

        <Form
          className="flex w-96 mx-auto flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <TextField isRequired name="name" type="text">
            <Label className="text-lg">Name</Label>
            <Input
              placeholder="Enter your name"
              className="border border-gray-300 shadow-none"
            />
            <FieldError />
          </TextField>

          <TextField isRequired name="image" type="text">
            <Label className="text-lg">Image URL</Label>
            <Input
              placeholder="Image URL"
              className="border border-gray-300 shadow-none"
            />
            <FieldError />
          </TextField>

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
              Sign Up
            </Button>
          </div>
          <div>
            <p className="text-center font-medium text-gray-500">
              Already have an account?{" "}
              <Link href="/login" className="text-sky-400">
                Log in Now
              </Link>
            </p>
            <p className="my-5 text-center text-gray-500">Or, sign up with</p>
            <div className="flex items-center justify-center border gap-5 p-3 rounded-xl cursor-pointer ">
              <BsGoogle className="text-2xl" />
              <span className="font-medium text-slate-700">
                Sign Up with Google
              </span>
            </div>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default RegisterPage;
