import BasicTable from "./table";
import Rating from "@mui/material/Rating";
import tims from "../assets/tims.png";
import sportsCheck from "../assets/sportsCheck.png";
import subway from "../assets/subWay.jpg";
import Avatar from "@mui/material/Avatar";
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
          Introducing the Capital One Premier Rewards Card.
        </h1>
        <p
          style={{
            textAlign: "center",
            color: "#0d3d6b",
            fontWeight: "100",
            width: "75%",
          }}
        >
          Every dollar you spend seamlessly transforms into valuable points,
          maximizing your rewards journey with each transaction
        </p>
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
      <div style={{margin: 20}}>
        <BasicTable />
      </div>
      <Rating
        name="half-rating-read"
        defaultValue={4.5}
        precision={0.5}
        readOnly
        sx={{marginTop: "3%"}}
      />
      <div
        style={{
          width: "75%",
          height: "1px",
          backgroundColor: "#0d3d6b",
          alignSelf: "center",
          borderRadius: "25px",
          padding: "3",
          marginBottom: "5%",
          marginTop: "1%",
        }}
      ></div>
    </div>
  );
}

export default Rules;
