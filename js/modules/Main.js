/*var React=require('react');
var Link=require('react-router').Link;*/
import React from 'react'
import { Link } from 'react-router'
import $ from "jquery";

export default React.createClass({
    getInitialState: function() {
        return {
            error: null,
            loading:true,
            data: null,
            count:1,
            arr:[],
            style:'block'
        };
    },
    componentDidMount:function() {
        window.addEventListener('scroll', this.handleScroll);
        console.log("listener");
        var count=this.state.count;
        console.log("Did"+count);
        var url='php/read.php?count='+count;
        var $checkSessionServer=$.getJSON(url);
        $checkSessionServer.then(
            value => this.setState({loading:false,arr: this.state.arr.concat(value)}),
            //value => this.setState({loading:false,arr: this.state.arr.concat(value)}),
            error => this.setState({loading:false,error: error}));
        return $checkSessionServer;
    },

    handleScroll:function(){
        var scrollTop=$(window).scrollTop();
        var clientHeight=$(window).height();
        var documentHeight=$(document).height();
        if(scrollTop+clientHeight>documentHeight-100&&this.state.count<2){
            this.setState({count:this.state.count+5});
            console.log("changeto"+this.state.count);
            var count=this.state.count;
            console.log("Will"+count);
            var url='php/read.php?count='+count;
            var $checkSessionServer=$.getJSON(url);
            $checkSessionServer.then(
                value => this.setState({style:'none',arr: this.state.arr.concat(value)}),
                //value => this.setState({loading:false,arr: this.state.arr.concat(value)}),
                error => this.setState({style:'none',error: error}));
            return $checkSessionServer;
        }
    },

    /*shouldComponentUpdate:function() {
        var count=this.state.count;
        console.log("Will"+count);
        var url='php/main.php?count='+count;
        var $checkSessionServer=$.getJSON(url);
        $checkSessionServer.then(
            value => this.setState({loading:false,arr: this.state.arr.concat(value)}),
            //value => this.setState({loading:false,arr: this.state.arr.concat(value)}),
            error => this.setState({loading:false,error: error}));
        return $checkSessionServer;
    },*/


    render:function(){
        if (this.state.loading) {
            return(
                <div className="main">
                    <div className="footer">
                        <div className="spinner" >
                            <i className="fa fa-spinner fa-spin fa-2x"></i>
                        </div>
                    </div>
                </div>
            )
        }
        else if (this.state.error !== null) {
            return <span>Error: {this.state.error.message}</span>;
        }else{
            //arr=arr.concat(this.state.data);
            var abstracts=this.state.arr.map(function(obj,index){
                return(
                    <div className="abstract" key={index}>
                        <div className="info"><span className="time">{obj.time}</span>    <i className="fa fa-tags"></i> <span className="span-name">{obj.tags}</span></div>
                        <Link to={obj.link}><h1>{obj.title}</h1></Link>
                        <div className="article">
                            <p>{obj.arti}<Link to={obj.link}>More</Link></p>
                        </div>
                    </div>
                )
            });
            return(
                <div className="main">{abstracts}
                    <div className="footer" style={{display:this.state.style}}>
                        <div className="spinner" >
                            <i className="fa fa-spinner fa-spin fa-2x"></i>
                        </div>
                    </div>
                </div>
            )
        }
    }
})
