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
            arr:[]
        };
    },
    componentDidMount:function() {
        var count=this.props.count.count;
        console.log("Did"+count);
        var url='php/main.php?count='+count;
        var $checkSessionServer=$.getJSON(url);
        $checkSessionServer.then(
            value => this.setState({loading:false,arr: this.state.arr.concat(value)}),
            //value => this.setState({loading:false,arr: this.state.arr.concat(value)}),
            error => this.setState({loading:false,error: error}));
        return $checkSessionServer;
    },

    componentWillReceiveProps:function() {
        var count=this.props.count.count+5;
        console.log("Will"+count);
        var url='php/main.php?count='+count;
        var $checkSessionServer=$.getJSON(url);
        $checkSessionServer.then(
            value => this.setState({loading:false,arr: this.state.arr.concat(value)}),
            //value => this.setState({loading:false,arr: this.state.arr.concat(value)}),
            error => this.setState({loading:false,error: error}));
        return $checkSessionServer;
    },


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
                        <div className="info"><span className="time">{obj.time}</span> <i className="fa fa-tags"></i> <span className="span-name">{obj.tags}</span></div>
                        <h1>{obj.title}</h1>
                        <div className="article">
                            <p>{obj.arti}<Link to={obj.link}>查看全文</Link></p>
                        </div>
                    </div>
                )
            });
            return(
                <div className="main">{abstracts}</div>
            )
        }
    }
})
