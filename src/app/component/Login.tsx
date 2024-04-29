'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import React from 'react'
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "password must be at least 2 characters.",
  })
})

const Login = () => {
  const router=useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password:""
    },
  })

  const onsubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    router.push('/main')
  }

  return (
    <div className='z-10 text-white text-3xl  p-10 h-60 w-80 font-bold m-10'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onsubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>
                
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="write here" {...field} />
                </FormControl>
                
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between">
          <Button type="submit" className="border-2">Login</Button>         

          </div>
          
        </form>
      </Form>
      
    </div>
  )
}

export default Login;