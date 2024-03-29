import React from 'react'

import { Stack, Typography, TextField, InputAdornment, Button} from '@mui/material'
export const TextFields = () => {
  return (
    
    <Stack spacing={4}>
      <Typography variant='h2' color='secondary'>TextField</Typography>
        <Stack spacing={3} direction='row'>
            <TextField label='Name' variant='outlined' color='secondary'/>
            <TextField label='Name' variant='filled'/>
            <TextField label='Name' variant='standard'/>
        </Stack>

        <Stack spacing={3} direction='row'>
            <TextField type='text' aria-label='text field'/>
            <TextField type='text' aria-label='Placeholder field' placeholder='Username'/>
            <TextField type='text' aria-label='required field' label='Email' required/>
            <TextField label='Password' type='password' helperText='Do not share your password with anyone'/>
            <TextField aria-label='disabled' disabled label='Disabled'/>           
            <TextField aria-label='read only' label='Read only' InputProps={{ readOnly:true }}/>           
        </Stack>

        <Stack spacing={3} direction='row'>
            <TextField label='Amount' InputProps={{
              startAdornment:<InputAdornment position='start'>$</InputAdornment>
            }}/>
            <TextField label='Weight' InputProps={{
              endAdornment:<InputAdornment position='end'>Kg</InputAdornment>
            }}/>
             <TextField label='Error field' variant='outlined' error/>
             <TextField 
             sx={{margin:0,padding:0}}
            />
            <Button variant='contained' disableElevation disableRipple>Subscribe</Button>
        </Stack>
    </Stack>
  )
}
