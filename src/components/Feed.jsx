import { Box } from '@mui/material'
import React from 'react'

export const Feed = () => {
  return (
    <Box 
      bgcolor="green" 
      flex={4} 
      padding={2} 
      sx={{display: {xs: "none",sm:"block"}}}
      >
        Feed
    </Box>
  )
}
