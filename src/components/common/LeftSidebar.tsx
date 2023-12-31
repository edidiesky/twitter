import { BsTwitter } from 'react-icons/bs'
import { CiCircleMore } from 'react-icons/ci'

import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import ActiveLink from './activelink'
import TweetModal from '../modals/TweetModal'
import { AnimatePresence } from 'framer-motion'
import SearchIcon from 'assets/svg/leftsidebaricons/search'
import HomeIcon from 'assets/svg/leftsidebaricons/home'
import NotificationIcon from 'assets/svg/leftsidebaricons/notification'
import MessageIcon from 'assets/svg/leftsidebaricons/message';
import ListIcon from 'assets/svg/leftsidebaricons/list';
import CommunitiesIcon from 'assets/svg/leftsidebaricons/communities';
import BadgeIcon from 'assets/svg/leftsidebaricons/badge';
import ProfileIcon from 'assets/svg/leftsidebaricons/profile';
const list = [
    {
        title: "Home",
        path: '/',
        icon: <HomeIcon />
    }, {
        title: "Explore",
        path: '/explore',
        icon: <SearchIcon />
    }, {
        title: "Notifications",
        path: '',
        icon: <NotificationIcon />

    }, {
        title: "Messages",
        path: '/conversation',
        icon: <MessageIcon />

    }, {
        title: "Lists",
        path: '',
        icon: <ListIcon />

    },
    {
        title: "Communities",
        path: '',
        icon: <CommunitiesIcon />

    }, {
        title: "Verified",
        path: '',
        icon: <BadgeIcon />

    },
    {
        title: "Profile    ",
        path: '/edidie',
        icon: <ProfileIcon />

    }, {
        title: "More",
        path: '',
        icon: <CiCircleMore />

    },
]

const LeftSidebarIndex = () => {
    const username = 'Edidie tried Coding'
    const [tweet, setTweet] = useState(false)
    return (
        <>
            <AnimatePresence
                initial="false"
                exitBeforeEnter={true}
                onExitComplete={() => null}
            >
                {tweet && <TweetModal modal={tweet} setModal={setTweet} />}
            </AnimatePresence>
            <LeftSidebarStyles>


                <div className="flex column justify-space wrapper auto gap-1">
                    <div className="leftTop flex column">
                        <div className="flex w-100 column">
                            <div className="flex top w-100">
                                <Link href={'/'} className="icon flex item-center justify-center">
                                    <BsTwitter fontSize={'30px'} color='var(--blue-1)' />
                                </Link>
                            </div>
                            <ul className="flex column item-start">
                                {
                                    list.map((x, index) => {
                                        return (
                                            <li className="list text-dark flex item-center gap-2 text-light" >
                                                <ActiveLink hrefs={x.path}>
                                                    {x.icon}
                                                    <span className='span'>{x.title}</span>
                                                </ActiveLink>
                                            </li>
                                        )

                                    })
                                }
                            </ul>
                            <div onClick={() => setTweet(true)} className="btn fs-18 text-white text-bold">Tweet</div>
                        </div>
                    </div>
                    <div className="w-85 auto">
                        <div style={{ gap: ".5rem" }} className="profilewrapper w-100 flex item-center">
                            <img src="/images/johanna-richardson.jpg" alt="images-avatar" className="avatar" />
                            <h4 className="fs-16 text-dark text-bold text-start w-100">
                                {username}
                                <span className="block text-grey text-light fs-16">@edidiesky</span>
                            </h4>
                        </div>
                    </div>
                </div>

            </LeftSidebarStyles>
        </>

    )
}

const LeftSidebarStyles = styled.div`
    flex: 0 0 300px;
    min-height: 100vh;
   position: sticky;
   top: 0;
    /* overflow: hidden; */
    @media (max-width:1080px) {
        flex: 0 0 110px;

  }
  @media (max-width:980px) {
        flex: 0 0 200px;
  }
  @media (max-width:780px) {
        flex: 0 0 80px;
  }
  @media (max-width:580px) {
        flex: 0 0 60px;
  }
    @media (max-width:480px) {
        display: none;
  }
  .activeLink {
  font-weight: bold;
  color: var(--dark-1);
  transition: color 0.3s ease; /* or any other color to indicate the active link */
}
    .btn {
        width:100%;
        
        margin: 5px 0;
    @media (max-width:1180px) {
        display: none;
    }
    }
    .top {
        @media (max-width:1180px) {
    align-items: flex-end;
    justify-content: flex-end;
  }
    }
    ul {
        @media (max-width:1180px) {
    align-items: flex-end;
    justify-content: flex-end;
  }
    }
    li {
        border-radius: 40px;
  text-align: center;
  padding: 1.2rem 2rem;
  font-size: 20px;
  @media (max-width:1180px) {
    align-items: flex-end;
    justify-content: flex-end;
    width:7rem;
    justify-content: center;
    height:7rem;
    /* padding: 0; */
    border-radius: 50%;
    display: grid;
    place-items: center;
    span {
        display: none;
    }
  }
  @media (max-width:980px) {
    width:6.5rem;
    justify-content: center;
    height:6.5rem;
  }
  svg {
    font-size: 30px;
    @media (max-width:780px) {
        font-size: 25px;
    }
  }
  &:hover {
  /* background-color: #c7c6c6; */
  background-color: var(--dark-grey-hover);
}
    }
    .profilewrapper {
 border-radius: 40px;
  text-align: center;
  padding: .6rem;
  gap:2px;
  margin-bottom: 1.5rem;
  cursor: pointer;
  .avatar {
        width: 4.5rem !important;
        height: 4.5rem !important;
        border-radius: 50%;
    
    }
  @media (max-width:1180px) {
    width:8rem;
    justify-content: center;
    height:8rem;
   
    border-radius: 50%;
    display: grid;
    place-items: center;
    align-self: flex-end;
    margin: 0;
   
    &:hover {
  background-color: var(--dark-grey-hover);
 
  }
  }
  
  &:hover {
  background-color: var(--dark-grey-hover);
 
  }
  h4 {
    @media (max-width:1180px) {
        display: none;
  }

}
    }
    .leftTop {
        width: 80%;
        margin: 0 auto;
    }
    .wrapper {
        height: 100vh;
   position: sticky;
   top: 0%;
   left:0;
   padding-left: 2rem;
    position:relative;
    }
`

export default LeftSidebarIndex