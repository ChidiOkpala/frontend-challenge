import React from 'react';

import './home.style.css';

// Bootstrap core CSS
import "../assets/bootstrap/css/bootstrap.min.css";


import Friends from '../components/friends-list/friends-list.component';
import MessageBox from '../components/message-box/message-box.component';

import TextArea from '../components/text-area/text-area.component';

class HomePage extends React.Component {

    componentDidMount(){
        document.getElementById('menu-toggle').addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('wrapper').classList.toggle('toggled');
        });
    }
    render(){

        return(
            <div className="d-flex" id="wrapper">

                {/* Sidebar  */}
                <div className="bg-light border-right" id="sidebar-wrapper">
                    <div className="sidebar-heading"> FRIENDS</div>
                    {/* friends listing */}
                    <Friends/>

                </div>
                {/* /#sidebar-wrapper  */}

                {/* Page Content */}
                <div id="page-content-wrapper">

                    <nav className="navbar navbar-light bg-light border-bottom">
                        <button className="btn btn-primary" id="menu-toggle">Toggle sidebar</button>

                        <div className="">
                            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <div className="roundbg"></div>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <div className="container-fluid w-100 d-flex flex-column px-2 ">
                        {/* message boxes */}
                        <div className='message-area mt-auto py-3'>
                            <MessageBox/>
                        </div>


                        <div className="mt-auto w-100">
                            <TextArea/>
                        </div>
                    </div>
                </div>
                {/* page-content-wrapper */}
                
            </div>
        )
    }
};

export default HomePage;
