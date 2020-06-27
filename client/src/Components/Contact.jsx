import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Contact extends Component {
    render() {
        return (
            <div classname='contact-main'>
                <h1 className='page-title'>Contact</h1>
                <div className='back-home'>
                    <Link to='/'>Back to Home</Link>
                </div>
            </div>
        )
    }
}

export default Contact
