/*var React=require('react');
var Link=require('react-router').Link;*/
import React from 'react'
import { Link } from 'react-router'
import $ from "jquery"

export default React.createClass({

    render:function(){

        return(
<div>
    <div className="header">
    <div className="logo">
        <Link to="/"><img src="images/luyue.png" width="231" height="60"></img></Link>
    </div>
    <ul className="nav">
        <li>Blog</li>
        <li>Works</li>
        <li>Contact</li>
    </ul>
</div>
    {this.props.children}
</div>
        )
    }
})