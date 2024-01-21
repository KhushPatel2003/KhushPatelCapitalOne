import Image from "next/image";
import landingPage from "../assets/landingPage.jpg";
import c1Logo from "../assets/c1Logo.png";

function LandingPage() {
  return (
    <div
      style={{
        backgroundImage: `url(${landingPage.src})`,
        width: "100%",
        height: "50vh",

        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "rgba(76, 125, 165, 0.8)",
        }}
      >
        <h1
          style={{
            width: "50%",
            textAlign: "center",
            color: "white",
            fontWeight: "100",
            fontSize: "2.5rem",
          }}
        >
          Experience the future of credit card benefits with Capital One
        </h1>
      </div>
    </div>
  );
}

export default LandingPage;
