import React from 'react';
import { MainSection } from './MainSection';
import { LogoSection } from './Logo';
import { DesignerSection } from './DesignersSection';
import { DiscoverPiks } from './DiscoverPiks';

export const Home: React.FC = () => {
    return (
        <div className='w-full overflow-x-hidden '>
            <MainSection /> 
            <LogoSection/>
            <DiscoverPiks className='padding-home'/>
            <DesignerSection className='padding-home' />
        </div>
    );
};