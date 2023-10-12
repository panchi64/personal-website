import { Card } from '@nextui-org/react';
import GitHubIcon from '../custom-icons/github';
import LinkedInIcon from '../custom-icons/linkedin';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { MoonIcon } from '@heroicons/react/24/solid';

const MenuFooter = () => {
  return (
    <div className='flex flex-row justify-between w-1/6 mx-1.5 my-4'>
      <div className='flex flex-row'>
        <Card className='rounded-l rounded-r-none min-w-4 max-w-12 w-9 border-y-1 border-l-1 border-r-0 border-mac-light-item-border py-1 px-2 shadow-none bg-mac-light-item-bg'>
          <a href='https://github.com/panchi64'>
            <GitHubIcon className='w-6 h-6 fill-mac-light-black' />
          </a>
        </Card>
        <Card className='rounded-l-none rounded-r-none min-w-4 max-w-12 w-9 border-y-1 border-x-0 border-mac-light-item-border py-1 px-2 shadow-none bg-mac-light-item-bg'>
          <a href='https://linkedin.com/in/francisco-a-casiano-rosado'>
            <LinkedInIcon className='w-6 h-6 fill-mac-light-blue' />
          </a>
        </Card>
        {/* The mail is a bit wider than the other card because the icons are somehow shifted a bit to the right */}
        <Card className='rounded-l-none rounded-r min-w-4 max-w-12 w-10 border-y-1 border-x-0 border-mac-light-item-border py-1 px-2 shadow-none bg-mac-light-item-bg'>
          <a href='mailto:contact@franciscocasiano.com'>
            <EnvelopeIcon className='w-6 h-6 fill-transparent text-mac-light-black' />
          </a>
        </Card>
      </div>
      <Card className='rounded min-w-4 max-w-12 w-9 border-1 border-mac-light-item-border p-1 shadow-none bg-mac-light-item-bg'>
        <a href='mailto:contact@franciscocasiano.com'>
          <MoonIcon className='w-6 h-6 fill-mac-light-black' />
        </a>
      </Card>
    </div>
  );
};

export default MenuFooter;
