import React from 'react';
import { Stack, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import { categories } from '../utils/constants'

const selectedCategory = 'New';

const Sidebar = () => (
    <Stack
        direction='row'
        sx={{ 
            overflowY: 'auto',
            height: { 
                sx: 'auto',
                md: '95%'
            },
            flexDirection: {
                md: 'column'
            }
        }}
    >
        {categories.map(category => (
            <button
                className='category-btn'
                style={{ 
                    backgroundColor: selectedCategory === category.name && ('#EFEFEF'),
                    color: 'white'
                }}
            >
                <span>{category.icon}</span>
                <span>{category.name}</span>
            </button> 
        ))}
    </Stack>
)

export default Sidebar;