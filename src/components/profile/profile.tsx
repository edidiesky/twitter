import React from 'react';
import styled from 'styled-components';
import WallpaperIndex from './top/wallpaper';
import ProfileBottomIndex from './top/bottom';
import RightSidebarIndex from '../common/right/RightBar';
import LeftSidebarIndex from '../common/LeftSidebar';
import Top from './top/top';
import Feed from '../common/feed/feed';

type Rightbar = {
    type: String
}

const Profile: React.FC = () => {
    return (
        <ProfileStyles>
            {/* top bar of user profile */}
            <LeftSidebarIndex />
            <div className="flex wrap column gap-2">
                <div className="flex column">
                    <Top />
                    <WallpaperIndex />
                    <ProfileBottomIndex />
                </div>
                <div className="w-100 flex column">
                    <div className="w-100 flex item-center text-bold fs-16 profilelist">
                        <div className="flex-1 active profileTag"><div className="tag">Tweets</div></div>
                        <div className="flex-1 profileTag">Tweets</div>
                        <div className="flex-1 profileTag">Tweets</div>
                    </div>
                    <Feed />
                </div>
            </div>
            <RightSidebarIndex types={'profile'} />
            {/* User feeds */}
        </ProfileStyles>
    )
}

const ProfileStyles = styled.div`
    width: 100%;
    display: grid;
    width: 100%;
    display: grid;
    grid-template-columns: 22vw 1fr 30vw;
    grid-gap: 1rem;
    place-itens:start;
    .profilelist {
        border-bottom:1px solid rgba(0,0,0,.1);
        .profileTag {
            padding:2rem;
            text-align:center;
           .tag {
            position:relative;
            width:100px;
            text-align:center;

            &.active::after {
                position:absolute;
                width:100%;
                height:3px;
                background-color: var(--blue-1);
                content:"";
                bottom:-2%;
                left:0%;
            }
           }
            &:hover {
                background:var(--grey-2);
            }
        }
    }
    /* height: 100vh; */
    /* overflow: hidden; */
    @media (max-width:1180px) {
        grid-template-columns: 120px 1fr .7fr;
  }
  @media (max-width:980px) {
    grid-template-columns: 100px 1fr .2fr;
  }
  @media (max-width:780px) {
        grid-template-columns: 100px 1fr;
  }
  @media (max-width:480px) {
        grid-template-columns: 1fr;
  }

    .wrap {
        border-right : 1px solid rgba(0,0,0,.1);
        border-left : 1px solid rgba(0,0,0,.1);
        @media (max-width:980px) {
    border-right : 1px solid rgba(0,0,0,.1);

        }
    }

  `

export default Profile