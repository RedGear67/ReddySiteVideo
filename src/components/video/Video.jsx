import React, { useState } from 'react'
import "./video.css"
import video2 from "/Cric1bet.mp4"
import video1 from "/Laxzer.mp4"

function Video() {
    const [video1PopUp, setVideo1PopUp] = useState(false)
    const [video2PopUp, setVideo2PopUp] = useState(false)

  return (
    <div className='videobtnContainer'>
        <h3>Demo Videos</h3>

        <div className="video">
            <button className='cric' 
            onClick={()=>setVideo1PopUp(true)}>Laser247</button>

            <button className='lax'
            onClick={()=>setVideo2PopUp(true)}>Cricbet99</button>
        </div>


        {
                video1PopUp && <div className="videoContainer">
                    <div className="video">
                        <div className="closeVideo" onClick={() => setVideo1PopUp(false)}>
                            X
                        </div>
                        <video src={video1} type="video/mp4" controls></video>
                    </div>
                </div>
            }

            {
                video2PopUp && <div className="videoContainer">
                    <div className="video">
                        <div className="closeVideo" onClick={() => setVideo2PopUp(false)}>
                            X
                        </div>
                        <video src={video2} type="video/mp4" controls></video>
                    </div>
                </div>
            }
    </div>
  )
}

export default Video
