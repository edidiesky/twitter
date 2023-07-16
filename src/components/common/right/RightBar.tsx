import React from 'react';
import styled from 'styled-components';
import Search from './Search';
import { chatData } from '@/data/chatData';

interface RightSidebarProps {
}
const RightSidebarIndex: React.FC<RightSidebarProps> = () => {
    return (
        <div className="w-100 h-100">
            <RightSidebarStyles>
                <div className="wrapper w-90 flex column gap-2">
                    <Search />
                    <div className="w-90 auto flex column gap-2">
                        <div className="verfiy_wrapper w-90 auto flex column item-start gap-1">
                            <h3 className="text-extra-bold">Get Verified</h3>
                            <h4 className="fs-16 text-extra-bold">Subscribe to unlock new features.</h4>
                            <div className="btn text-extra-bold btn-3 fs-16 text-white">Get Verfied</div>
                        </div>
                        <div className="verfiy_wrapper wrapper2 w-90 auto flex column item-start gap-3">
                            <h3 className="text-extra-bold">Who to follow</h3>
                            <div className="flex column" style={{ gap: "1.5rem" }}>
                                {
                                    chatData.map(x => {
                                        return <div className="w-100 flex item-center gap-3 justify-space">
                                            <div className="flex item-center gap-1">
                                                <img src={x.image} alt="" className="avatar" />
                                                <h4 className="fs-16 text-extra-bold">
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
                    </div>

                </div>
            </RightSidebarStyles>

        </div>
    )
}

const RightSidebarStyles = styled.div`
    width: 100%;
    height: 100vh;
    position: sticky;
    top: 10%;
    border-left: 1px solid rgba(0,0,0,.1);
    .wrapper {
        margin: 0 auto;
    }
    h3 {
        font-size: 22px;
    }
    .btn-3 {
        padding: 1rem 2rem;
    }
    .verfiy_wrapper {
        padding:1.4rem 2rem;
    background-color: var(--grey-2);
    border-radius: 10px;
    &.wrapper2 {
        padding:1.8rem 1.7rem;

    }
    }
  `

export default RightSidebarIndex