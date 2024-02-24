"use client";
import { ComponentProps, FormEvent, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import FormContainer from "@/components/forms/FormContainer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AuthContext } from "@/contexts/Auth/AuthContext";
import { handleSubmit } from "@/utils/forms";
import { authProvider } from "@/providers/api/auth";
import {
  emailFormField,
  nameFormField,
  passwordFormField,
} from "@/config/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const registerSchema = z.object({
  name: nameFormField,
  email: emailFormField,
  password: passwordFormField,
});

type RegisterSchema = z.infer<typeof registerSchema>;

interface Props extends ComponentProps<"form"> {
  onFinish?: () => void;
}

export default function RegisterForm({ onFinish, ...props }: Props) {
  const [isSubmiting, setIsSubmiting] = useState<boolean>(false);
  const { signIn } = useContext(AuthContext);

  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmiting(true);

    try {
      const payload = await handleSubmit(form);
      const { email } = await authProvider.register(payload);
      await signIn({ email, password: payload.password });

      onFinish && onFinish();
    } catch (error) {
      console.error(error);
    }

    setIsSubmiting(false);
  };

  return (
    <FormContainer onSubmit={handleRegister} className="gap-8" {...props}>
      <div className="flex flex-col gap-4">
        <Input label="Nome" {...form.register("name")} />
        <Input label="Email" type="email" {...form.register("email")} />
        <Input label="Senha" type="password" {...form.register("password")} />
      </div>
      <div className="flex flex-col gap-4">
        <Button isLoading={isSubmiting} variant={"primary"}>
          Criar
        </Button>
      </div>
    </FormContainer>
  );
}
