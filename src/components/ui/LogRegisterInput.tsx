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

interface LogRegisterInputProps {
  handleLoginSumbit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  handleRegisterSumbit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  error: string;
}

export const LogRegisterInput = ({handleLoginSumbit, handleRegisterSumbit, error}: LogRegisterInputProps) => {
  return (
    <Tabs defaultValue="Login" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="Login">Login</TabsTrigger>
        <TabsTrigger value="Register">Register</TabsTrigger>
      </TabsList>
      <TabsContent value="Login">
        <Card className="bg-background text-foreground border" >
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Make changes to your Login here. Click save when you re done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <form className="text-black font-semibold" onSubmit={handleLoginSumbit}>
              <div className="space-y-1">
              <Label className="text-sm font-medium" htmlFor="username">Usuario</Label>
                <Input className="bg-background border-muted"  name="username" type="text" placeholder="Nombre de usuario" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="">Contraseña</Label>
                <Input name="password" type="password" placeholder="Contraseña" />
              </div>
              {error && <p className="text-red-700 font-semibold">{error}</p>}
              <Button type="submit">Save changes</Button>
            </form>
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="Register">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you ll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Save password</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};
