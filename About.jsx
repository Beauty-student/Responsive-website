import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState})=> {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt=""  className='play-icon' onClick={()=>
              {setPlayState(true)}}
            
             />


            
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nuturing tomorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores dignissimos a molestias in repudiandae, at explicabo quidem. Modi fugiat cumque inventore dolor doloribus! Cupiditate, ut possimus provident, recusandae modi illum veritatis tenetur quo ab obcaecati harum, deserunt minima sint? Sed deleniti doloremque natus ullam sit corporis vitae delectus temporibus vel provident soluta, sequi nisi perferendis, sint id quasi laborum, totam voluptates. </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae autem esse consectetur illum dolorem, ut cumque necessitatibus animi recusandae accusamus amet aspernatur nam, facere cupiditate, explicabo ab maiores in doloribus nisi sunt ipsa quaerat doloremque alias fugit. Ducimus, ipsa iste est tempora facilis esse repudiandae in fugiat magnam, tempore hic nesciunt iure maxime ad deserunt sint blanditiis odit consequuntur temporibus error recusandae .</p>



        </div>
    </div>
  )
}

export default About