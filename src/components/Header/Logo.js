import { LogoDiv } from "./HeaderStyles";

const Logo = () => {
  return (
    <LogoDiv>
      <svg
        width="62"
        height="72"
        viewBox="0 0 62 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <path
            d="M21.1902 47.3067V57C31.9666 57 41.1382 50.0767 44.5636 40.4034C45.4936 37.7771 46 34.9481 46 32C46 29.1303 45.5202 26.3735 44.6369 23.8067C41.2706 14.0237 32.0444 7 21.1902 7V16.6933M21.1902 47.3067C26.4997 47.3067 31.1729 44.5617 33.8886 40.4034C35.4638 37.9912 36.3804 35.1035 36.3804 32C36.3804 32 33.8886 40.4034 21.1902 32C8.49185 23.5966 6 32 6 32C6 28.9861 6.86443 26.1757 8.35708 23.8067C11.0512 19.531 15.7918 16.6933 21.1902 16.6933M21.1902 47.3067C16.9955 47.3067 13.198 45.5934 10.4491 42.8234M21.1902 16.6933C25.3849 16.6933 29.1824 18.4066 31.9313 21.1766"
            stroke="white"
            strokeWidth="2"
            shapeRendering="auto"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="0"
            width="62"
            height="72"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="5" dy="4" />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.219722 0 0 0 0 0.470833 0 0 0 0 0.410567 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </LogoDiv>
  );
};

export default Logo;
