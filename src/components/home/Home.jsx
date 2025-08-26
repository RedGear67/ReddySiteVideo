import React, { useEffect, useState } from 'react'
import hero from "../../assets/hero.avif"
import "./home.css"
import { GiSupersonicArrow } from "react-icons/gi";
import { FaWhatsapp } from "react-icons/fa6";
import { PiVideoBold } from "react-icons/pi";
import { GiInterleavedArrows } from "react-icons/gi";
import { FaTelegram } from "react-icons/fa";
import { GoPlay } from "react-icons/go";
import { FaArrowAltCircleRight } from "react-icons/fa";
import cricV from "/Cric1bet.mp4"
import laserV from "/Laxzer.mp4"

function Home() {

  // const text = "WELCOME TO REDDY ANNA ONLINE"
  // const [displayText, setDisplayText] = useState("")
  // const [isDeleting, setIsDeleting] = useState(false)
  // const [currIndex, setCurrIndex] = useState(0)

  // const delay = 90;
  // const speed = 100;

  // useEffect(() => {
  //   let timeout;

  //   const textAnimation = () => {
  //     if (!isDeleting) {
  //       if (currIndex < text.length) {
  //         setDisplayText(text.substring(0, currIndex + 1));
  //         setCurrIndex((currIndex + 1))
  //         timeout = setTimeout(textAnimation, speed)
  //       } else {
  //         setIsDeleting(true)
  //         timeout = setTimeout(textAnimation, delay)
  //       }
  //     } else {
  //       if (currIndex > 0) {
  //         setDisplayText(text.substring(0, currIndex - 1));
  //         setCurrIndex(currIndex - 1)
  //         timeout = setTimeout(textAnimation, speed / 2)   // double the speed for deletion
  //       } else {
  //         setIsDeleting(false)
  //         timeout = setTimeout(textAnimation, delay)
  //       }
  //     }
  //   }

  //   timeout = setTimeout(textAnimation, delay)

  //   return () => clearTimeout(timeout)
  // }, [text, speed, delay, currIndex, isDeleting])


  const [cric, setCric] = useState(false)
  const [laser, setLaser] = useState(false)
  const [reddy, setReddy] = useState(false)
  const [x11, setX11] = useState(false)


console.log(cric);

  return (
    <div className='homeContainer'>
      <h1 className='bebas-neue-regular'>WELCOME TO REDDY ANNA ONLINE</h1>
      <p className='oldest' style={{ color: "#E90064" }}> <GiInterleavedArrows className='icon-rotate' /> REDDY VIDEO  <GiInterleavedArrows className='icon-rotate2' /></p>


      <div className="videoslist">
        <div className="video">
          <div className='siteHead'>
            <h2>Cricbet99</h2>
            <FaArrowAltCircleRight />
            <a href={import.meta.env.VITE_CRICBET99} target='_blank' rel="noopener noreferrer">Visit</a>

          </div>

          <p>The video shows how to register, deposit, and withdraw</p>

          <button className='playBtn cri'
            onClick={() => setCric(true)}
          > <GoPlay /> PLAY</button>
        </div>

        <div className="video">
          <div className='siteHead'>
            <h2>Reddybook</h2>
            <FaArrowAltCircleRight />
            <a href={import.meta.env.VITE_REDDYBOOK} target='_blank' rel="noopener noreferrer">Visit</a>
          </div>


          <p>The video shows how to register, deposit, and withdraw</p>

          <button className='playBtn cri'
            onClick={() => setReddy(true)}
          > <GoPlay /> PLAY</button>
        </div>

        <div className="video">
          <div className='siteHead'>
            <h2>11xPlay</h2>
            <FaArrowAltCircleRight />
            <a href={import.meta.env.VITE_XPLAY11} target='_blank' rel="noopener noreferrer">Visit</a>
          </div>


          <p>The video shows how to register, deposit, and withdraw</p>

          <button className='playBtn cri'
            onClick={() => setX11(true)}> <GoPlay /> PLAY</button>
        </div>

        <div className="video">
          <div className='siteHead'>
            <h2>Laser247</h2>
            <FaArrowAltCircleRight />
            <a href={import.meta.env.VITE_LAXZER247} target='_blank' rel="noopener noreferrer">Visit</a>

          </div>


          <p>The video shows how to register, deposit, and withdraw</p>

          <button className='playBtn cri'
            onClick={() => setLaser(true)}> <GoPlay /> PLAY</button>
        </div>



      </div>

      <div>
        <h3 style={{ marginBottom: "15px" }}>Check Out Our Demo Website</h3>

        <a className='DemoVisit' href="https://reddydemo.com"
          target='_blank'>Visit</a>
      </div>





      {
        cric && <div className="videoContainer">
          <div className="video">
            <div className="closeVideo" onClick={() => setCric(false)}>
              X
            </div>
            <video src={cricV} type="video/mp4" controls></video>
          </div>
        </div>
      }


{
        laser && <div className="videoContainer">
          <div className="video">
            <div className="closeVideo" onClick={() => setLaser(false)}>
              X
            </div>
            <video src={laserV} type="video/mp4" controls></video>
          </div>
        </div>
      }
{/* 
      {
        x11 && <div className="videoContainer">
          <div className="video">
            <div className="closeVideo" onClick={() => setX11(false)}>
              X
            </div>
            <video src={x11V} type="video/mp4" controls></video>
          </div>
        </div>
      }


      {
        reddy && <div className="videoContainer">
          <div className="video">
            <div className="closeVideo" onClick={() => setReddy(false)}>
              X
            </div>
            <video src={reddyV} type="video/mp4" controls></video>
          </div>
        </div>
      } */}


    </div>









  )
}

export default Home
