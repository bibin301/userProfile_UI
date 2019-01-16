import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";

class ViewProfile extends React.Component {

  render() {
      const userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
  return (
    
      <div className="container">
        <h2 style={{textAlign:"center"}}> View User Profile</h2>
     
            <div className="imh">
                <img src={userInfo.image}  alt=""/>
            </div>
            
            <div className="editDiv">
                <input type="text" name="firstname" value={userInfo.name} disabled="true"/>
            </div>
            <div className="editDiv">
                <input type="text" name="firstname" value={userInfo.designation} disabled="true"/>
            </div>

            <div className="editDiv">
                <input type="text" name="firstname" value={userInfo.email} disabled="true"/>
            </div>
            <div className="editDiv">
                <NavLink
                    to={"/UserProfile"}
                    href=""
                    className="btn-default">
                    Back
                </NavLink>
            </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    editList: state.commonReducer.editList,
  
});

export default connect(mapStateToProps, null)(ViewProfile);