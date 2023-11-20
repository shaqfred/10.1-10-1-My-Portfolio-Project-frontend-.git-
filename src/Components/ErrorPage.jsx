
import React, { useState } from 'react';
// import { Link } from 'react-router-dom';


// Hovering feature 🛸 
const ErrorPage = () => {
    //State to track whether the cursor is hovering 🛸 over the GIF
    const [isCursorHovered, setIsCursorHovered] = useState(false);

    // Event handler for cursor ↗️ enter (hover🛸)
    const handleCursorEnter = () => {
        setIsCursorHovered(true);
    };



    // Event handler for cursor leaving (No longer hovering 🚫🛸)
    const handleCursorLeave = () => {
        setIsCursorHovered(false);
    };


    // Added a hovering feature 
    return (
        <div className="error-page">
            <h1>404</h1>
            <h2>Oops! Something went wrong...</h2>
            <p>We're sorry, but we couldn't find the page you were looking for.</p>
            <p>Maybe you can take a break and enjoy some virtual cat company while we fix this issue!</p>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '50vh'
            }}
                onMouseEnter={handleCursorEnter} // When the cursor enters the div ↗️ 👍🏽
                onMouseLeave={handleCursorLeave} // When the cursor leaves the div ↗️ 👎🏽
            >

                <div style={{ marginTop: '-200px' }}>
                    {/* ⬇️ ⬇️ ⬇️ GIF iframe with a 🔇 attribute based on isCursorHovered state ⬇️ ⬇️ ⬇️*/}

                    <iframe
                        allow="fullscreen"
                        frameBorder="0"
                        width="360"
                        height="270"
                        src="https://giphy.com/embed/OFeEbFwcnmn3dxyyFq/video"
                        muted={!isCursorHovered} // 🔇 📢 based on isCursorHovered state ✨
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;