import Header from "components/Header";
import Intro from "components/Intro";
import PlausibleProvider from "next-plausible";
let show_intro = true;
setTimeout(() => {
  show_intro = false;
}, 4000);

export default function Layout(props) {
  return (
    <PlausibleProvider domain="openbangkok.wevis.info" customDomain="https://analytics.punchup.world" selfHosted={true}>
      <Header />
      {show_intro && <Intro />}

      <div id="main" className="fixed inset-0 overflow-hidden" style={{ top: "60px" }}>
        {props.children}
      </div>
    </PlausibleProvider>
  );
}
