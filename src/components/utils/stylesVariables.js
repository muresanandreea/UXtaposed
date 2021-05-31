export const sizes = {
    mobile: 509,   //0-599
    mobileLandscape: 767,   //600-767
    tablet: 1024,   //768-1024
    laptop: 1440,   //1025-1440
    desktop: 1599,   //1441-1599   //1600+ - large destop
};

export const media = {
    mobile: `@media (max-width: ${sizes.mobile}px)`,
    mobileLandscape: `@media (max-width: ${sizes.mobileLandscape}px)`,
    mobileLandscapeOnly: `@media (max-width: ${sizes.mobile+1}px) and (max-width:${sizes.mobileLandscape}px)`,
    mobileAndTablet: `@media (max-width: ${sizes.tablet}px)`,
    tablet: `@media (max-width: ${sizes.mobileLandscape + 1}px)`,
    tabletOnly: `@media (max-width: ${sizes.mobileLandscape + 1}px) and (max-width: ${sizes.tablet}px)`,
    laptop: `@media (max-width: ${sizes.tablet + 1}px) and (max-width: ${sizes.laptop}px)`,
    desktop: `@media (max-width: ${sizes.laptop}px)`,
    desktopLarge: `@media (max-width: ${sizes.desktop + 1}px)`,
}