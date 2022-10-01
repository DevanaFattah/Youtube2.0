import React from 'react';
import { Stack, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import { categories } from '../utils/constants'

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
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
                    backgroundColor: selectedCategory === category.name && ('#FC1503'),
                    color: 'white'
                }}
                key={category.name}
                onClick={() => {setSelectedCategory(category.name)}}
            >
                <span
                    style={{ 
                        color: selectedCategory !== category.name ? 'red' : 'white',
                        marginRight: '15px'
                    }}
                >
                    {category.icon}
                </span>
                <span
                    style={{ 
                        opacity: selectedCategory === category.name ? '1' : '0.8'
                    }}
                >
                    {category.name}
                </span>
            </button> 
        ))}
    </Stack>
)

export default Sidebar;