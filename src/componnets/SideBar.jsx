import React from 'react'
import { Link } from 'react-router-dom';
import "./sidebar.css";


function SideBar() {
    return (

        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <ul className="sidebarList">
                        <Link to="/" className='link'>
                            <li className="sidebarListItem active">
                                Profile
                            </li>
                        </Link>
                        <Link to="/post" className='link'>
                            <li className="sidebarListItem">
                                Post
                            </li>
                        </Link>
                        <Link to="/gallery" className='link'>
                            <li className="sidebarListItem">
                                Gallery
                            </li>
                        </Link>
                        <Link to="/todo" className='link'>
                            <li className="sidebarListItem">
                                Todo
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default SideBar