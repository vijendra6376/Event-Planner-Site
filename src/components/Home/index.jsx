import React from 'react'
import frontpage from "../assets/newFrontPage.jpg"
import Wrapper from './style'
export default function index() {
  return (
    <Wrapper>
    <div className="FrontPage">
        <img src={frontpage} alt=""  />
    </div>
    </Wrapper>
  )
}