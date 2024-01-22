import BasicTable from "./table";
import tims from "../assets/tims.png";
import sportsCheck from "../assets/sportsCheck.png";
import subway from "../assets/subWay.jpg";
import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import venture from "../assets/venture.png";
import AvatarGroup from "@mui/material/AvatarGroup";

function Rules() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "55%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "5%",
          marginBottom: "1%",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#0d3d6b",
            fontWeight: "700",
            marginBottom: "1%",
          }}
        >
          Introducing the Capital One Venture Rewards Card.
        </h1>
        <p
          style={{
            textAlign: "center",
            color: "#0d3d6b",
            fontWeight: "100",
            width: "75%",
            marginBottom: "2%",
          }}
        >
          Every dollar you spend seamlessly transforms into valuable points,
          maximizing your rewards journey with each transaction
        </p>
        <Image src={venture.src} width={500 / 1.8} height={315 / 1.8} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            marginTop: "1%",
          }}
        >
          <AvatarGroup max={4}>
            <Avatar alt="Cindy Baker" src={sportsCheck.src} />
            <Avatar alt="Remy Sharp" src={tims.src} />
            <Avatar alt="Travis Howard" src={subway.src} />
            <Avatar alt="Agnes Walker" src={tims.src} />
            <Avatar alt="Agnes Walker" src={tims.src} />
          </AvatarGroup>
        </div>
      </div>
      <div style={{margin: 20, marginBottom: 50}}>
        <BasicTable />
      </div>
    </div>
  );
}

export default Rules;
