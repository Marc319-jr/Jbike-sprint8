import React from 'react';
import Top from '../components/Top.js'
import Center from './Center.js';
import Button from './Button.js';

function ContentWraper() {
    return(
        <div className = "ContentWraper">
            <Top />
            <Center />
 
        </div>
    )
}




export default ContentWraper