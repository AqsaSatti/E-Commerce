import React, { useEffect } from 'react';
import { MainSection } from '../../components/MainSection';
import { LogoSection } from '../../components/LogosSection';
import { DiscoverPiks } from '../../components/DiscoverPiks';
import { DesignerSection } from '../../components/DesignersSection/DesignerSection';


export const Home: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);
    return (
        <div className='w-full overflow-x-hidden '>
            <MainSection /> 
            <LogoSection/>
            <DiscoverPiks className='padding-home'/>
            <DesignerSection className='padding-home' />
        </div>
    );
};