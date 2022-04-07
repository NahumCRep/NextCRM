import React, { useState, useEffect } from 'react'
import { useSession, signOut, getCsrfToken } from 'next-auth/react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { Formik } from 'formik'
import Input from '../components/Input'
import Image from 'next/image'
import { FaGoogle, FaGithub } from "react-icons/fa"
import { MdError } from 'react-icons/md'


export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context)

  return {
    props: { csrfToken },
  }
}

const login = ({ csrfToken }) => {
  const { data: session } = useSession()
  const [isSignIn, setIsSignIn] = useState(true)
  const router = useRouter()
  const { error } = router.query

  useEffect(() => {
    console.log('user', session)
  }, [])

  return (
    <section className='w-full flex flex-col md:flex-row'>
      <div className='hidden md:block w-1/2 h-screen relative'>
        <Image src='/loginbg.jpg' alt='login image' layout='fill' objectFit='cover' />
      </div>
      <div className='w-full h-full  md:w-1/2 md:h-screen bg-white dark:bg-palette-darker p-4 md:p-8'>
        <form className='font-raleway p-2 md:p-4' action="/api/auth/callback/credentials" method='POST'>
          <h1 className='font-oswald text-3xl border-b-2 border-palette-blue dark:border-palette-yellow pb-2 text-palette-blue dark:text-palette-yellow '>
            {isSignIn ? 'Login' : 'Register'}
          </h1>
          <input name={"csrfToken"} type={"hidden"} value={csrfToken} />
          <input name={"type"} type={"hidden"} value={isSignIn ? 'login' : 'register'} />
          {!isSignIn && <Input label={'Name'} name={'name'} type={'text'} />}
          {!isSignIn && <Input label={'Profile Picture'} name={'profilePic'} type={'text'} placeholder={'image url....'} />}
          <Input label={'Email'} name={'email'} type={'text'} />
          <Input label={'Password'} name={'password'} type={'password'} />
          {!isSignIn && <Input label={'Confirm Password'} name={'confirmPassword'} type={'password'} />}
          <button type="submit" className='mt-8 w-full h-12 rounded-md bg-palette-blue font-bold dark:bg-palette-yellow text-white dark:text-palette-darker'>
            {isSignIn ? 'sign in' : 'sign up'}
          </button>
          {error && <p className='text-red-700 flex items-center gap-1 px-1 text-sm font-medium mt-4'><MdError /> {error}</p>}
        </form>

        <div className='flex items-center gap-2 px-4'>
          <p>{isSignIn ? 'Dont have an account?' : 'Already have an account?'}</p>
          <button onClick={() => setIsSignIn(!isSignIn)} className='outline-none border-b-2 border-palette-yellow'>
            {isSignIn ? 'create' : 'login'}
          </button>
        </div>
        {
          isSignIn && (
            <div className='p-2 md:p-4'>
              <p className='w-full text-center'>or sign in with...</p>
              <form className='font-raleway mt-4 flex flex-col gap-4' action='/api/auth/signin/google' method='POST'>
                <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
                <button type="submit" className='flex gap-1 items-center font-raleway font-semibold w-full h-12 justify-center rounded-md text-white dark:text-palette-black bg-palette-litghblue dark:bg-palette-lightyellow'>
                  <FaGoogle /> Google
                </button>
                {/* <button className='flex gap-1 items-center font-raleway font-semibold w-full h-12 justify-center rounded-md text-white dark:text-palette-black bg-palette-litghblue dark:bg-palette-lightyellow'>
                  <FaGithub /> Github
                </button> */}
              </form>
            </div>
          )
        }
      </div>
    </section>
  )
}

export default login