import { Box,Input,Button } from '@chakra-ui/react';
import React from 'react';

const index = () => {
    return (
        <center >
            <Box mt="50px" fontWeight="bold" fontSize="20px"> 
           Admin Login in page 
           </Box>
           <Box mt="20px">
            
            <form  className='border-l-slate-200 p-5 shadow-2xl w-1/2   '> 
              <div className='text-red-400 font-bold text-2xl mb-2'>تسجيل دخول</div>
        <Box >
        <Input type='email' placeholder='Enter Email @' w='350px' border="1px solid black">
        </Input>
        </Box>
        <Box mt="5px">
        <Input type='password' placeholder='Enter password' w='350px' border="1px solid black">
        </Input>
        </Box>
        <Button type='submit' mt="5px" w='350px' bg="green.200" >log in</Button>
      </form>
           </Box>
        </center>
    );
}

export default index;
