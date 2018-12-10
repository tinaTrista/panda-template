import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import './style.css'

const Apple = ()=>(
  <div className="apple">
      <svg height="320" width="320" className="like" onClick={document.body.classList.toggle('liked')}>
  	    <path className="path" d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90" fill="white" />
      </svg>
      <div className="dot dot-1"></div>
      <div className="dot dot-2"></div>
      <div className="dot dot-3"></div>
      <div className="dot dot-4"></div>
      <div className="dot dot-5"></div>
      <div className="dot dot-6"></div>
      <div className="dot dot-7"></div>
      <div className="dot dot-8"></div>

      <svg height="40" width="40" viewBox="0 0 320 320" className="h h-1"><path className="path" d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"/></svg>
      <svg height="40" width="40" viewBox="0 0 320 320" className="h h-2"><path className="path" d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"/></svg>
      <svg height="40" width="40" viewBox="0 0 320 320" className="h h-3"><path className="path" d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"/></svg>
      <svg height="40" width="40" viewBox="0 0 320 320" className="h h-4"><path className="path" d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"/></svg>

      <svg height="40" width="40" viewBox="0 0 320 320" className="h h-5"><path className="path" d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"/></svg>
      <svg height="40" width="40" viewBox="0 0 320 320" className="h h-6"><path className="path" d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"/></svg>
      <svg height="40" width="40" viewBox="0 0 320 320" className="h h-7"><path className="path" d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"/></svg>
      <svg height="40" width="40" viewBox="0 0 320 320" className="h h-8"><path className="path" d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"/></svg>

      <svg height="110" width="110" viewBox="0 0 320 320" className="fly fly-1"><path className="path" d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"/></svg>
      <svg height="110" width="110" viewBox="0 0 320 320" className="fly fly-2"><path className="path" d="M 160 145 c 15 -90 170 -20 0 90 m 0 -90 c -15 -90 -170 -20 0 90"/></svg>

  </div>
)
export default withRouter(Apple, 'Apple');
