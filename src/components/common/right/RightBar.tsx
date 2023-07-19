import React from 'react';
import styled from 'styled-components';
import Search from './Search';
import { chatData } from '@/data/chatData';
type Rightbar = {
    types?: String
}

const images = [
    './victor_1.jpg',
    './victor_5.jpg',
    './victor_3.jpg',
    './victor_4.jpg',
    './victor_4.jpg',
]

const RightSidebarIndex: React.FC<Rightbar> = ({ types }) => {
    return (
        <RightSidebarStyles>
            <div className="wrapper flex column">
                <Search />
                <div className="w-90 auto flex column gap-2">
                    {
                        types && <div className="image_wrapper w-90 auto">
                            {
                                images.map((x, index) => {
                                    return <img key={index} src={x} alt="" className="w-100" />
                                })
                            }
                        </div>
                    }
                    {/* <div className="verfiy_wrapper w-90 auto flex column item-start gap-1">
                            <h3 className="text-extra-bold">Get Verified</h3>
                            <h4 className="fs-16 text-extra-bold">Subscribe to unlock new features.</h4>
                            <div className="btn text-extra-bold btn-3 fs-16 text-white">Get Verfied</div>
                        </div> */}
                    <div className="verfiy_wrapper wrapper2 w-90 auto flex column item-start">
                        <h3 className="text-extra-bold w-90 auto">
                            You might like</h3>
                        <div className="flex column w-100">
                            {
                                chatData.map((x, index) => {
                                    return <div key={index} className="w-100 list flex item-center justify-space">
                                        <div className="flex item-center gap-1">
                                            <img src={x.image} alt="" className="avatar" />
                                            <h4 className="fs-16 text-extra-bold flex column" style={{ gap: ".2rem" }}>
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
                    <div className="flex item-center w-90 auto fs-16 text-light flex-wrap" style={{ gap: ".6rem", paddingBottom: "2rem" }}>
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
    width: 100%;
    @media (max-width:980px) {
        display: none;
  }
  .image_wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(100px,1fr));
    border: 1px solid rgba(0,0,0,.1);
    grid-gap: 10px;
    border-radius: 15px;
    img {
        height: 120px;
        object-fit: cover;
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
    }
    h3 {
        font-size: 22px;
    }
    .btn-3 {
        padding: 1rem 2rem;
    }
    .list {
        padding:.8rem 2rem;
        justify-content: space-between;
        gap: 1rem;

        &:hover {
            background-color:#e5ecef;
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