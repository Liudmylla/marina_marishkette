import React from 'react'
import "./VideoPlayer.css"
const VideoPlayer = () => {
    return (
        <>
            {/* Cloudinary Video Player embed code */}
            <iframe
                src="https://player.cloudinary.com/embed/?public_id=Marina_Facialist2_tutfji&cloud_name=di4iku1b9&player%5Bfluid%5D=true&player%5Bcontrols%5D=true&player%5Bcontrol_bar%5D%5Bfullscreen_toggle%5D=false&source%5Bsource_types%5D%5B0%5D=hls"
                width="640"
                height="480"
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowfullscreen
                frameborder="0"
            ></iframe>
        </>
    )
}
export default VideoPlayer;