import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';

const converstionData = [
    {
      id: 1,
      senderMessage: [
        {
          image:
            "/images/johanna-richardson.jpg",
          text: "Hi Dear",
        },
        {
          image:
            "/images/johanna-richardson.jpg",
          text: "How was your day",
        },
      ],
      recieverMessage: [
        {
          image:
            "https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/56a09771086f0077fcfe38f13d80ff28-1639316525935/140c8b5f-0558-4460-8c47-c2ba3af3b736.jpg",
          text: "I am fine",
        },
        {
          image:
            "https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/56a09771086f0077fcfe38f13d80ff28-1639316525935/140c8b5f-0558-4460-8c47-c2ba3af3b736.jpg",
          text: "How was the wekend",
        },
      ],
    },
    {
      id: 1,
      senderMessage: [
        {
          image:
            "/images/johanna-richardson.jpg",
          text: "Hi Dear",
        },
        {
          image:
            "/images/johanna-richardson.jpg",
          text: "How was your day",
        },
      ],
      recieverMessage: [
        {
          image:
            "https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/56a09771086f0077fcfe38f13d80ff28-1639316525935/140c8b5f-0558-4460-8c47-c2ba3af3b736.jpg",
          text: "I am fine",
        },
        {
          image:
            "https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/56a09771086f0077fcfe38f13d80ff28-1639316525935/140c8b5f-0558-4460-8c47-c2ba3af3b736.jpg",
          text: "How was the wekend",
        },
      ],
    },
    {
      id: 1,
      senderMessage: [
        {
          image:
            "/images/johanna-richardson.jpg",
          text: "Hi Dear",
        },
        {
          image:
            "/images/johanna-richardson.jpg",
          text: "How was your day",
        },
      ],
      recieverMessage: [
        {
          image:
            "https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/56a09771086f0077fcfe38f13d80ff28-1639316525935/140c8b5f-0558-4460-8c47-c2ba3af3b736.jpg",
          text: "I am fine",
        },
        {
          image:
            "https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/56a09771086f0077fcfe38f13d80ff28-1639316525935/140c8b5f-0558-4460-8c47-c2ba3af3b736.jpg",
          text: "How was the wekend",
        },
      ],
    },
    {
      id: 1,
      senderMessage: [
        {
          image:
            "/images/johanna-richardson.jpg",
          text: "Hi Dear",
        },
        {
          image:
            "/images/johanna-richardson.jpg",
          text: "How was your day",
        },
      ],
      recieverMessage: [
        {
          image:
            "https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/56a09771086f0077fcfe38f13d80ff28-1639316525935/140c8b5f-0558-4460-8c47-c2ba3af3b736.jpg",
          text: "I am fine",
        },
        {
          image:
            "https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/56a09771086f0077fcfe38f13d80ff28-1639316525935/140c8b5f-0558-4460-8c47-c2ba3af3b736.jpg",
          text: "How was the wekend",
        },
      ],
    },
    {
      id: 1,
      senderMessage: [
        {
          image:
            "/images/johanna-richardson.jpg",
          text: "Hi Dear",
        },
        {
          image:
            "/images/johanna-richardson.jpg",
          text: "How was your day",
        },
      ],
      recieverMessage: [
        {
          image:
            "https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/56a09771086f0077fcfe38f13d80ff28-1639316525935/140c8b5f-0558-4460-8c47-c2ba3af3b736.jpg",
          text: "I am fine",
        },
        {
          image:
            "https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/56a09771086f0077fcfe38f13d80ff28-1639316525935/140c8b5f-0558-4460-8c47-c2ba3af3b736.jpg",
          text: "How was the wekend",
        },
      ],
    },
    {
      id: 1,
      senderMessage: [
        {
          image:
            "/images/johanna-richardson.jpg",
          text: "Hi Dear",
        },
        {
          image:
            "/images/johanna-richardson.jpg",
          text: "How was your day",
        },
      ],
      recieverMessage: [
        {
          image:
            "https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/56a09771086f0077fcfe38f13d80ff28-1639316525935/140c8b5f-0558-4460-8c47-c2ba3af3b736.jpg",
          text: "I am fine",
        },
        {
          image:
            "https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/56a09771086f0077fcfe38f13d80ff28-1639316525935/140c8b5f-0558-4460-8c47-c2ba3af3b736.jpg",
          text: "How was the wekend",
        },
      ],
    },
  ];
  

const ChatContent: React.FC = () => {
    const [message, setMessage] = useState(false)
    return (
        <ChatContentStyles className='flex rightwrapper item-center justify-center'>
            <Link href={'/edidie'} className="top w-90 auto flex column item-center justify-center gap-2">
                <div className="flex column gap-1 item-center justify-center w-100">
                    <div className="image_wrapper">
                        <div className="image_gradient"></div>
                        <img src="/images/raoul-bhavnani.jpg" alt="" className="avatar_profile" />
                    </div>
                    <h4 className="fs-20 text-center text-bold text-dark">Mohammed Asamin
                        <span className="block fs-16 text-grey text-light">@SINF-163</span>
                    </h4>
                </div>
                <h4 className="w-85 auto text-center fs-16 text-light text-dark">
                    Software Engineer @ NetApp | Tweets about Tech, AI, productivity tools | Helping you to get into Tech | Let's connect.
                </h4>
                <h4 className="w-85 auto text-center fs-14 text-light text-grey">

                    Joined March 2017
                    ·
                    4,127 Followers
                </h4>
            </Link>
        </ChatContentStyles>
    )
}

const ChatContentStyles = styled.div`
      .image_wrapper {
      width:10rem;
      height:10rem;
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
      background:rgba(0,0,0,1) !important;
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
    .top {
    padding:5rem 1.5rem;

        &:hover {
        background-color: var(--grey-2);
    }
    }
  `

export default ChatContent