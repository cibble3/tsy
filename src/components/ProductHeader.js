import { ThemeColors } from '@/context/themeColor'
import useWindowSize from '@/hooks/useWindowSize'
import React, { useContext, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

const CourseHeader = () => {
  const { theme, setTheme } = useContext(ThemeColors)
  const { width, height } = useWindowSize();


  return (
    <div style={{ boxShadow: "0 3px 3px 0px rgba(0,0,0,0.16)" }} className='mx-3 mt-3'>
      <div className="course-title-area" style={{ background: theme === "dark" ? "#2d3138" : "#ffffff" }} >
        <div style={{ background: "rgb(48,48,48)" }} >
          <div className='imageBox'>
            <div className='d-flex justify-content-between mb-2 flex-wrap socialbtn' style={{ position: "absolute", zIndex: 99, bottom: 0, right: 0 }}>
              <img src="/images/Instagram.png" alt="image" className='me-3' style={{ height: 32 }} width={32} />
              <img src="/images/Facebook.png" alt="image" className='me-3' style={{ height: 32 }} width={32} />
              <img src="/images/pinterest.png" alt="image" className='me-3' style={{ height: 32 }} width={32} />
              <img src="/images/twitter.png" alt="image" className='me-3' style={{ height: 32 }} width={32} />
            </div>
            <img src="/images/courses/product.png" alt="image" style={{ height: 251 }} width={width} />
            <div style={{ position: "absolute", bottom: "-60px", left: 35 }} className='userView'>
              <div>
                <div style={{ position: "relative" }}>
                  <div style={{ position: "absolute", bottom: 10, right: 15 }}>

                    <img src="/images/profileCamera.png" alt="image" style={{ height: 23, width: 21, }} />
                  </div>
                  <img className='userImage' src="/images/courses/user.png" alt="image" width={width / 10 + 30} style={{ height: width / 11, width: width / 10 + 30, minWidth: "170px", minHeight: "160px" }} />
                </div>
                <p style={{ color: theme === "dark" ? "#ffffff" : "#000000" }}>Ross kennedy !</p>
              </div>
            </div>
          </div>
        </div>
        <div className={`d-flex justify-content-between flex-wrap bottomView ${theme === "dark" ? "light" : ""}`} style={{ marginLeft: width / 10 + 150 }}>
          <div className='d-flex justify-content-between align-items-center flex-wrap'>

            <div className='d-flex me-4 align-items-center display-none'>
              <img src="/images/camera.png" alt="image" style={{ height: 18 }} width={22} />
              <p>231</p>
            </div>
            <div className='d-flex me-4 align-items-center display-none'>
              <img src="/images/video.png" alt="image" style={{ height: 19 }} width={30} />
              <p>45</p>
            </div>
            <div className='me-4 msgbtn'>
              <Button className={"addNew"}>Message Me</Button>

            </div>
            <div className='me-4 rewardbtn' >
              <Button className={"reward"}><span className='d-flex align-items-center'>
                <img src="/images/reward.png" alt="image" style={{ height: 16, marginRight: "10px" }} width={16} />
                Send Reward
              </span></Button>

            </div>
            <div className='me-4 display-none'>
              <p>Request Private chat</p>
            </div>
            <div className='me-4 display-none'>
              <p>Order Custom content</p>
            </div>
            <div className='me-4 display-none'>
              <p>Block/Report</p>
            </div>
            <div className='me-3 follow'>
              <Button className={"addNew"}>Follow</Button>

            </div>
          </div>
          <div className='me-3 followbtn'>
            <Button className={"addNew"}>Follow</Button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseHeader