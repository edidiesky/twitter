
import React from 'react';
import styled from 'styled-components';
import { BsImages, BsEmojiSmile } from 'react-icons/bs'

const TweetFormSection = () => {

    return (
        <TweetFormSectionStyles>
            <div className="w-100 flex item-start gap-1">
                <div className="image_wrapper">
                    <img src={"/images/raoul-bhavnani.jpg"} alt="tweet_comment_image" className="avatar_profile w-100 h-100" />
                    <div className="image_gradient"></div>
                </div>
                <div className="flex flex-1 column gv">
                    <div className="area w-100">
                        <textarea placeholder='Tweet your reply' className="text"></textarea>
                    </div>
                    <div className="flex w-100 item-center justify-space">
                        <div className="flex item-center">
                            <div className="icons flex item-center justify-center">
                                <BsImages fontSize={'20px'} />
                            </div> <div className="icons flex item-center justify-center">
                                <BsEmojiSmile fontSize={'20px'} />
                            </div>
                        </div>
                        <div className="btn btn-3 fs-14 text-extra-bold text-white">Reply</div>
                    </div>
                </div>
            </div>
        </TweetFormSectionStyles>
    )
}

const TweetFormSectionStyles = styled.div`
    width: 100%;
    padding: 1.5rem;
    border-bottom: 1px solid rgba(0,0,0,.08);
  font-family: "CustomFont2_light", sans-serif;

    &:hover {
        background-color: #f1f1f1;
    }
    .btn-3 {
        background-color: var(--blue-1) !important;
        opacity: .6;
    }
    .area {
        height: 6.5rem;
    /* border-bottom: 1px solid rgba(0,0,0,.1); */

    }
    .image_wrapper {
      width:4rem;
      height:4rem;
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
    .icons {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        transition: all .5s;

        svg {
            font-size: 20px;
            color:rgba(29, 156, 240, 0.835) ;
        }
        &:hover {
            background-color: rgba(29,155,240,.1);
                svg {
                    color:rgba(29, 156, 240, 0.835) ;
                }
        }
    }
    .text {
        resize: none;
        border:none;
        outline:none;
        font-size: 17px;
        font-family: inherit;
        font-weight: 400;
        background-color: transparent;
        padding:2rem 1rem ;
        color:var(--dark-1);
        &::placeholder {
            font-size: 20px;
  font-family: "CustomFont2_light", sans-serif;
        color:var(--dark-1);
            font-weight: 400;
        }
    }
`
export default TweetFormSection