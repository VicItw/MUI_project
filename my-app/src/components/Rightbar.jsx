import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
    return (
        <Box 
            flex={2}
            p={2}
            sx={{display:{xs:"none",sm:"block"}}}
        >
            <Box position="fixed" width={250}>
                <Typography variant='h6' fontWeight={300}>Online Frineds</Typography>
                <AvatarGroup max={7}>
                    <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <Avatar alt="Travis Howard" src="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg" />
                    <Avatar alt="Cindy Baker" src="https://as1.ftcdn.net/jpg/02/95/58/22/1000_F_295582214_IJrBXV3TJeNavfozclGX88TMVESBMWAV.jpg" />
                    <Avatar alt="Agnes Walker" src="https://media.istockphoto.com/id/1450340623/photo/portrait-of-successful-mature-boss-senior-businessman-in-glasses-asian-looking-at-camera-and.jpg?s=612x612&w=0&k=20&c=f0EqWiUuID5VB_NxBUEDn92W2HLENR15CFFPzr-I4XE=" />
                    <Avatar alt="Trevor Henderson" src="https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg" />
                    <Avatar alt="Jack Howie" src="https://media.gettyimages.com/id/1490616219/photo/portrait-of-handsome-young-man.jpg?s=612x612&w=gi&k=20&c=_fP0l7IENpZPAFLD7MH5Is8AmsT8BKTncHzh41EB1zQ=" />
                    <Avatar alt="Cindy Baker2" src="https://as1.ftcdn.net/jpg/02/95/58/22/1000_F_295582214_IJrBXV3TJeNavfozclGX88TMVESBMWAV.jpg" />
                    <Avatar alt="Agnes Walker2" src="https://media.istockphoto.com/id/1450340623/photo/portrait-of-successful-mature-boss-senior-businessman-in-glasses-asian-looking-at-camera-and.jpg?s=612x612&w=0&k=20&c=f0EqWiUuID5VB_NxBUEDn92W2HLENR15CFFPzr-I4XE=" />
                    <Avatar alt="Trevor Henderson2" src="https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg" />
                </AvatarGroup>
                <Typography variant='h6' fontWeight={300} mt={2} mb={2}>Latest Photos</Typography>
                <ImageList col = {3} rowHeight={120} gap = {5}>
                    <ImageListItem>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVJXeyIzehrBL8RHUJHtDKEK_B_4-tDChEnQ&s"
                            alt="img_a"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://images.stockcake.com/public/6/1/5/6159aa3a-c49a-482d-af91-0da2a71359d1_medium/enchanted-forest-glade-stockcake.jpg"
                            alt="img_b"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://t3.ftcdn.net/jpg/04/98/81/32/360_F_498813253_1F67TUXp7RKXETW6ZdavRa3dzwsGNgEd.jpg"
                            alt="img_c"
                        />
                    </ImageListItem>
                    <ImageListItem>
                        <img
                            src="https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            alt="img_d"
                        />
                    </ImageListItem>
                </ImageList>
                <Typography variant='h6' fontWeight={300} mt={2}>Latest Conversations</Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                            <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                sx={{ color: 'text.primary', display: 'inline' }}
                            >
                                Ali Connors
                            </Typography>
                            {" — I'll be in your neighborhood doing errands this…"}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Summer BBQ"
                        secondary={
                            <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                sx={{ color: 'text.primary', display: 'inline' }}
                            >
                                to Scott, Alex, Jennifer
                            </Typography>
                            {" — Wish I could come, but I'm out of town this…"}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                        primary="Oui Oui"
                        secondary={
                            <React.Fragment>
                            <Typography
                                component="span"
                                variant="body2"
                                sx={{ color: 'text.primary', display: 'inline' }}
                            >
                                Sandra Adams
                            </Typography>
                            {' — Do you have Paris recommendations? Have you ever…'}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    </List>
            </Box>
        </Box>
    )
}

export default Rightbar