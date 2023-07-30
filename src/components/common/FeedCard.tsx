import { feedcardtype } from '@/types/feedtype';
import { AnimatePresence } from 'framer-motion';
import { LiaRetweetSolid } from 'react-icons/lia'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiSolidBadgeCheck, BiBarChart, BiDotsHorizontalRounded } from 'react-icons/bi'
import { HiOutlineChatBubbleOvalLeft } from 'react-icons/hi2'
import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import TweetModal from '../modals/TweetModal';

const FeedCard = (props: feedcardtype) => {
    const [tweet, setTweet] = useState(false)
    const [drop, setDrop] = useState(false)
    return (
        <FeedCardStyles key={props.tweet_id}>
            <div className={drop ? "dropdownCard  flex column active" : "dropdownCard  flex column"}>
                <div onClick={() => setDrop(false)} className="dropdown_background"></div>
                <ul onClick={() => setDrop(false)} className="flex column w-100 fs-14 text-bold">
                    <li className="flex item-center gap-1">Not interested in this tweet</li>
                    <li className="flex item-center gap-1">Follow Alexander</li>
                    <li className="flex item-center gap-1">Add or remove @Alexander form lists</li>
                    <li className="flex item-center gap-1">Mute Alexander</li>
                    <li className="flex item-center gap-1">Block Alexander</li>
                    <li className="flex item-center gap-1">Mute tweet</li>
                    <li className="flex item-center gap-1">Report tweet</li>
                </ul>
            </div>
            <AnimatePresence
                initial="false"
                exitBeforeEnter={true}
                onExitComplete={() => null}
            >
                {
                    tweet && <TweetModal setModal={setTweet} modal={tweet} />
                }
            </AnimatePresence>
            <div onClick={() => setDrop(true)} className="icons2 flex item-center justify-center">
                <BiDotsHorizontalRounded fontSize={'20px'} color='var(--dark-grey)' />
            </div>
            <Link prefetch href={`/${props.username}/status/${props.tweet_id}`} className="flex w-90 auto item-start feed_card_wrapper gap-1">
                <img src={props.image} alt="" className="avatar" />
                <div className="flex column w-100" style={{ gap: '.3rem' }}>
                    <h4 className="fs-18 text-dark text-extra-bold flex item-center" style={{ gap: '.2rem' }}>
                        {props.profile_name}
                        <span className='flex item-center'><BiSolidBadgeCheck color={'var(--blue-1)'} /></span>
                        <span className="text-light fs-16 text-grey ">@{props.username}</span>
                    </h4>
                    <h5 style={{ paddingBottom: "1rem" }} className="text_dark_grey text-light family1 fs-14">
                        {props.tweet_text}
                    </h5>
                    <div className="w-100 wrapper">
                        {
                            props.tweet_image.map((x, index) => {
                                return <img key={index} style={{ borderRadius: "10px" }} src={x} alt="" className="w-100 h-100" />
                            })
                        }
                    </div>

                </div>
            </Link>
            <div className="flex item-center w-85 auto gap-2">
                <div className="flex item-center w-85 auto gap-2">
                    <div className="flex w-100 item-center fs-14 text-light feedtags_wrapper">
                        <div onClick={() => setTweet(true)} className="flex iconwrapper item-center" style={{ gap: ".3rem" }}>
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
                        </div><div className="flex iconwrapper text-3 item-center" style={{ gap: ".3rem" }}>
                            <div className="icons icon3 flex item-center justify-center">
                                <AiOutlineHeart />
                            </div>
                            23
                        </div><div className="flex iconwrapper item-center" style={{ gap: ".3rem" }}>
                            <div className="icons icon1 flex item-center justify-center">
                                <BiBarChart />
                            </div>
                            123
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
   position: relative;
    border-bottom: 1px solid var(--border);
    &:hover {
        background-color: var(--dark-grey-hover);
    }
    h5 {
        @media (max-width:780px) {
        font-size: 14px !important;
    }
    }
    .dropdownCard {
        position: absolute;
        right: 2%;
        top: 8px;
        z-index: 40;
        cursor: pointer;
        width: 300px;
        border-radius: 10px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        background-color: #fff;
        height: 0;
        transition: all .3s;    
        opacity:0;
        visibility: hidden;
        .dropdown_background {
            width: 100vw;
            height: 100vh;
            position: fixed;
            z-index: 30;
            top: 0;
            left:0;
            background-color: transparent;
        }
        &.active {
            height: 280px;
            opacity:1;
                visibility: visible;
            ul {

            li {
                padding: 1.1rem 1.4rem;
                opacity:1;
                visibility: visible;
                width: 100%;
                transition: all .4s;
                &:hover {
                   background-color: #f1f1f1;

               }
            }
           }
        }
        ul {
            z-index: 35;

li { 
    padding: 1.1rem 1.4rem;
    opacity:0;
    visibility: hidden;
    width: 100%;
    &:hover {
       background-color: #f1f1f1;

   }
}
}
        
    }
    .icons2 {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        transition: all .5s;
        position: absolute;
        right: 2%;
        top: 8px;
        /* z-index:40; */
        cursor: pointer;

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
    img {
        object-fit: cover;
    }
    .feedtags_wrapper {
        /* justify-content:center; */
        gap:5rem;
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
        color:var(--dark-1);
        &:hover {
            color:rgba(29, 156, 240, 0.835) ;
            &.text-3 {
                color:rgba(223, 0, 104, 0.861) ;

            }
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
            .icons.icon3 {
                background-color: rgba(249,24,128,.1);
                svg {
                    color:rgba(223, 0, 104, 0.861) ;
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
        font-weight: 300;
        line-height: 20px;
        @media (max-width:780px) {
            font-size: 14px;
        }
    }
  `

export default FeedCard