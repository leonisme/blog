import React from 'react'
import { Link } from 'react-router'
import $ from "jquery";

export default React.createClass({
    getInitialState: function() {
        return {
            error: null,
            loading:true,
            data: null
        };
    },
    componentDidMount:function() {
        var count=this.props.params.count;
        console.log("Did"+count);
        var url='php/article.php?count='+count;
        var $checkSessionServer=$.getJSON(url);
        $checkSessionServer.then(
            value => this.setState({loading:false,data: value}),
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


                    var article=<div className="abstract">
                        <div className="info"><span className="time">{this.state.data.time}</span> <i className="fa fa-tags"></i> <span className="span-name">{this.state.data.tags}</span></div>
                        <h1>{this.state.data.title}</h1>
                        <div className="article">
                            <p>{this.state.data.article}</p>
                        </div>
                    </div>

            return(
                <div className="main">{article}</div>
            )
        }
    }
})
