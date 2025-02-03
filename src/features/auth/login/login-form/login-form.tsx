import React, {useState} from 'react';
import {Input} from '@/components/ui/input.tsx';
import {Form, FormControl, FormItem, FormLabel, FormMessage} from '@/components/ui/form';
import {FormField} from '@/components/ui/form.tsx';
import {Button} from '@/components/ui/button.tsx';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import './login-form.css';
import {EyeIcon, EyeOffIcon} from 'lucide-react';
import { useNavigate } from "react-router";

const formSchema = z.object({
    username: z.string().email().min(2, {
        message: 'El correo electrónico debe ser valido.'
    }),
    password: z.string().min(6, {
        message: 'Password must be at least 6 characters.'
    }),
});

const LoginForm = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
            password: '',
        },
    });
    const passwordType = () => showPassword ? 'text' : 'password';
    const iconShowPassword = () => showPassword ? <EyeOffIcon/> : <EyeIcon/>;

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values);
        navigate("/home")
    }

    return (
        <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 mt-4">
                <FormField
                    control={form.control}
                    name="username"
                    render={({field}) => (
                        <FormItem className="text-start">
                            <FormLabel>Email o nombre de usuario</FormLabel>
                            <FormControl>
                                <Input placeholder="Email o nombre de usuario" size={12} {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({field}) => (
                        <FormItem className="text-start">
                            <FormLabel>Contraseña</FormLabel>
                            <FormControl>
                                <span className="relative">
                                <Input className="form_password" placeholder="Contraseña"
                                       type={passwordType()} {...field} />
                                <Button className="form_icon_float" variant="outline" size="icon" type="button"
                                        onClick={() => setShowPassword(!showPassword)}>
                                    {iconShowPassword()}
                                </Button>
                                </span>
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <Button type="submit" variant="secondary" className="rounded-2xl standard_width">Iniciar sesión</Button>
                <Button type="button" variant="link" className="standard_width">¿Has olvidado tu contraseña?</Button>
            </form>
        </Form>
    );
};

export default LoginForm;