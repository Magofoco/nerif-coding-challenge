import { extendTheme } from "@chakra-ui/react";

const bgAnimationKeyframes = `
  @keyframes bgAnimation {
    0% { background-color: #ff0000; }
    25% { background-color: #00ff00; }
    50% { background-color: #0000ff; }
    75% { background-color: #ffff00; }
    100% { background-color: #ff00ff; }
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
          animation: "bgAnimation 4s infinite",
          color: "white",
          borderRadius: "12px",
        },
        default: {
          bg: "#4B53F0",
          fontSize: "md",
          color: "#FFFFFF",
          borderRadius: "12px",
          _hover: { bg: "#3337A1" },
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
