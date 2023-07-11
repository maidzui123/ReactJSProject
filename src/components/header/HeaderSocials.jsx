import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {FaGithub} from 'react-icons/fa'
const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.facebook.com/profile.php?id=100008189433403" target="_blank"><BsFacebook size={22}/></a>
        <a href="https://www.instagram.com/_mzuyy/" target="_blank"><AiFillInstagram size={22}/></a>
        <a href="https://github.com/maidzui123" target="_blank"><FaGithub size={22}/></a>
    </div>
  )
}

export default HeaderSocials