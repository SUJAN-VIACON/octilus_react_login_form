import React from 'react'
import Form from './ui/Form'
import Input from './ui/Input'

const LoginForm = () => {
  return (
    <div className='px-20 py-10'>
      <Form title='Personal information'>
        <Input type='text' value={5} placeholder="Name" />
        <Input type='text' value={5} placeholder="Name" />
        <Input type='text' value={5} placeholder="Name" />
      </Form>
    </div>
  )
}

export default LoginForm