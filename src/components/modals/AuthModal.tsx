import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { slideUp } from "../utils/framer";
import { RxCross2 } from 'react-icons/rx'
export default function AuthModal() {
  const [auth, setAuth] = useState(false);

  return (
    <DeleteContainer
      as={motion.div}
      initial={{ opacity: 1, visibility: "visible" }}
      exit={{ opacity: 1, visibility: "visible" }}
      animate={{ opacity: 1, visibility: "visible" }}
    >
      <div className="backdrop"></div>
      <motion.div
        variants={slideUp}
        initial="hidden"
        animate="visible"
        exit={"exit"}
        className={"deleteCard shadow"}
      >
        <div className="flex w-90 auto justify-space item-center">
          <div className="flex item-center gap-3 py-1">
            <div className="icons flex item-center justify-center"><RxCross2 fontSize={'20px'} /></div>
            <h3 className="fs-20 text-bold">Edit profile</h3>
          </div>
          <div className=" flex item-center justify-end">
            <div className="btn btn-3 fs-14 text-bold text-white">Save</div>
          </div>
        </div>
        <div className="w-100 profile_background flex item-center justify-center">
          <div className="image_wrapper">
            <img src="./images/john-mileham.jpg" alt="" className="avatar_profile" />
            <div className="image_gradient"></div>
          </div>
        </div>
        <div className="w-90 auto flex column gap-2">
          
        </div>
      </motion.div>
    </DeleteContainer>
    // <h2>hello</h2>
  );
}

const DeleteContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  display: flex;
  z-index: 3800;
  align-items: center;
  justify-content: center;
  top: 0;
  .image_wrapper {
      width:12rem;
      height:12rem;
      border-radius:50%;
      position: absolute;
      bottom:-40%;
      left:2%;
      cursor:pointer;
      border:5px solid #fff;
      &:hover {
        .image_gradient{
          opacity:1;
        }
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
  .profile_background {
    background-color: #B2B2B2;
    height: 20rem;
    position:relative;
  }
  .btn-3 {
        padding: 1rem 2rem;
  }
  .authBtn {
    border: 1px solid rgba(0, 0, 0, 1);
    padding: 0.5rem 2rem;
    border-radius: 8px;
  }
  .icon {
  }
  .icon:hover {
    background-color: #ccc;
  }
  .authBottom {
    position: relative;
    padding: 0 1rem;
    padding-bottom: 1.6rem;

    .option {
      width: 100%;
      position: relative;
      text-align: center;
      padding: 0 1.4rem;
      font-size: 14px;
      color: var(--grey-1);
      &::after {
        width: 45%;
        height: 0.4px;
        content: "";
        background-color: rgba(0, 0, 0, 0.5);
        left: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      &::before {
        width: 45%;
        height: 0.4px;
        content: "";
        background-color: rgba(0, 0, 0, 0.5);
        right: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  .backdrop {
    background: rgba(0, 0, 0, 0.3);

    position: absolute;
    height: 100%;
    width: 100%;
  }
  .authTop {
    padding: 1rem 0;
    font-size: 14px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .deleteCard {
    width: clamp(45%, 150px, 100%);
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.1);
    position: relative;
    height: 85vh;
    overflow: auto;
    @media (max-width: 980px) {
      width: 60%;
    }
    @media (max-width: 780px) {
      width: 80%;
    }
  }
`;
