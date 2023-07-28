import { BsTwitter } from 'react-icons/bs'
import { RiHome7Fill } from 'react-icons/ri'
import { GoSearch } from 'react-icons/go'
import { IoNotificationsOutline } from 'react-icons/io5'
import { CiCircleMore } from 'react-icons/ci'
import { BiSolidUser } from 'react-icons/bi'
import { TbMailFilled } from 'react-icons/tb'

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import ActiveLink from './activelink'
const list = [
    {
        title: "Home",
        path: '/',
        icon: <RiHome7Fill />
    }, {
        title: "Explore",
        path: '/explore',
        icon: <GoSearch />
    }, {
        title: "Notifications",
        path: '',
        icon: <IoNotificationsOutline />

    }, {
        title: "Messages",
        path: '',
        icon: <TbMailFilled />

    }, {
        title: "Lists",
        path: '',
        icon: <BiSolidUser />

    },
    {
        title: "Communities",
        path: '',
        icon: <CiCircleMore />

    }, {
        title: "Verified",
        path: '',
        icon: <BiSolidUser />

    },
    {
        title: "Profile    ",
        path: '/edidie',
        icon: <CiCircleMore />

    }, {
        title: "More    ",
        path: '',
        icon: <CiCircleMore />

    },
]

const LeftSidebarIndex = () => {
    const username = 'Edidie tried Coding'
    return (
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
                        <div className="btn fs-16 text-white text-bold">Tweet</div>
                    </div>
                </div>
                <div className="w-85 auto">
                    <div className="profilewrapper w-100 flex item-center">
                        <img src="/images/johanna-richardson.jpg" alt="images-avatar" className="avatar" />
                        <h4 className="fs-16 text-bold text-start w-100">
                            {username}
                            <span className="block text-grey text-light fs-16">@edidiesky</span>
                        </h4>
                    </div>
                </div>
            </div>

        </LeftSidebarStyles>
    )
}

const LeftSidebarStyles = styled.div`
    flex: 0 0 300px;
    min-height: 100vh;
   position: sticky;
   top: 0;
    /* overflow: hidden; */
    @media (max-width:480px) {
        display: none;
  }
  .activeLink {
  font-weight: bold;
  color: var(--blue-1);
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
  padding: 1rem 2rem;
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
    width:7rem;
    justify-content: center;
    height:7rem;
  }
  svg {
    font-size: 30px;
  }
  &:hover {
  background-color: #c7c6c6;
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
  background-color: #f7f7f7;
 
  }
  }
  
  &:hover {
  background-color: #f7f7f7;
 
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