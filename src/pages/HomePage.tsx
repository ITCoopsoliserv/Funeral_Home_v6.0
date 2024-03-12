// src/pages/HomePage.tsx
import '../styles/Home.css';
import HomePageSlider from '../components/HomePageSlider';
import HomePageSlideMessage from '../components/HomePageSlideMessage';
import HomeSlideSectionA from '../components/HomeSlideSectionA';
import HomeSlideSectionB from '../components/HomeSlideSectionB';
import HomeSlideAliados from '../components/HomeSlideAliados';
import Meta from '../components/Meta';
import HomeSlideServices from '../components/HomeSlideServices';

const HomePage = () => {
    return (


        <div className=''>
            <Meta title={'Inicio'} />

            <HomePageSlider />

            <div className='bodyHomePage container-xxxl '>

                <HomePageSlideMessage />
                <HomeSlideSectionA />
                {/*<HomeSlideAliados /> */}
                <HomeSlideServices />
                <HomeSlideSectionB />
                <div className='py-5'>
                    <h1>Este es el homepage</h1>
                </div>
                <div className='py-5'>
                    <h1>Este es el homepage</h1>
                </div>
                <div className='py-5'>
                    <h1>Este es el homepage</h1>
                </div>
                <div className='py-5'>
                    <h1>Este es el homepage</h1>
                </div>
                <div className='py-5'>
                    <h1>Este es el homepage</h1>
                </div>
            </div>
        </div>
    )
};

export default HomePage;