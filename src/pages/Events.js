import React from 'react'
import Nav from "../Components/nav";
import ReactPlayer from "react-player"

export default function Messages() {
    return (
        <div>
            <Nav />


            <div className='wrapper'>
                <ReactPlayer
                    className='player'
                    playing
                    url={"https://www.youtube.com/watch?v=a-qiMS8fnV4&t=133s"}
                    width='100%'
                    height='83%'
                />
            </div>


        </div>


    )
}
