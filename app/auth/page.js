"use client"

import React from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import {Auth} from "@supabase/auth-ui-react";
import { ThemeSupa } from '@supabase/auth-ui-shared';
import Link from 'next/link';

const AuthPage = () => {
  const supabase = createClientComponentClient()
  return (
    <>
      <div id='AuthPage' className='w-full min-h-screen bg-white'>
        <div className="w-full flex items-center justify-center p-5 border-b-gray-300">
          <Link href={"/"} className='min-w-[170px]'>
            <img src="/images/logo.svg" width="170" alt="" />
          </Link>
        </div>

        <div className="w-full flex items-center justify-center p-5 border-b-gray-300">
          Đăng nhập / Đăng ký
        </div>

        <div className='max-w-[400px] mx-auto px-2'>
          <Auth
            onlyThirdPartyProviders
            redirectTo={`${window.location.origin}/auth/callback`}
            supabaseClient={supabase}
            providers={['google']}
            appearance={{theme: ThemeSupa}}
          />
        </div>
      </div>
    </>
  )
}

export default AuthPage