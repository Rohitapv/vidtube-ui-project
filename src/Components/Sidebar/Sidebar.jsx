import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sortcut-links">
                <div className="sidelinks">
                    <img src={home} alt=""/><p>Home</p>
                </div>
                <div className="sidelinks">
                    <img src={game_icon} alt=""/><p>game_icon</p>
                </div>
                <div className="sidelinks">
                    <img src={automobiles} alt=""/><p>automobiles</p>
                </div>
                <div className="sidelinks">
                    <img src={sports} alt=""/><p>sports</p>
                </div>
                <div className="sidelinks">
                    <img src={entertainment} alt=""/><p>entertainment</p>
                </div>
                <div className="sidelinks">
                    <img src={tech} alt=""/><p>tech</p>
                </div>
                <div className="sidelinks">
                    <img src={music} alt=""/><p>music</p>
                </div>
                <div className="sidelinks">
                    <img src={blogs} alt=""/><p>blogs</p>
                </div>
                <div className="sidelinks">
                    <img src={news} alt=""/><p>news</p>
                </div>
                <hr/>
            </div>
        </div >
    )
}

export default Sidebar
