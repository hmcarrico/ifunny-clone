import React, {Component} from 'react';
import Header from '../Header/Header';
import './Home.css';

class Home extends Component{
    render(){
        return (
            <div>
                <Header />
                <div className='main-page-parent-flex'>
                    <div>
                        <p style={{color: 'rgb(255,207,0)', marginTop: 0}}>featured</p>
                        <p>Animals & Nature</p>
                        <p>Anime & Manga</p>
                        <p>Art & Creative</p>
                        <p>Cars</p>
                        <p>Celebrities</p>
                        <p>Gaming</p>
                        <p>Girls</p>
                        <p>Internet</p>
                        <p>Memes</p>
                        <p>Movies</p>
                        <p>Other</p>
                        <p>Politics</p>
                        <p>Science & Tech</p>
                        <p>Sports</p>
                        <p>TV shows</p>
                    </div>
                    <div>
                        <img src={'https://img.ifcdn.com/images/ace0f6f8edc0635194886587037d7f0b893b374fce63aa8826e6c3b309f36607_1.jpg'} />
                    </div>
                    <div>
                        <div>TOUCH TO UNLOCK FUN</div>
                        <div>TRENDING TAGS</div>
                        <div>FOLLOW iFunny</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;