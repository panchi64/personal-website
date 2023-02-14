import Link from 'next/link';
import BootstrapIcon from '../BootstrapIcon';
import ThemeIcon from '../svg-icon/ThemeIcon';

const MenuFooter = (props: { socialDetails: any }) => {
  const { socialDetails } = props;

  const toggleTheme = () => {
    // TODO: Find a way for the user to have their theme set to their system preference so that this button doesn't have to be clicked every time the page loads and the user's system preference is set to dark mode.
    // FIXME: This does not seem to work on chrome in linux
    if (
      (localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)) &&
      !document.documentElement.classList.contains('dark')
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className='flex justify-between max-w-[240px]'>
      {/* 
        Weird width and height because the svg seems to scale to the width and height of the parent and I'm not gonna sit here for 1hr to find out why
        These values guarantee that the svg is ~24px wide and tall
      */}
      <button onClick={toggleTheme}>
        <ThemeIcon
          width={39}
          height={39}
          className='bg-light-item-bg/[.72] dark:bg-dark-item-bg/[.72] border-light-item-border dark:border-dark-item-border border rounded text-light-black dark:text-dark-white place-self-center p-1 cursor-pointer'
        />
      </button>
      <div className=' border rounded bg-light-item-bg/[.72] dark:bg-dark-item-bg/[.72] border-light-item-border dark:border-dark-item-border text-light-black dark:text-dark-white place-self-center p-1'>
        {socialDetails.map(
          (item: { url: string; name: string; icon: string }) => {
            return (
              <a
                target='_blank'
                key={item.name}
                href={item.url}
                rel='noopener noreferrer'
              >
                <BootstrapIcon
                  icon={item.icon}
                  className={'py-1 px-[6px] text-2xl'}
                />
              </a>
            );
          }
        )}
      </div>
    </div>
  );
};

export default MenuFooter;
