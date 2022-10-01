import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Sidebar, Videos } from './';

const Feed = () => {

    const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchFromAPI(`search?part=snippet,id&q=${selectedCategory}`)
        .then(res => setVideos(res.items))
        .catch(err => console.log(err))

    }, [selectedCategory]);

    return (
        <Stack 
            sx={{ flexDirection: { sm: 'column', md: 'row' } }}
        >
            <Box
                sx={{ height: { sm: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sm: 0, md: 2 } }}
            >
                <Sidebar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />

                <Typography className='typography' variant='body2' sx={{ color: '#fff', mt: 1.5 }}>
                    Copyright Reno 28-08-2022
                </Typography>
            </Box>

            <Box
                p={2}
                sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}
            >
                <Typography
                    variant='h4'
                    fontWeight='bold'
                    mb={2}
                    sx={{ 
                        color: 'white',
                        marginRight: '3px'
                    }}
                >
                    {selectedCategory}
                    <span style={{ color: '#F31503' }}> videos</span>
                </Typography>

                <Videos videos={videos} />
            </Box>
        </Stack>
    )
}

export default Feed;