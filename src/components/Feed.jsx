import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Sidebar from './Sidebar';

const Feed = () => {
    return (
        <Stack 
            sx={{ flexDirection: { sm: 'column', md: 'row' } }}
        >
            <Box
                sx={{ height: { sm: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sm: 0, md: 2 } }}
            >
                <Sidebar />

                <Typography className='typography' sx={{ color: '#fff', mt: 1.5 }}>
                    Copyright Reno 28-08-2022
                </Typography>
            </Box>
        </Stack>
    )
}

export default Feed;