import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Feed, ChannelDetail, SearchFeed, VideoDetail } from './components';
import { Box } from '@mui/material';
import './index.css';

const App = () => {
    return (
        <Box sx={{ backgroundColor: '#000' }}>
            <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route path='/' exact element={<Feed />} />
                    <Route path='/video/:id' element={<VideoDetail />} />
                    <Route path='/channel/:id' element={<ChannelDetail />} />
                    <Route path='/search/:search' element={<SearchFeed />} />
                </Routes>
            </BrowserRouter>
        </Box>
    )
}

export default App