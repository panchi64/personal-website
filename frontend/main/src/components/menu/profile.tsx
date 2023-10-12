import { Avatar, Card } from '@nextui-org/react';

const Profile = (props: { name: string; desc: string; imgUrl?: string }) => {
  return (
    <a href={'/'}>
      <Card className='min-w-[120px] max-w-[480px] w-1/6 flex flex-row gap-4 px-4 py-1.5 mx-1.5 my-4 border-[1px] shadow-none border-mac-light-item-border rounded bg-mac-light-item-bg justify-start'>
        <Avatar
          showFallback
          src={`${props.imgUrl}`}
          className='my-auto min-w-6 min-h-6'
        />
        <div className='flex flex-col justify-center'>
          <p className='capitalize text-small font'>{props.name}</p>
          <p className='text-mac-light-tertiary capitalize text-xs'>
            {props.desc}
          </p>
        </div>
      </Card>
    </a>
  );
};

export default Profile;
