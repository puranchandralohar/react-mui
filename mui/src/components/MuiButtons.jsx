import React from 'react'

import { Stack, Button, IconButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import { Send } from '@mui/icons-material';

export const MuiButtons = () => {
  return (
    <Stack>
    <Stack spacing={2} direction='row'>
        <Button variant="text" href='https://google.com'>Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
    </Stack>
    <Stack spacing={3} direction='row'>
        <Button variant="contained" color="primary">Primary</Button>
        <Button variant="contained" color="secondary">Secondry</Button>
        <Button variant="contained" color="warning">Warning</Button>
        <Button variant="contained" color="info">Info</Button>
        <Button variant="contained" color="success">Success</Button>
    </Stack>

    <Stack display='block' spacing={2} direction='row'>
        <Button variant="contained" size='small'>
            Small
        </Button>
        <Button variant="contained" size='medium'>
            Medium
        </Button>
        <Button variant="contained" size='large'>
            Large
        </Button>
    </Stack>

    <Stack spacing={2} direction='row'>
        <Button variant='contained' startIcon={<SendIcon/>} disableRipple>Send</Button>
        <Button variant='contained' endIcon={<SendIcon/>} onClick={()=>alert("I am Clicked")} disableElevation>Send</Button>
    <IconButton aria-label='send' color='success' size='small'>
        <SendIcon/>
    </IconButton>
    </Stack>

    </Stack>
  )
}
