import React from 'react';
import styled from 'styled-components';
import WallpaperIndex from './top/wallpaper';
import ProfileBottomIndex from './top/bottom';
import RightSidebarIndex from '../common/right/RightBar';
import LeftSidebarIndex from '../common/LeftSidebar';

const Profile: React.FC = () => {
    return (
        <ProfileStyles>
            {/* top bar of user profile */}
            <LeftSidebarIndex/>
            <div className="flex wrap column gap-1">
                <WallpaperIndex />
                <ProfileBottomIndex />
            </div>
            <RightSidebarIndex/>
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
    min-height: 100vh;
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