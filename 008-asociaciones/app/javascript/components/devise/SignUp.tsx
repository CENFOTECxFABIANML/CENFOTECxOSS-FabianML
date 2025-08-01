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
import { SignUpI18n } from "../../types";

interface SignUpProps {
  i18n: SignUpI18n;
  csrfToken: string;
  logInPath: string;
}

const SignUp = ({ i18n, csrfToken, logInPath }: SignUpProps) => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">{i18n.title}</CardTitle>
          <CardDescription>{i18n.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <form action="/users" method="post" id="new_user">
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
              <div className="grid gap-2">
                <Label htmlFor="user_password_confirmation">
                  {i18n.password_confirmation_label}
                </Label>
                <Input
                  id="user_password_confirmation"
                  name="user[password_confirmation]"
                  type="password"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                {i18n.submit_button}
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="text-sm">
          <a href={logInPath} className="underline">
            {i18n.log_in_link}
          </a>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUp;
