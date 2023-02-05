import React from 'react'
import { Typography , Stack , Button, ButtonGroup, Box} from '@mui/material'

export const MuiButtonGroup = () => {
  return (
    <>
        <Typography variant='h2'>Button Group</Typography>
        <Typography variant='body'>Example of Button Group</Typography>
        <Box display='flex' justifyContent='space-evenly'>
        <Stack> 
            <ButtonGroup orientation='vertical' variant='contained'>
                <Button sx={{textTransform:'capitalize'}}>Previous</Button>
                <Button sx={{textTransform:'capitalize'}}>Now Playing</Button>
                <Button sx={{textTransform:'capitalize'}}>Next</Button>
            </ButtonGroup> 
        </Stack>
        <Stack> 
            <ButtonGroup orientation='vertical' variant='outlined'>
                <Button sx={{textTransform:'capitalize'}}>Previous</Button>
                <Button sx={{textTransform:'capitalize'}}>Now Playing</Button>
                <Button sx={{textTransform:'capitalize'}}>Next</Button>
            </ButtonGroup> 
        </Stack>
        
    </Box>
    </>
  )
}
