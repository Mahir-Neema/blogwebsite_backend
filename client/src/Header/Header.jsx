import React from 'react'
import './Header.css'

function Header() {
  return (
    <>
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSmall">React js</span>
                <span className="headerTitleLarge">Blog</span>
            </div>
            <img src="https://cdn.pixabay.com/photo/2022/10/03/23/41/house-7497001_1280.png" alt="" className="headerImg" />
        </div>
    </>
  )
}

export default Header