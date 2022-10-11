import {Box, CardContent, CardMedia, Typography} from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'

import { demoProfilePicture } from '../utils/constants'

const ChannelCard = ({channelDetail, marginTop}) => {
  return (
    <Box
     sx={{
        boxShadow:"none",
        borderRadius:"20px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"300px",
        height:"280px",
        margin:"auto",
        marginTop
    }}
    >
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent sx={{display:"flex", flexDirection:"column",justifyContent:"center", textAlign:"center", color:"#fff"}}>
                <CardMedia 
                    image={channelDetail?.snippet?.thumbnails?.default?.url || demoProfilePicture}
                    alt={channelDetail?.snippet?.title}
                    sx={{borderRadius:"50%", height:"180px", width:"180px", border:"#e3e3e3", objectFit:"cover"}}
                />
                <Typography variant='h6' sx={{mt:"5px"}}>
                    {channelDetail?.snippet?.title}
                </Typography>
                {channelDetail?.statistics?.subscriberCount && (
                    <Typography>
                        {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                    </Typography>
                )}
            </CardContent>
        </Link>
    </Box>
  )
}

export default ChannelCard