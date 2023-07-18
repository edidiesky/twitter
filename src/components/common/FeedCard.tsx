import { feedcardtype } from '@/types/feedtype';
import { BiSolidBadgeCheck } from 'react-icons/bi'
import { HiOutlineChatBubbleOvalLeft } from 'react-icons/hi2'
import { LiaRetweetSolid } from 'react-icons/lia'
import React from 'react';
import styled from 'styled-components';

const FeedCard = (props: feedcardtype) => {
    return (
        <FeedCardStyles key={props.tweet_id}>
            <div className="flex w-90 auto item-start feed_card_wrapper gap-1">
                <img src={props.image} alt="" className="avatar" />
                <div className="flex column w-100" style={{ gap: '.3rem' }}>
                    <h4 className="fs-18 text-extra-bold flex item-center" style={{ gap: '.2rem' }}>
                        {props.profile_name}
                        <span className='flex item-center'><BiSolidBadgeCheck color={'var(--blue-1)'} /></span>
                        <span className="text-light fs-16 text-grey ">@{props.username}</span>
                    </h4>
                    <h5 style={{ paddingBottom: "1rem" }} className="text-light family1 fs-14">
                        {props.tweet_text}
                    </h5>
                    <div className="w-100 wrapper">
                        {
                            props.tweet_image.map((x ,index)=> {
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

export default FeedCard