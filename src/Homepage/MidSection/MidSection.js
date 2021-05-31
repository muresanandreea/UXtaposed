import React, {useState} from 'react';
import {MidSectionWrapper,DesignSection,DesignImage,SectionText,
    DevSection,DevImage, MobileDesignSection, MobileDevSection, MobileDesignDevSection,
    MobileDesignButton, MobileDevButton, MobileDesignText, MobileDevText, Buttons, MobileDesignImage,
    MobileDevImage, WhiteCircle} from './MidSection.style';

export const MidSection = () => {
    const [isSelected, setIsSelected] = useState(true);
    console.log(isSelected);
    return (
        <MidSectionWrapper>
            <DesignSection>
                <DesignImage/>
                <div>
                    <SectionText>
                        <h3>Design</h3>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </SectionText>
                </div>
            </DesignSection>
            <DevSection>
                <div>

                    <SectionText>
                        <h3>Development</h3>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </SectionText>
                </div>
                <DevImage/>
            </DevSection>
            <MobileDesignDevSection>
                <Buttons>
                    <MobileDesignButton isSelected={isSelected} onClick={()=>setIsSelected(true)}>
                        <MobileDesignText isSelected={isSelected}>Design</MobileDesignText>
                        <WhiteCircle isSelected={isSelected}/>
                    </MobileDesignButton>
                    <MobileDevButton isSelected={!isSelected} onClick={()=>setIsSelected(false)}>
                        <WhiteCircle/>
                        <MobileDevText isSelected={!isSelected}>Development</MobileDevText>
                    </MobileDevButton></Buttons>
                {isSelected? (<MobileDesignSection><MobileDesignImage/>Design
                    </MobileDesignSection>) :
                    (<MobileDevSection>Dev<MobileDevImage/></MobileDevSection> )}
            </MobileDesignDevSection>
        </MidSectionWrapper>
    );
}