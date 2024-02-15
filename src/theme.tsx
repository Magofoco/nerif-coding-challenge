import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      500: "#4B53F0",
    },
  },
  components: {
    Button: {
      baseStyle: {
        bg: "brand.500",
        color: "white",
      },
    },
  },
});

export default theme;
