import React, { Component } from 'react';
import wereok from '../images/pagetitles/wereok.png';
import weareok1 from '../images/weareok/weareok1.jpg';
import weareok2 from '../images/weareok/weareok2.jpg';
import weareok3 from '../images/weareok/weareok3.jpg';
import weareok4 from '../images/weareok/weareok4.jpg';
import hr2 from '../images/hr2.png';
import hr3 from '../images/hr3.png';

class Weareok extends Component {
    render() {  
        return (
            <div className='aboutBody fades'>
                <img src={wereok} alt='We&#8217re OK' className='pageTitle'/>
                <br/><br/>
                <div className='slider'>
									<div className='slide1'>
											<img src={weareok1} alt='about' className='aboutPic'/>
											<p style={{fontSize: '10px', marginTop: '2px', marginBottom:'20px'}}>Photo credit: Ditz Fejer</p>
									</div>
									<div className='slide2'>
											<img src={weareok2} alt='about' className='aboutPic'/>
											<p style={{fontSize: '10px', marginTop: '2px', marginBottom:'20px'}}>Photo credit: Nature Theater of Oklahoma</p>
									</div>
									<div className='slide3'>
											<img src={weareok3} alt='about' className='aboutPic'/>
											<p style={{fontSize: '10px', marginTop: '2px', marginBottom:'20px'}}>Photo credit: Andrej Lamut</p>
									</div>
									<div className='slide4'>
											<img src={weareok4} alt='about' className='aboutPic'/>
											<p style={{fontSize: '10px', marginTop: '2px', marginBottom:'20px'}}>Photo credit: Nature Theater of Oklahoma</p>
									</div>
                </div>
                <p>Nature Theater of Oklahoma is an award-winning New York art and performance enterprise under the direction of Pavol Liska and Kelly Copper.  With each new project, we attempt to set an impossible challenge for ourselves, the audience, and our collaborators -- working from inside the codes and confines of established genres and exploding them. No two projects are formally the same, but the work is always full of humor, earnestness, rigor, and the audience plays an essential role -- whether as spectators or - just as often - as participants in the work.</p>
                <p>Using readymade material, found space, gifted properties, cosmic accident, extreme formal manipulation and plain hard work -- Nature Theater of Oklahoma makes art to affect a shift in the perception of everyday reality that extends beyond the site of performance and into the world in which we live.</p>
                <div className='aboutHrs'>
                    <img src={hr3} alt='----' className='hr3' />
                    <img src={hr2} alt='----' className='hr2' />
                </div>
                <div className='pressQuote villagevoice'>
                 <p>&quot;Nature Theater of Oklahoma stands at the frontier...&quot;</p> 
                 <p style={{marginLeft: '40%'}}>-The Village VOICE</p> 
                </div>
                <div className='pressQuote nyt'>
                 <p>&quot;One of the most innovative theater companies in New York... Nature Theater seeks to unearth something that approaches beauty, or at least a fresh, strange kind of entertainment.&quot;</p> 
                 <p style={{marginLeft: '40%'}}>-The New York Times</p> 
                </div>
                <div className='pressQuote villagevoice'>
                 <p>&quot;Sprawling, bizarre, trivial, profound, holy, idiotic and quite resistant to criticism... as messy and capacious as life itself.&quot;</p> 
                 <p style={{marginLeft: '50%'}}>-Time Out New York</p> 
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        )
    }
}

export default Weareok;
