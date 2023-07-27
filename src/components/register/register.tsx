import React, { useState } from "react";
import { styled } from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { BsTwitter } from 'react-icons/bs'
import Link from 'next/link'
import { FaFacebook, FaGithub } from "react-icons/fa";

const Regsiters: React.FC = () => {
  return (
    <RegsiterStyles style={{ overflow: "hidden" }}>
      <div className="w-100">
        <img src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png" alt="" className="image w-100 h-100" />
      </div>
      <div className="w-100 auth_right h-100 gap-2 flex column ">
        <div className="w-85 auto h-100 flex item-start justify-center gap-2 column">

          <Link href={'/'} className="icon flex item-center justify-center">
            <BsTwitter fontSize={'50px'} color='var(--blue-1)' />
          </Link>
          <div className="flex column gap-3">
            <h1 className="">Happening now</h1>
            <h3 className="fs-35 py-2 text-extra-bold">Join Twitter today.</h3>
          </div>
          <div className="flex authWrapper column w-100 gap-1">
            <div className="flex w-100 column gap-1 item-start">
              <div className="authBtn gap-2 flex fs-16 text-dark item-center">
                <FcGoogle fontSize={"24px"} />{" "}
                <div className="w-100 text-center">Continue with Google</div>{" "}
              </div>

              <div className="authBtn gap-2 flex fs-16 text-dark item-center">
                <FaGithub fontSize={"24px"} />{" "}
                <div className="w-100 text-center">Continue with Github</div>{" "}
              </div>
            </div>
            <div className="option">or</div>
            <div className="btn btn-2 fs-16 text-bold text-white">Create account</div>
            <h5 className="fs-12 text-grey text-light">By signing up, you agree to the <span className="text-blue">Terms of Service</span> and <span className="text-blue">Privacy Policy</span>, including Cookie Use.</h5>
          </div>
          <div className="flex authWrapper column gap-2">
            <h4 className="fs-20 text-bold">Already have an account?</h4>
            <div className="authBtn w-100 gap-2 flex fs-16 text-dark item-center">
              <div className="w-100 text-center">Sign in</div>{" "}
            </div>
          </div>
        </div>
      </div>
    </RegsiterStyles>
  )
}

const RegsiterStyles = styled.div`
  width: 100%;
  display:grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  .auth_right {
    justify-content: space-around;
  }
  
  h1 {
    font-size: 70px;
    font-weight: 700;
  }
  .authWrapper {
    width: 55%;
  }
  .btn {
    padding: 1rem 2rem !important;
    opacity:1 !important;
  }
  .authBtn {
    border: 1px solid rgba(0, 0, 0, .08);
    padding: 1rem 4rem;
    border-radius: 40px;
    width: 100%;
    cursor: pointer;
    &:hover {
        background-color: rgb(241, 250, 255);
    }
  }
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
        background-color: rgba(0, 0, 0, 0.08);
        left: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
      &::before {
        width: 45%;
        height: 0.4px;
        content: "";
        background-color: rgba(0, 0, 0, 0.08);
        right: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
    }
`

export default Regsiters