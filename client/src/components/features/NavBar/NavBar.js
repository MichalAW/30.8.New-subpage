import React from 'react';
import { Link } from 'react-router-dom';
// import AddPost from '../../posts/AddPost';
// import SinglePost from '../Posts/SinglePost';

class NavBar extends React.Component {

  render() {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/posts'>Posts</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/posts/SinglePost'>Contact</Link>
            <Link to='/posts/AddPost'>Contact</Link>
        </div>
    );
  }

}

export default NavBar;