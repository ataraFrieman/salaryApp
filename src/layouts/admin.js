import React from 'react';
import Nav from '../components/nav/nav'
import './admin.css';
/**
 * admin  layout
*/

const AdminLayout = (props) => {
  return (
    <main>
      {/* nav */}
      <Nav />
      <div className="main-container">
        {props.children}
      </div>
    </main>
  );
}

export default AdminLayout;