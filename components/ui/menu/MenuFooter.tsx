import Link from 'next/link';
import BootstrapIcon from '../BootstrapIcon';
import ThemeIcon from '../svg-icon/ThemeIcon';

const MenuFooter = (props: { socialDetails: any }) => {
  const { socialDetails } = props;
  return (
    <div className='flex justify-between max-w-[240px]'>
      {/* 
        Weird width and height because the svg seems to scale to the width and height of the parent and I'm not gonna sit here for 1hr to find out why
        These values guarantee that the svg is ~24px wide and tall
      */}
      <ThemeIcon
        width={39}
        height={39}
        className='bg-light-item-bg/[.72] dark:bg-dark-item-bg/[.72] border-light-item-border dark:border-dark-item-border border rounded text-light-black dark:text-dark-white place-self-center p-1'
      />
      <div className=' border rounded bg-light-item-bg/[.72] dark:bg-dark-item-bg/[.72] border-light-item-border dark:border-dark-item-border text-light-black dark:text-dark-white place-self-center p-1'>
        {socialDetails.map(
          (item: { url: string; name: string; icon: string }) => {
            return (
              <Link
                href={item.url}
                key={item.name}
              >
                <BootstrapIcon
                  icon={item.icon}
                  className={'py-1 px-[6px] text-2xl'}
                />
              </Link>
            );
          }
        )}
      </div>
    </div>
  );
};

export default MenuFooter;
