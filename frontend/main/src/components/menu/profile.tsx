import {Avatar, Card, User} from "@nextui-org/react";

const Profile = (props: { name: String, description: String, imgUrl: String}) => {
  const profileClicked = () => {
    console.log("Profile clicked");
  }

  return (
    <a href={"/"} onClick={profileClicked}>
      <Card className="
          min-w-min
          w-[200px]

          flex
          flex-row

          gap-4

          px-4
          py-1.5

          border-[1px]
          border-mac-light-item-border
          rounded

          bg-mac-light-item-bg
          justify-start
          "
      >
        <User name={props.name} description={props.description} avatarProps={{src: `${props.imgUrl}`}}/>
      </Card>
    </a>
  );
}

export default Profile;