import SafeHydrate from "components/SafeHydrate";
import MetaHead from "components/MetaHead";

import "styles/globals.scss";
import "styles/font.css";
import "styles/dashboard.scss";
import "styles/home.scss";
import "swiper/swiper.scss";
import "@wevisdemo/ui/styles/typography.css";
import "@wevisdemo/ui/styles/components.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MetaHead />

      <SafeHydrate>
        <Component {...pageProps} />
      </SafeHydrate>
    </>
  );
}

export default MyApp;
