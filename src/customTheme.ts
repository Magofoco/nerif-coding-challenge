import { extendTheme } from "@chakra-ui/react";

const bgAnimationKeyframes = `
  @keyframes bgAnimation {
    0% { background-color: rgba(255, 0, 0, 0.7); } 
    25% { background-color: rgba(0, 255, 0, 0.7); } 
    50% { background-color: rgba(0, 0, 255, 0.7); } 
    75% { background-color: rgba(204, 204, 0, 0.7); }
    100% { background-color: rgba(255, 0, 255, 0.7); }
  }
`;

const styleTag = document.createElement("style");
styleTag.innerHTML = bgAnimationKeyframes;
document.head.appendChild(styleTag);

const customTheme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#EFF8FF",
      },
    },
  },
  components: {
    Button: {
      variants: {
        wallet: {
          animation: "bgAnimation 5s infinite",
          color: "white",
          borderRadius: "12px",
        },
        default: {
          bg: "#4B53F0",
          fontSize: "md",
          color: "#FFFFFF",
          borderRadius: "12px",
          _hover: { bg: "#3337A1" },
          _disabled: {
            _hover: {
              backgroundColor: "#4B53Fe !important",
              color: "#FFFFFF !important",
            },
          },
        },
      },
      defaultProps: {
        variant: "md",
        bg: "#4B53F0",
        borderRadius: "12px",
      },
    },
  },
});

export default customTheme;
