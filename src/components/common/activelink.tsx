// components/ActiveLink.js
import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';

type linkType = {
    hrefs: string,
    children?: React.ReactNode,
}

const ActiveLink: React.FC<linkType> = ({ hrefs, children }) => {
    const router = useRouter();
    const isActive = router.asPath === hrefs;
    console.log(router.asPath,hrefs)

    return (
        <Link prefetch href={hrefs} className=" text-dark flex item-center gap-2 text-light" legacyBehavior>
            <a className={isActive ? 'activeLink text-dark flex item-center gap-2 text-light' : 'text-dark flex item-center gap-2 text-light'}>{children}</a>
        </Link>
    );
}

export default ActiveLink;
