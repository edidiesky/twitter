import { feedcardtype } from '@/types/feedtype';
import React from 'react';
import styled from 'styled-components';

const FeedCard = (props: feedcardtype) => {
    return (
        <div className="w-100">
            <FeedCardStyles>
                <div className="flex w-90 auto item-start feed_card_wrapper gap-1">
                    <img src={props.image} alt="" className="avatar" />
                    <div className="flex column gap-1">
                        <h4 className="fs-16 gap-1 text-extra-bold flex item-center">
                            {props.profile_name}
                            <span className="text-light fs-14 ">@{props.username}</span>
                        </h4>
                        <h5 className="text-light family1 fs-18">
                            {props.tweet_text}
                        </h5>
                        <div className="w-100">
                            {
                                props.tweet_image.map(x => {
                                    return <img style={{borderRadius:"20px"}} src={x} alt="" className="w-100 h-100" />
                                })
                            }
                        </div>
                    </div>
                </div>
            </FeedCardStyles>

        </div>
    )
}

const FeedCardStyles = styled.div`
    width: 100%;
    padding: 1.5rem;
    border-bottom: 1px solid rgba(0,0,0,.1);
    &:hover {
        background-color: #f1f1f1;
    }
    h5 {
        font-size: 16px;
        color: rgb(15, 20, 25);
        font-weight: normal;
        line-height: 20px;
    }
  `

export default FeedCard