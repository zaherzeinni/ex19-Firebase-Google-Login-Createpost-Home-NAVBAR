import React from 'react'
import { Button } from 'reactstrap'
import { Center,Input,Box } from '@chakra-ui/react'

export default function index() {
  return (
    <div >
      <Center mt='50px'>
      <form >

       <Button className='mb-5'  color="success">All Blogs</Button>{' '}
      
    
       <Input placeholder='Title' type='text'></Input>
       </form>

       </Center>
    </div>
  )
}
