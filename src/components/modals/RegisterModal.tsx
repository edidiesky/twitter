import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { slideUp } from "../utils/framer";
import { RxCross2 } from 'react-icons/rx'
import FormInput from "../form/input";

type SetStateProp<T> = React.Dispatch<React.SetStateAction<T>>

type modalType = {
  modal?: Boolean;
  setModal: SetStateProp<Boolean>;
}

const RegsiterModal: React.FC<modalType> = ({ modal, setModal }) => {
  const [register, setRegsiter] = useState(false);
  const [bio, setBio] = useState('false');
  const [website, setWebsite] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [index, setIndex] = useState(0);


  return (
    <RegisterModalStyles
      as={motion.div}
      initial={{ opacity: 0, visibility: "hidden" }}
      exit={{ opacity: 0, visibility: "hidden" }}
      animate={{ opacity: 1, visibility: "visible" }}
    >
      <div className="backdrop" onClick={() => setModal(false)}></div>

      <motion.div
        variants={slideUp}
        initial="hidden"
        animate="visible"
        exit={"exit"}
        className={"deleteCard shadow"}
      >
        {/* edit profile top */}
        <div className="flex Regsitertop w-100 auto ">
          <div className="w-90 auto flex gap-2 item-center">
            <div className="flex item-center gap-3 py-1">
              <div className="icons flex item-center justify-center"><RxCross2 fontSize={'20px'} /></div>
            </div>
            {
              index === 1 ? <h4 className="fs-20 text-extra-bold">
                Step 1 of 2</h4> : index === 2 ? <h4 className="fs-20 text-extra-bold">
                  Step 2 of 2</h4> : ''
            }
          </div>
        </div>
        {
          index === 1 ? <div className="center_content h-100 justify-space w-85 py-1 auto flex column">

            <div className="w-85 formwraper auto flex column gap-3">
              <h4 className="fs-35 text-extra-bold">Customize your experience</h4>
              <div className="flex w-100 column gap-2">
                <div className="flex column gap-1">
                  <h5 className="fs-24 py-2 text-extra-bold"> Track where you see Twitter content across the web
                    <span className="text-light fs-16 py-1 block text-dark">
                      Twitter uses this data to personalize your experience. This web browsing history will never be stored with your name, email, or phone number.
                    </span>


                  </h5>
                </div>
                <h5 className="fs-16 text-light text-grey">By signing up, you agree to our Terms, Privacy Policy, and Cookie Use. Twitter may use your contact information, including your email address and phone number for purposes outlined in our Privacy Policy. Learn more</h5>
              </div>
            </div>
            <div className="btn w-85 auto btn-1 fs-16 text-white text-extra-bold">Next
            </div>
          </div> : index === 2 ? <div className="center_content h-100 justify-space w-85 py-2 auto flex column">

            <div className="w-85 formwraper auto flex column gap-3">
              <h4 className="fs-30 text-extra-bold">Create your account</h4>
              <div className="flex w-100 column gap-2">
                <FormInput state={name} label={'Name'} setState={setName} />
                <FormInput state={name} label={'Name'} setState={setName} />
                <div className="flex column gap-1">
                  <h5 className="fs-16 py-2 text-extra-bold">  Date of birth
                    <span className="text-light py-1 block text-grey">This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</span>
                  </h5>
                </div>
              </div>
            </div>
            <div className="btn w-85 auto btn-1 fs-16 text-white text-extra-bold">Next
            </div>
          </div> : <div className="center_content h-100 justify-space w-85 py-2 auto flex column">

            <div className="w-85 formwraper auto flex column gap-3">
              <h4 className="fs-30 text-extra-bold">Create your account</h4>
              <div className="flex w-100 column gap-2">
                <FormInput state={name} label={'Name'} setState={setName} />
                <FormInput state={name} label={'Name'} setState={setName} />
                <div className="flex column gap-1">
                  <h5 className="fs-16 py-2 text-extra-bold">  Date of birth
                    <span className="text-light py-1 block text-grey">This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</span>
                  </h5>
                </div>
              </div>
            </div>
            <div className="btn w-85 auto btn-1 fs-16 text-white text-extra-bold">Next
            </div>
          </div>
        }
      </motion.div>
    </RegisterModalStyles>
    // <h2>hello</h2>
  );
}
export default RegsiterModal

const RegisterModalStyles = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  display: flex;
  z-index: 3800;
  align-items: center;
  justify-content: center;
  top: 0;
  .formwraper {
    padding-bottom: 3rem;
  }
  .btn {
    padding:1.6rem 2rem !important;
    background-color: #9e9e9eec !important;
  }
  .label {
    width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.3rem;
  font-size: 1.3rem;
  color: var(--dark-1);
  font-weight: 700;
  text-transform: capitalize;
  position: relative;

  .labelspan {
    position: absolute;
    top: -15%;
    padding: 0 .6rem;
    left: 2%;
    background-color: #fff;
    font-weight: normal;
  }
  textarea {
    height: 10rem;
    border-radius: 8px;
    background: transparent;
    padding:1.8rem;
    width: 100%;
    outline: none;
    font-size: 1.6rem;
    font-weight: 500;
    resize:none;
    font-family: inherit;
    border: 1px solid rgba(0, 0, 0, 0.4);
    color: var(--dark-1);

    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.4);
    }
    &:focus {
      border: 2px solid var(--blue-1);
      background: transparent;
    }
    &.true {
      background: #fff;
    }
    &.inputError {
      border: 2px solid var(--red);
    }
    &:invalid[focused="true"] ~ span {
      display: block;
    }
  }
  input {
    height: 5.5rem;
    border-radius: 8px;
    background: transparent;
    padding: 0 1.8rem;
    width: 100%;
    outline: none;
    font-size: 1.6rem;
    font-weight: 500;
    font-family: inherit;
    border: 1px solid rgba(0, 0, 0, 0.4);
    color: var(--dark-1);

    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.4);
    }
    &:focus {
      border: 2px solid var(--blue-1);
      background: transparent;
    }
    &.true {
      background: #fff;
    }
    &.inputError {
      border: 2px solid var(--red);
    }
    &:invalid[focused="true"] ~ span {
      display: block;
    }
  }

  span {
    font-size: 1.3rem;
    color: #c61212;
    font-weight: 600;
    display: none;
  }
  }
  .image_wrapper {
      width:12rem;
      height:12rem;
      position: relative;
      border-radius:50%;
      cursor:pointer;
      transform:translate(10%,-50%);
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
  .icon {
  }
  .icon:hover {
    background-color: #ccc;
  }
  .RegsiterBottom {
    position: relative;
    padding: 0 1rem;
    /* padding-bottom: 1.6rem; */

    .option {
      width: 100%;
      position: relative;
      text-align: center;
      padding: 0 1.4rem;
      font-size: 14px;
      color: var(--dark-1);
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
  .Regsitertop {
    background-color: rgba(255, 255, 255, 0.875);
  z-index: 3000;
  backdrop-filter: blur(54px);
  position:sticky;
  left:0;
  top:0;
  border-top-left-radius:20px;
  border-top-right-radius:20px;
  }
  .deleteCard {
    width: clamp(45%, 150px, 100%);
    display: flex;
    flex-direction: column;
    background: #fff;
    box-shadow: 0 2rem 3rem rgba(0, 0, 0, 0.1);
    position: relative;
    min-height: 60rem;
    border-radius:20px;
    border-top-right-radius:20px;

  }
  .deleteCard_wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 20px;
    position: relative;
  }
  .center_content {
    background: #fff;
    position: relative;
  }
`;
