import React, { useEffect, useState } from 'react'
import './Nav.css'
function Nav() {

    const [show,setShow]=useState(false)

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>600){
                setShow(true);
            }else{
                setShow(false);
            }
        })
    })
    console.log(show);


  return (
    <div>
        <div className={`${show && 'nav-black'} nav`}>
            <img width={"150px"} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png" alt="" />
        </div>
    </div>
  )
}

export default Nav