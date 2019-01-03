import React, {Component} from 'react';
import Header from '../Header/Header';
import iceCream from '../../media/ifunny-ice-cream.png';
import './Home.css';

class Home extends Component{
    constructor(){
        super();
        this.state = {
            trendingTags: ['spicy', 'comic', 'animals', 'birdbox', 'games', 'resolutions2019', 'chungus', 'smoothie', 'video', 'ifunnyclones', 'ifunnycalifornia', 'tagtuesday', 'wholesomewednesday', 'firstfeat', 'smolboi', 'memerewind2018']
        }
    }

    render(){
        let trending = this.state.trendingTags.map(tag => {
            return <div>
                <button className='main-page-trending-tag-button'>#{tag}</button>
            </div>
        })
        return (
            <div>
                <div className='main-page-parent-flex'>
                    <div className='main-page-categories'>
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
                    <div className='main-page-meme-holder'>
                        <p className='main-page-mobile-countdown'>the next fun train arrives in XXXX</p>
                        <img src={'https://img.ifcdn.com/images/4d184f5d1fad0f0ea79a95487c558ff6dff10ca56e4149ddb4ec3ea56c34ee62_1.jpg'} className='placeholder-meme'/>
                    </div>
                    <div className='main-page-right-side-bar'>
                        <div>
                            <img src={iceCream} />
                            <div className='home-page-app-links'>
                                <div>App Store</div>
                                <div>Google Play</div>
                                <div>Amazon</div>
                            </div>
                        </div>
                        <div>
                            <p className='main-page-trending-title'>trending tags</p>
                            <div className='main-page-trending-tag'>
                                {trending}
                            </div>
                        </div>
                        <hr />
                        <div>follow iFunny</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;