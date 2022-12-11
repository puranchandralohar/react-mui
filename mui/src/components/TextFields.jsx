import React from 'react'

import { Stack, TextField } from '@mui/material'
export const TextFields = () => {
  return (
    
    <Stack spacing={4} >
        <Stack spacing={3} direction='row'>
            <TextField label='Name' variant='outlined' color='secondary'/>
            <TextField label='Name' variant='filled'/>
            <TextField label='Name' variant='standard'/>
        </Stack>
    </Stack>
  )
}
