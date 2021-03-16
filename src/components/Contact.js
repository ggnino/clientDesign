import React from 'react'

function Contact() {
    //Render component
    return (
        <div className='container main-content' id='contact'>
            <form>
                <label>Name:</label>
                <input placeholder='Enter your name...' type='text' name='name' />
                <label>Email:</label>
                <input placeholder='Enter your email...' type='email' name='email' />
                <label>Comments:</label>
                <textarea placeholder='Enter your comments...' name='comment' rows="3" cols="30" />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Contact
