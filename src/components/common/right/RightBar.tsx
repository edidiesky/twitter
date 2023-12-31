import React from 'react';
import styled from 'styled-components';
import { BiSolidBadgeCheck, BiBarChart, BiDotsHorizontalRounded } from 'react-icons/bi'
import { HiOutlineChatBubbleOvalLeft } from 'react-icons/hi2'
import { LiaRetweetSolid } from 'react-icons/lia'
import Search from './Search';
import { chatData } from 'data/chatData';
type Rightbar = {
    types?: String
}

const images = [
    './victor_1.jpg',
    './victor_1.jpg',
    './victor_1.jpg',
]

const RightSidebarIndex: React.FC<Rightbar> = ({ types }) => {
    return (
        <RightSidebarStyles>
            <div className="wrapper w-100 flex column">
                <Search />
                <div className="w-90 auto flex column gap-2">
                    {
                        types === 'profile' && <div className="image_wrappers w-90 auto">
                            {
                                images.map((x, index) => {
                                    return <img key={index} src={x} alt="" className="" />
                                })
                            }
                        </div>
                    }
                    {
                        types === 'feeddetails' &&
                        <div className="feed_participant w-90 auto flex column gap-2">
                            <h3 className="text-extra-bold text_dark_grey w-100 auto">
                                Relevant People</h3>
                            <div className="w-100 flex item-start justify-space gap-1">
                                <div className="image_wrapper">
                                    <img src={'/images/raoul-bhavnani.jpg'} alt="tweet_comment_image" className="avatar_profile w-100 h-100" />
                                    <div className="image_gradient"></div>
                                </div>
                                <div className="flex-1 flex column" style={{ gap: ".6rem" }}>
                                    <div className="w-100 flex item-center justify-space">
                                        <h4 className="fs-16 text-extra-bold flex column" style={{ gap: ".2rem" }}>
                                            Nai_SmaeTech
                                            <span className="block fs-16 text-grey text-light">
                                                @name_sake103
                                            </span>
                                        </h4>
                                        <div className="btn text-extra-bold btn-3 fs-14 text-white">Follow</div>

                                    </div>
                                    {/* about */}
                                    <h4 className="fs-16 text-light text-dark">
                                        Building http://TechPad.ink,
                                        @contentreio
                                        | Founder
                                        @master_backend
                                        | Author of http://EnterpriseVue.dev | I help you become a great Backend Engineer and make money
                                    </h4>
                                </div>
                            </div>
                        </div>
                    }
                    {/* <div className="verfiy_wrapper w-90 auto flex column item-start gap-1">
                            <h3 className="text-extra-bold">Get Verified</h3>
                            <h4 className="fs-16 text-extra-bold">Subscribe to unlock new features.</h4>
                            <div className="btn text-extra-bold btn-3 fs-16 text-white">Get Verfied</div>
                        </div> */}
                    <div className="verfiy_wrapper wrapper2 w-90 auto flex column item-start">
                        <h3 className="text-extra-bold text_dark_grey w-90 auto">
                            Who to follow</h3>
                        <div className="flex column w-100">
                            {
                                chatData.slice(0,3).map((x, index) => {
                                    return <div key={index} className="w-100 list flex item-center justify-space">
                                        <div className="flex item-center gap-1">
                                            <div className="image_wrapper">
                                                <div className="image_gradient"></div>
                                                <img src={x.image} alt="" className="avatar" />
                                            </div>

                                            <h4 className="fs-16 text_dark_grey text-extra-bold flex column" style={{ gap: ".2rem" }}>
                                                {x.name}
                                                <span className="block fs-14 text-grey text-light">
                                                    {x.username}
                                                </span>
                                            </h4>
                                        </div>
                                        <div className="btn text-extra-bold btn-3 fs-14 text-white">Follow</div>

                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div className="flex item-center text-dark-grey w-90 auto fs-16 text-light flex-wrap" style={{ gap: "1rem", paddingBottom: "2rem" }}>
                        <h5 className='text-light'>Terms of Service</h5>
                        <h5 className='text-light'>Privacy Policy</h5>
                        <h5 className='text-light'>Cookie Policy</h5>
                        <h5 className='text-light'>Ads info</h5>
                        <h5 className='text-light'>More</h5>
                        <h5 className='text-light'>Edidiong Essien</h5>
                        <h5 className='text-light'>© 2023</h5>
                    </div>
                </div>

            </div>
        </RightSidebarStyles>
    )
}

const RightSidebarStyles = styled.div`
   flex:.7;
   min-height: 100vh;
   position: sticky;
   top: 0;
   @media (max-width:1080px) {
        flex: .6;
    }
    @media (max-width:980px) {
        flex: .26;
    }
    
    @media (max-width:780px) {
        flex: .1;
    }
    @media (max-width:680px) {
        display: none;
    }
  h5 {
    color: var(--grey-1);
  }
  .feed_participant {
    border: 1px solid var(--border);
    border-radius: 15px;
    padding:1.5rem 2rem;
  }
  .image_wrappers {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 10px;
    border: 1px solid var(--border);
    border-radius: 15px;
    padding:1.5rem 2rem;

    img {
        width: 100%;
    }
  }
  .image_wrapper {
      width:5rem;
      height:5rem;
      border-radius:50%;
      cursor:pointer;
      position: relative;
      &:hover {
        .image_gradient{
          opacity:1;
        }
      }
      .image_gradient {
      width:100%;
      height:100%;
      border-radius:50%;
      /* transform: translateY(-100%); */
      position: absolute;
      background:rgba(0,0,0,.3);
      opacity:0;
      transition:all .5s;
    }
    .avatar_profile {
      width:100%;
      height:100%;
      border-radius:50%;
      /* transform: translateY(-100%); */
      position: absolute;
      
    }
    }

  h4 {
    @media (max-width:1180px) {
        font-size: 16px;
        span {
        font-size: 14px;

        }
    }
    @media (max-width:1080px) {
        font-size: 14px;
        span {
        font-size: 12px;

        }
    }
  }
    .wrapper {
        margin: 0 auto;
        position: sticky;
    top: 0%;
    height: 100%;
        /* width: 93%; */

        @media (max-width:1080px) {
            width: 95%;
        }
        @media (max-width:980px) {
            display: none;
        }
    }
    h3 {
        font-size: 20px;
    }
    .btn-3 {
        padding: 1rem 2rem;
    }
    .list {
        padding:.8rem 2rem;
        justify-content: space-between;
        gap: 1rem;

        &:hover {
            background-color:var(--dark-grey-hover);
        }
    }
    .verfiy_wrapper {
    background-color: var(--grey-2);
    padding:1.4rem 2rem;

    border-radius: 15px;
  
    &.wrapper2 {
        padding:1.8rem 0;
        h3 {
        padding:1rem;
    }

    }
    }
  `

export default RightSidebarIndex