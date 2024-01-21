import styles from "./page.module.css";
import ResponsiveAppBar from "./components/navBar";
import LandingPage from "./components/landing";
import Rules from "./components/rules";
import CalculatePoints from "./components/calculatePoints";

export default function Home() {
  return (
    <>
      <ResponsiveAppBar />
      <LandingPage />
      <Rules />
      <CalculatePoints />
    </>
  );
}
