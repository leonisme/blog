/*var React=require('react');
var render=require('react-dom').render;
var Router=require('react-router').Router;
var Route=require('react-router').Route;promise={pro}
var hashHistory=require('react-router').hashHistory;
var IndexRoute=require('react-router').IndexRoute;
var App=require('./modules/App');
var Main=require('./modules/Main');*/
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute} from 'react-router'
import $ from "jquery";
import App from './modules/App'
import Main from './modules/Main'
import Article from './modules/Article'

var input = '# This is a header\n\nAnd this is a paragraph';
render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Main}/>
            <Route path="/article/:count" component={Article}>
                </Route>
        </Route>
    </Router>
), document.getElementById('container'))

//返回顶部
$(window).scroll(function(){
    var scrollTop=$(window).scrollTop();
    var clientHeight=$(window).height();
    if(scrollTop>clientHeight){
        $('.up-button').css('display','block');
    }else {
        $('.up-button').css('display','none');
    }
});
$('.up-button').click(function(){
    var scrollTop=$(window).scrollTop();
    var speed=Math.ceil(scrollTop/20);
    var timer=setInterval(function(){
        scrollTop-=speed;
        $(window).scrollTop(scrollTop);
        if(scrollTop<=0){
            clearInterval(timer);
        }
    },25)
})