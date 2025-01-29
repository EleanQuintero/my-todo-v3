"use client"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fetchProfile, fetchUsers } from "@/app/lib/data";
import { useContext, useState } from "react";
import { userData } from "@/types";
import { userDataContext } from "@/contexts/userDataContext";


interface profileData {
  id: string;
  username: string;
  password: string;
  avatar: string;
}

export const LogRegisterInput = () => {
  const [error, setError] = useState({ status: false, message: "" });
  const { setUserData } = useContext(userDataContext);

  const handleLoginSumbit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const user = Object.fromEntries(
        new window.FormData(event.currentTarget)
      ) as unknown as profileData;
      await fetchUsers(user);
      const profile = await fetchProfile();
      setUserData(profile as userData);
      console.log("sumbit");
    } catch (error) {
      if (error instanceof Error) {
        setError({ status: true, message: error.message });
        setTimeout(() => {
          setError({ status: false, message: "" });
        }, 5000);
      }
    }
  };

  return (
    <Tabs defaultValue="Login" className="w-[400px] ">
      <TabsList className="grid w-full grid-cols-2 ">
        <TabsTrigger value="Login" className="">Login</TabsTrigger>
        <TabsTrigger value="Register" className="">Register</TabsTrigger>
      </TabsList>
      <TabsContent value="Login">
        <Card className="border">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Make changes to your Login here. Click save when you re done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <form className="font-semibold gap-6" onSubmit={handleLoginSumbit}>
              <div className="space-y-1">
                <Label className="text-sm font-medium" htmlFor="username">Usuario</Label>
                <Input className="bg-background border-muted" name="username" type="text" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Contraseña</Label>
                <Input name="password" type="password" />
              </div>
              <div className={`${error.status ? "block my-3" : "hidden"}`}>
              {error.status && <p className="text-red-700 font-semibold">{error.message}</p>}
              </div>
              <Button className="my-3" type="submit">Save changes</Button>
            </form>
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="Register">
        <Card className="border">
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>
              Make changes to your Register here. Click save when you re done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <form className="font-semibold" onSubmit={() => console.log("submit")}>
              <div className="space-y-1">
                <Label className="text-sm font-medium" htmlFor="username">Usuario</Label>
                <Input className="bg-background border-muted" name="username" type="text" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Contraseña</Label>
                <Input name="password" type="password" />
              </div>
              {error.status && <p className="text-red-700 font-semibold">{error.message}</p>}
              <Button type="submit">Save changes</Button>
            </form>
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};
