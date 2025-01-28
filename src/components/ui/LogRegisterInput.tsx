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
    <Tabs defaultValue="Login" className="w-[400px] ">
      <TabsList className="grid w-full grid-cols-2 ">
        <TabsTrigger value="Login" className="bg-background text-foreground border border-muted data-[state=active]:bg-primary data-[state=active]:text-white">Login</TabsTrigger>
        <TabsTrigger value="Register" className="bg-background text-foreground border border-muted data-[state=active]:bg-primary data-[state=active]:text-white">Register</TabsTrigger>
      </TabsList>
      <TabsContent value="Login">
        <Card className="bg-background text-foreground border">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Make changes to your Login here. Click save when you re done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <form className="font-semibold" onSubmit={handleLoginSumbit}>
              <div className="space-y-1">
                <Label className="text-sm font-medium" htmlFor="username">Usuario</Label>
                <Input className="bg-background border-muted" name="username" type="text" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Contraseña</Label>
                <Input name="password" type="password" />
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
        <Card className="bg-background text-foreground border">
          <CardHeader>
            <CardTitle>Register</CardTitle>
            <CardDescription>
              Make changes to your Register here. Click save when you re done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <form className="font-semibold" onSubmit={handleRegisterSumbit}>
              <div className="space-y-1">
                <Label className="text-sm font-medium" htmlFor="username">Usuario</Label>
                <Input className="bg-background border-muted" name="username" type="text" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Contraseña</Label>
                <Input name="password" type="password" />
              </div>
              {error && <p className="text-red-700 font-semibold">{error}</p>}
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
