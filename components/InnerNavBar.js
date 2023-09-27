import React from 'react'
import Link from 'next/link'

export default function InnerNavBar() {
    return (
        <>
            <div className="col-sm-10 text-center">
                <ul>
                    <li className="litag"><Link href="/resources/infographics/automation-testing/">Automation Testing</Link></li>
                    <li className="litag"><Link href="/resources/infographics/game-testing/">Game Testing</Link></li>
                    <li className="litag"> <Link href="/resources/infographics/mobile-app-testing/">Mobile App Testing</Link></li>
                    <li className="nav-item dropdown litag">
                        <div className="nav-link dropdown-toggle"
                            href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Category
                        </div>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" href="/resources/infographics/automation-testing/">Automation testing</Link></li>

                            <li> <Link className="dropdown-item" href="/resources/infographics/game-testing">Game Testing</Link></li>

                            <li>
                                <Link className="dropdown-item" href="/resources/infographics/mobile-app-testing/">Mobile App Testing</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" href="/resource/top-10-performance-testing-tools/">Performace Testing</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" href="/resources/infographics/security-testing/">Security Testing</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" href="/resources/infographics/web-app-testing/">Web App Testing</Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" href="/resources/infographics/test-management/">Test Management</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    )
}
