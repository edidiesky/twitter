import React from 'react';
import styled from 'styled-components';

const ProfileBottomIndex: React.FC = () => {
  return (
    <ProfileBottomStyles className='flex column gap-1'>
      <div className="w-90 auto flex item-center justify-space">

      

        <div className="flex item-center justify-end w-100"> <div className="profileBtn text-dark text-bold">Edit Profile</div></div>
      </div>
      <div className="w-90 flex column gap-2 auto">
        <h3 className="fs-20 text-extra-bold">Eddie tried coding
          <span className="block fs-18 text-grey text-light">@edidiesky</span>
        </h3>
        <h4 className="fs-16 text-light">Typescript || React.js || Node.js || Nextjs developer - A curious developer | You can visit my portfolio website to see how curious a developer I am</h4>
      </div>
    </ProfileBottomStyles>
  )
}

const ProfileBottomStyles = styled.div`
    width: 100%;
    padding-top:1rem;

    position: relative;
    .avatar_profile {
      width:12rem;
      height:12rem;
      border-radius:50%;
      top:-100px;
      /* transform: translateY(-100%); */
      position: absolute;
      border:5px solid #fff;
    }
    .profileBtn {
      z-index: 300;
  border-radius: 40px;
  text-align: center;
  padding: 1rem 2rem;
  font-size:15px;
  border:1px solid rgba(0,0,0,.1);
  &:hover {
    background:var(--grey-2);
  }
    }
    
  `

export default ProfileBottomIndex