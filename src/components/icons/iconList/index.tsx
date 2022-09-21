import React from 'react'
import { IconsName } from '../types'
import Apple from './icons/Apple'
import ArrowLeft from './icons/ArrowLeft'
import At from './icons/At'
import Birthday from './icons/Birthday'
import Challenges from './icons/Challenges'
import Chat from './icons/Chat'
import CheckCircle from './icons/CheckCircle'
import Clapping from './icons/Clapping'
import Done from './icons/Complete'
import Email from './icons/Email'
import Facebook from './icons/Facebook'
import FailCheck from './icons/FailCheck'
import Futbolify from './icons/Futbolify'
import Google from './icons/Google'
import Home from './icons/Home'
import House from './icons/House'
import LightCircleOutline from './icons/LightCircleOutline'
import Lock from './icons/Lock'
import LockClosedOutline from './icons/LockClosedOutline'
import LockOpen from './icons/LockOpen'
import Messages from './icons/Messages'
import MiniCheckCircle from './icons/MiniCheckCircle'
import MiniCheckCircleApp from './icons/MiniCheckCircleApp'
import Name from './icons/Name'
import Phone from './icons/Phone'
import Profile from './icons/Profile'
import Search from './icons/Search'
import Share from './icons/Share'
import User from './icons/User'

interface Props {
  iconName?: IconsName
  className?: string
}

const IconList: React.FC<Props> = ({ iconName, className }) => {
  return (
    <span>
      {iconName === 'at' && <At className={className}></At>}
      {iconName === 'phone' && <Phone className={className}></Phone>}
      {iconName === 'facebook' && <Facebook className={className}></Facebook>}
      {iconName === 'google' && <Google className={className}></Google>}
      {iconName === 'lock' && <Lock className={className}></Lock>}
      {iconName === 'lockOpen' && <LockOpen className={className}></LockOpen>}
      {iconName === 'failCheck' && (
        <FailCheck className={className}></FailCheck>
      )}
      {iconName === 'checkCircle' && (
        <CheckCircle className={className}></CheckCircle>
      )}
      {iconName === 'arrowLeft' && (
        <ArrowLeft className={className}></ArrowLeft>
      )}
      {iconName === 'lockClosedOutline' && (
        <LockClosedOutline className={className}></LockClosedOutline>
      )}
      {iconName === 'miniCheckCircle' && (
        <MiniCheckCircle className={className}></MiniCheckCircle>
      )}
      {iconName === 'email' && <Email className={className}></Email>}
      {iconName === 'name' && <Name className={className}></Name>}
      {iconName === 'done' && <Done className={className}></Done>}
      {iconName === 'home' && <Home className={className}></Home>}
      {iconName === 'apple' && <Apple className={className}></Apple>}
      {iconName === 'futbolify' && (
        <Futbolify className={className}></Futbolify>
      )}
      {iconName === 'user' && <User className={className}></User>}
      {iconName === 'birthday' && <Birthday className={className}></Birthday>}
      {iconName === 'lightCircleOutline' && (
        <LightCircleOutline className={className}></LightCircleOutline>
      )}
      {iconName === 'challenges' && <Challenges className={className}></Challenges>}
      {iconName === 'search' && <Search className={className}></Search>}
      {iconName === 'messages' && <Messages className={className}></Messages>}
      {iconName === 'profile' && <Profile className={className}></Profile>}
      {iconName === 'clapping' && <Clapping className={className}></Clapping>}
      {iconName === 'chat' && <Chat className={className}></Chat>}
      {iconName === 'share' && <Share className={className}></Share>}
      {iconName === 'house' && <House className={className}></House>}
      {iconName === 'miniCheckCircleApp' && <MiniCheckCircleApp className={className}></MiniCheckCircleApp>}
    </span>
  )
}
export default IconList
