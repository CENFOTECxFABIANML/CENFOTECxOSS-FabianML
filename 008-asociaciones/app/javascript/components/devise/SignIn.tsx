import React from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { SignInI18n } from "../../types";

interface SignInProps {
  i18n: SignInI18n;
  csrfToken: string;
  signUpPath: string;
  forgotPasswordPath: string;
}

const SignIn = ({
  i18n,
  csrfToken,
  signUpPath,
  forgotPasswordPath,
}: SignInProps) => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">{i18n.title}</CardTitle>
          <CardDescription>{i18n.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <form action="/users/sign_in" method="post" id="new_user">
            <input
              type="hidden"
              name="authenticity_token"
              value={csrfToken}
              autoComplete="off"
            />
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="user_email">{i18n.email_label}</Label>
                <Input
                  id="user_email"
                  name="user[email]"
                  type="email"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="user_password">{i18n.password_label}</Label>
                <Input
                  id="user_password"
                  name="user[password]"
                  type="password"
                  required
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="user_remember_me"
                  name="user[remember_me]"
                  value="1"
                />
                <Label
                  htmlFor="user_remember_me"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {i18n.remember_me_label}
                </Label>
              </div>
              <Button type="submit" className="w-full">
                {i18n.submit_button}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-2 text-sm">
          <a href={forgotPasswordPath} className="underline">
            {i18n.forgot_password_link}
          </a>
          <a href={signUpPath} className="underline">
            {i18n.sign_up_link}
          </a>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignIn;
