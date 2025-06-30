import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import MoreVert from '@mui/icons-material/MoreVert';
import React from 'react'

const Post = () => {
    return (
        <Card sx={{margin:5}}>
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVert />
                </IconButton>
                }
                title="John Smith"
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="600"
                image="https://realfood.tesco.com/media/images/1400x919-EASY-SPANISH-PAELLA-BEST-50fb7bef-d99b-4019-bedc-a35a03e2cc42-0-1400x919.jpg"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}}/>} />
                </IconButton>
                <IconButton aria-label="share">
                <ShareIcon />
                </IconButton>
            </CardActions>
            </Card>
    )
}
export default Post