import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import React from 'react'
import Post from './post';

const Feed = () => {
    return (
        <Box flex={4} p={2}>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </Box>
    )
}

export default Feed