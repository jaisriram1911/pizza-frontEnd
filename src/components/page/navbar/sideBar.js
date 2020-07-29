import React from 'react';

import './sideBar.css'

const SideBar = () =>{

  const open = () =>{
    document.getElementById('mySidebar').style.display='block';
    document.getElementById('myOverlay').style.display='block'
  }

  const close = () =>{
    document.getElementById('mySidebar').style.display='none';
    document.getElementById('myOverlay').style.display='none'
  }

  return(
    <div className="w3-sidebar w3-bar-block w3-animate-left" style="display:none;z-index:5" id="mySidebar">
      <button className="w3-bar-item w3-button w3-large" onclick={close()}>Close &times;</button>
      <button class="w3-button w3-white w3-xxlarge" onclick={open()}>&#9776;</button>
      <div class="w3-overlay w3-animate-opacity" onclick={close()} style={{cursor: pointer}} id="myOverlay"></div>
      <a href="#" class="w3-bar-item w3-button">Link 1</a>
  <a href="#" class="w3-bar-item w3-button">Link 2</a>
  <a href="#" class="w3-bar-item w3-button">Link 3</a>
  </div>
  )
}

export default SideBar;