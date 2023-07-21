import { feedcardtype } from '@/types/feedtype';
import { BiSolidBadgeCheck } from 'react-icons/bi'
import { BiDotsHorizontalRounded } from 'react-icons/bi'

import { HiOutlineChatBubbleOvalLeft } from 'react-icons/hi2'
import { LiaRetweetSolid } from 'react-icons/lia'
import React from 'react';
import styled from 'styled-components';

const postfeedDetails = {
    tweet_id: 15,
    user_id: 15,
    profile_name: "The champion",
    username: "mhasnneye",
    tweet_text: 'Happy birthday wizkid ',
    timestamp: "07/25/2022",
    retweet_count: 292,
    favorite_count: 299,
    is_verified: false,
    tweet_image: ['https://pbs.twimg.com/media/F1kSXZwXgAEm9lu?format=jpg&name=small'],
    image: "/images/boris-khentov.jpg",
    location: "Agodim",
}

const PostFeedCard = () => {
    return (
        <FeedCardStyles key={postfeedDetails.tweet_id}>
            <div className="flex w-90 auto item-start justify-space feed_card_wrapper gap-1">
                <div className="flex-1 item-start flex gap-1">
                    <div className="image_wrapper">
                        <img src={postfeedDetails.image} alt="tweet_comment_image" className="avatar_profile w-100 h-100" />
                        <div className="image_gradient"></div>
                    </div>
                    <div className="flex column flex-1" style={{ gap: '.3rem' }}>
                        <h4 className="fs-18 text-extra-bold flex item-center" style={{ gap: '.2rem' }}>
                            {postfeedDetails.profile_name}
                            <span className='flex item-center'><BiSolidBadgeCheck color={'var(--blue-1)'} /></span>
                            <span className="text-light fs-16 text-grey block">@{postfeedDetails.username}</span>
                        </h4>
                        <h5 style={{ paddingBottom: "1rem" }} className="text-light family1 fs-16">
                            {postfeedDetails.tweet_text}
                        </h5>
                        <div className="w-100 wrapper">
                            {
                                postfeedDetails.tweet_image.map((x, index) => {
                                    return <img key={index} style={{ borderRadius: "10px" }} src={x} alt="" className="w-100 h-100" />
                                })
                            }
                        </div>
                        <div className="flex item-center w-100 gap-2">
                            <div className="flex item-center fs-14 text-light feedtags_wrapper">
                                <div className="flex iconwrapper item-center" style={{ gap: ".3rem" }}>
                                    <div className="icons icon1 flex item-center justify-center">
                                        <HiOutlineChatBubbleOvalLeft />
                                    </div>
                                    23
                                </div>
                                <div className="flex iconwrapper text_2 item-center" style={{ gap: ".3rem" }}>
                                    <div className="icons icon2 flex item-center justify-center">
                                        <LiaRetweetSolid fontSize={'24px'} />
                                    </div>
                                    144
                                </div><div className="flex iconwrapper item-center" style={{ gap: ".3rem" }}>
                                    <div className="icons icon1 flex item-center justify-center">
                                        <HiOutlineChatBubbleOvalLeft />
                                    </div>
                                    23
                                </div><div className="flex iconwrapper item-center" style={{ gap: ".3rem" }}>
                                    <div className="icons icon1 flex item-center justify-center">
                                        <HiOutlineChatBubbleOvalLeft />
                                    </div>
                                    23
                                </div>
                            </div>
                            <div className="flex iconwrapper item-center fs-16 text-light" style={{ gap: ".3rem" }}>
                                <div className="icons icon1 flex item-center justify-center">
                                    <HiOutlineChatBubbleOvalLeft fontSize={'20px'} />
                                </div>
                                23
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex item-center justify-end">
                            <div className="icons flex item-center justify-center">
                                <BiDotsHorizontalRounded fontSize={'20px'} />
                            </div>
                        </div>
            </div>
        </FeedCardStyles>
    )
}

const FeedCardStyles = styled.div`
    width: 100%;
    padding: 1.5rem .7rem;
    border-bottom: 1px solid rgba(0,0,0,.1);
    &:hover {
        background-color: #f1f1f1;
    }
    
    .icons {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        transition: all .5s;

        svg {
            font-size: 20px;
        }
        &:hover {
            background-color: rgba(29,155,240,.1);
                svg {
                    color:rgba(29, 156, 240, 0.835) ;
                }
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
      background:rgba(0,0,0,.5);
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
    img {
        object-fit: cover;
    }
    .feedtags_wrapper {
        /* justify-content:center; */
        gap:3rem;
        @media (max-width:580px) {
            gap:1rem;
        }
    }
    .wrapper {
        grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
        display: grid;
        grid-gap: .5rem;
    }
    .iconwrapper {
        transition: all .5s;
        cursor: pointer;
        &:hover {
            color:rgba(29, 156, 240, 0.835) ;
            &.text_2 {

                color:rgba(0, 186, 124, 0.802) ;

            }
            .icons.icon1 {
                background-color: rgba(29,155,240,.1);
                svg {
                    color:rgba(29, 156, 240, 0.835) ;
                }
            }.icons.icon2 {
                background-color: rgba(0,186,124,.1);
                svg {
                    color:rgba(0, 186, 124, 0.802) ;
                }
            }
        }
       .icons {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        transition: all .5s;

        svg {
            font-size: 20px;
        }
    }
}
    h5 {
        font-size: 16px;
        color: rgb(15, 20, 25);
        font-weight: 300;
        line-height: 20px;
        @media (max-width:580px) {
            font-size: 15px;
        }
    }
  `

export default PostFeedCard