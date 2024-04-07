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
const Sidebar = ({sidebar} ) => {
    return (
        <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
            <div className="shortcut-links">
                <div className="sidelinks">
                    <img src={home} alt="" /><p>Home</p>
                </div>
                <div className="sidelinks">
                    <img src={game_icon} alt="" /><p>game_icon</p>
                </div>
                <div className="sidelinks">
                    <img src={automobiles} alt="" /><p>automobiles</p>
                </div>
                <div className="sidelinks">
                    <img src={sports} alt="" /><p>sports</p>
                </div>
                <div className="sidelinks">
                    <img src={entertainment} alt="" /><p>entertainment</p>
                </div>
                <div className="sidelinks">
                    <img src={tech} alt="" /><p>tech</p>
                </div>
                <div className="sidelinks">
                    <img src={music} alt="" /><p>music</p>
                </div>
                <div className="sidelinks">
                    <img src={blogs} alt="" /><p>blogs</p>
                </div>
                <div className="sidelinks">
                    <img src={news} alt="" /><p>news</p>
                </div>
                <hr />
                
            </div>
            <div className="subscribed-list">
                    <h3>Subscribed</h3>
                    <div className="sidelinks">
                        <img src={jack} alt="" /><p>sdggmshc</p>
                    </div>
                    <div className="sidelinks">
                        <img src={simon} alt="" /><p>odggmshc</p>
                    </div>
                    <div className="sidelinks">
                        <img src={tom} alt="" /><p>ddggmshc</p>
                    </div>
                    <div className="sidelinks">
                        <img src={megan} alt="" /><p>okggmshc</p>
                    </div>
                    <div className="sidelinks">
                        <img src={cameron} alt="" /><p>sdfgfgggmshc</p>
                    </div>
                </div>
        </div >
    )
}

export default Sidebar
