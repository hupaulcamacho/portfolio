import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { TwitchEmbed } from 'react-twitch-embed';
import '../CSS/Twitch.css';


class Twitch extends Component {
    render() {
        return (
            <div className='twitch-main'>
                <div className='back-home-twitch'>
                    <Link to='/'>Back to Home</Link>
                </div>
                <TwitchEmbed
                    channel="traplordhuey"
                    id="traplordhuey"
                    theme="dark"
                    className='traplordhuey'
                    muted
                    width='90%'
                    height='75%'
                    onVideoPause={() => console.log(':(')}
                />
                {/* <TwitchChat channel="traplordhuey" theme="dark" /> */}
            </div>
        )
    }
}

export default Twitch
