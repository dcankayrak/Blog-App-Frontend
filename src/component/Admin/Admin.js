import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Admin extends Component {
  render() {
    return (
      <div>
        <div class='wrapper'>
            <div class='menu-container'>
                <ul>
                    <li class='menu-item'><Link to='/admin/'>Home</Link></li>
                    <li class='menu-item'><Link to='/admin/posts'>Posts</Link></li>
                    <li class='menu-item'><Link to='/admin/posts'>Comments</Link></li>
                </ul>
            </div>
        </div>
      </div>
    )
  }
}
