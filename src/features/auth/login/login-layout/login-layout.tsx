/*
 * Project:      spottify-clone
 * Developed by: Juan David Pelaez Cumbe
 * Date:         30/01/25
 * Module name:  login
 * File name:    login.tsx
 * IDE:          WebStorm
 */
import React from 'react';
import './login-layout.css'
import smallLogo from '../../../../assets/svg/logo_spotify.png';
import { Button } from "@/components/ui/button"
import LoginForm from '@/features/auth/login/login-form/login-form.tsx';

const LoginLayout = () => {
    return (
        <div className='login_layout'>
            <div className='login_layout_card w-full h-auto rounded-xl flex flex-col items-center'>
                <section className='mt-9 flex flex-col gap-2 items-center'>
                    <a href="" className='flex w-fit'>
                        <img src={smallLogo} alt="logo"/>
                    </a>
                    <h1 className='text-4xl font-bold '>Inicia sesión en Spotify</h1>
                </section>
                <section className='flex flex-col gap-5 items-center mt-9 buttons_container'>
                    <Button variant='outline' className='rounded-2xl'>
                        <span className='logo_bg_google'></span>
                        Google
                    </Button>
                    <Button variant='outline' className='rounded-2xl'>
                        <span className='logo_bg_facebook'></span>
                        Facebook
                    </Button>
                    <Button variant='outline' className='rounded-2xl'>
                        <span className='logo_bg_apple'></span>
                        Apple
                    </Button>
                    <Button variant='outline' className='rounded-2xl'>
                        Numero de teléfono
                    </Button>
                </section>
                <section className="flex w-full flex-col gap-5 items-center mt-7">
                    <div className='divisor'></div>
                </section>
                <section className='standard_width'>
                    <LoginForm />
                </section>

            </div>
        </div>
)
}

export default LoginLayout;