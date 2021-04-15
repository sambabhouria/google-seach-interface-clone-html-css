import React, {useState} from "react";
import classNames from 'classnames'
import 'material-design-icons/iconfont/material-icons.css';
import './google.css';


export const Google = () => {

  return (
   <>
{/* <!-- Header Starts --> */}
    <div class="header">
      <div class="header__left">
        <a href="/">About</a>
        <a href="/">Store</a>
      </div>
      <div class="header__right">
        <a href="/">Gmail</a>
        <a href="/">Images</a>
        <span class="material-icons header__apps"> apps </span>
        <span class="material-icons"> account_circle </span>
      </div>
    </div>
    {/* <!-- Header Ends --> */}

    {/* <!-- Main Body Starts --> */}

    <div class="mainBody">
        <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="Google Logo"
        />
    {/* <!-- Search Starts --> */}

    <div class="search">

       <div class="search__input">
          <span class="material-icons"> search </span>
          <input type="text" />
          <span class="material-icons"> mic </span>
        </div>

        <div class="search__buttons">
          <button>Google Search</button>
          <button>I'm Feeling Lucky</button>
        </div>
    </div>

    {/* <!-- Search Ends --> */}


    </div>
    {/* <!-- Main Body Ends --> */}


   </>
  )
}
