import React from 'react'
import Video from '../../Assets/Portfolio-Video-HD-1080p.mp4'

export default function HeroVideo() {
    return (
        <div className=''>
            <div className=''>
                <video src={Video} autoPlay loop muted className="w-full h-full object-cover absolute top-0 left-0 z-0"/>
            </div>
        </div>
    )
}
