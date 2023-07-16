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

    }, {
        title: "More",
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
        <LeftSidebarStyles>
            <div className="flex column wrapper auto gap-1">
                <div className="flex top w-100">
                    <div className="icon flex item-center justify-center">
                        <BsTwitter fontSize={'30px'} color='var(--blue-1)' />
                    </div>
                </div>
                <ul className="flex column item-start">
                    {
                        list.map((x, index) => {
                            return <li key={index} className="list flex item-center gap-2 text-light">
                                {x.icon}
                                <span className='span'>{x.title}</span></li>
                        })
                    }
                </ul>
                <div className="btn fs-18 text-white text-bold">Tweet</div>
                <div className="profilewrapper w-100 flex item-center">
                    <img src="./images/johanna-richardson.jpg" alt="images-avatar" className="avatar" />
                    <h4 className="fs-16 text-bold text-start w-100">
                        {username}
                        <span className="block text-grey text-light fs-16">@edidiesky</span>
                    </h4>
                </div>
            </div>
        </LeftSidebarStyles>
    )
}

const LeftSidebarStyles = styled.div`
    width: 100%;
    /* background-color: red; */
    height: 100vh;
    position: sticky;
    top: 0%;
    @media (max-width:490px) {
        display: none;
  }
    .btn {
        width:100%;
        
        margin-bottom: 20px;
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
    width:7rem;
    justify-content: center;
    height:7rem;
  }
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
  gap:2px;
  cursor: pointer;
  @media (max-width:1180px) {
    width:8rem;
    justify-content: center;
    height:8rem;
    /* padding: 0; */
    border-radius: 50%;
    display: grid;
    place-items: center;
    align-self: flex-end;
    margin: 0;
    .avatar {
        width: 6rem !important;
        height: 6rem !important;
        border-radius: 50%;
    
    }
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
    .wrapper {
        width: 80%;
        margin: 0 auto;
        padding-top: 1rem;
    }
  `

export default LeftSidebarIndex