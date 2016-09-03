/*var React=require('react');
var Link=require('react-router').Link;*/
import React from 'react'
import { Link } from 'react-router'
import $ from "jquery"

export default React.createClass({

getInitialState:function(){
    return({
        count:1
    })
},
    componentDidMount: function () {
        window.addEventListener('scroll', this.handleScroll);
    },

    handleScroll:function(){
        var scrollTop=$(window).scrollTop();
        var clientHeight=$(window).height();
        var documentHeight=$(document).height();
        if(scrollTop+clientHeight>documentHeight-100&&this.state.count<2){
            this.setState({count:this.state.count+5});
            console.log("changeto"+this.state.count);
        }
    },

    /*handleClick:function(){
        this.setState({count:1,arr:[]});
    },*/

    render:function(){
        var count=this.state.count;
        var arr=this.state.arr;
        var children = React.Children.map(this.props.children, function (child) {
            return React.cloneElement(child, {
                count:{count}
            })
        })
        return(
<div>
    <div className="header">
    <div className="logo">
        <a href="/luyue/"><img src="images/luyue.png" width="231" height="60"></img></a>
    </div>
    <ul className="nav">
        <li>Blog</li>
        <li>Works</li>
        <li>Contact</li>
    </ul>
</div>
    {children}
</div>
        )
    }
})