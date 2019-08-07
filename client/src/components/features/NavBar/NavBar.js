import React from 'react';
import { Link } from 'react-router-dom';
// import AddPost from '../../posts/AddPost';
// import SinglePost from '../Posts/SinglePost';
import Logo from '../../common/Logo/Logo';
import MainMenu from '../../layout/MainMenu/MainMenu';
import './NavBar.scss';

const { links } = this.state;

class NavBar extends React.Component {

    state = {
    links: [
      { path: '/', title: 'Home' },
      { path: '/posts/new', title: 'Add post' },
      { path: '/posts', title: 'Posts' },
      { path: '/contact', title: 'Contact' },
    ],
  }

  render() {
    return (
      <div className="navbar-container">
        <nav className="navbar">
          <Logo />
          <MainMenu links={links} />
        </nav>
      </div>
    );
  }
}

export default NavBar;