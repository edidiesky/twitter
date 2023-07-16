import { BsTwitter } from 'react-icons/bs'
import { RiHome7Fill } from 'react-icons/ri'
import { GoSearch } from 'react-icons/go'
import { IoNotificationsOutline } from 'react-icons/io5'
import React from 'react';
import styled from 'styled-components';
const list = [
    {
        title: "Home",
        path: '',
        icon: <RiHome7Fill />
    }, {
        title: "Explore",
        path: '',
        icon: <GoSearch />
    }, {
        title: "Notifications",
        path: '',
        icon: <IoNotificationsOutline />

    }, {
        title: "Messages",
        path: '',
        icon: <GoSearch />

    }, {
        title: "Profile",
        path: '',
        icon: <GoSearch />

    }, {
        title: "More",
        path: '',
        icon: <GoSearch />

    },
]

const LeftSidebarIndex: React.FC = () => {
    const username = 'Edidie tried Coding'
    return (
        <div className="w-100 h-100">
            <LeftSidebarStyles>
                <div className="flex column wrapper auto gap-2">
                    <div className="icon flex item-center justify-center">
                        <BsTwitter fontSize={'30px'} color='var(--blue-1)' />
                    </div>
                    <ul className="flex column item-start">
                        {
                            list.map((x, index) => {
                                return <li key={index} className=" flex item-center gap-2 text-light">
                                    {x.icon}
                                    {x.title}</li>
                            })
                        }
                    </ul>
                    <div className="btn fs-18 text-white text-bold">Tweet</div>
                    <div className="profilewrapper flex item-center">
                        <img src="./images/johanna-richardson.jpg" alt="images-avatar" className="avatar" />
                        <h4 className="fs-16 text-bold text-start w-100">
                            {username}
                            <span className="block text-grey text-light fs-16">@edidiesky</span>
                        </h4>
                    </div>
                </div>
            </LeftSidebarStyles>

        </div>
    )
}

const LeftSidebarStyles = styled.div`
    width: 100%;
    /* background-color: red; */
    height: 100vh;
    position: sticky;
    top: 10%;
    border-right: 1px solid rgba(0,0,0,.1);
    .btn {
        width:100%;
        margin-bottom: 20px;
    }
    li {
        border-radius: 40px;
  text-align: center;
  padding: 1.4rem 2rem;
  font-size: 20px;
  svg {
    font-size: 30px;
  }
  &:hover {
  background-color: #e6e5e5;
}
    }
    .profilewrapper {
        border-radius: 40px;
  text-align: center;
  padding: 1rem 2rem;
  gap:10px;
  cursor: pointer;
  &:hover {
  background-color: #f7f7f7;
}
    }
    .wrapper {
        width: 75%;
        margin: 0 auto;
        padding-top: 1rem;
    }
  `

export default LeftSidebarIndex