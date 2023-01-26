import { Children } from 'react';
import MenuBar from '../ui/menu/MenuBar';
import MenuFooter from '../ui/menu/MenuFooter';
import MenuSections from '../ui/menu/MenuSections';
import ProfileSection from '../ui/ProfileSection';
import SearchBar from '../ui/SearchBar';

// TODO: Delete the extra copies once the overflow-y-auto is fixed
const menuSectionPayloadExample: any = {
  sections: [
    {
      title: 'professional',
      content: [
        {
          sectionName: 'work',
          sectionIcon: 'bi-briefcase',
        },
        {
          sectionName: 'projects',
          sectionIcon: 'bi-kanban',
        },
        {
          sectionName: 'research',
          sectionIcon: 'bi-laptop',
        },
      ],
    },
    {
      title: 'hobbies',
      content: [
        {
          sectionName: 'blog',
          sectionIcon: 'bi-pencil-square',
        },
        {
          sectionName: 'photography',
          sectionIcon: 'bi-camera2',
        },
        {
          sectionName: 'sports',
          sectionIcon: 'bi-bicycle',
        },
      ],
    },
    {
      title: 'tools',
      content: [
        {
          sectionName: 'finance',
          sectionIcon: 'bi-cash-stack',
        },
        {
          sectionName: 'productivity',
          sectionIcon: 'bi-diagram-3',
        },
        {
          sectionName: 'oogie boogie',
          sectionIcon: 'bi-diagram-3',
        },
      ],
    },
    {
      title: 'professional',
      content: [
        {
          sectionName: 'work',
          sectionIcon: 'bi-briefcase',
        },
        {
          sectionName: 'projects',
          sectionIcon: 'bi-kanban',
        },
        {
          sectionName: 'research',
          sectionIcon: 'bi-laptop',
        },
      ],
    },
    {
      title: 'professional',
      content: [
        {
          sectionName: 'work',
          sectionIcon: 'bi-briefcase',
        },
        {
          sectionName: 'projects',
          sectionIcon: 'bi-kanban',
        },
        {
          sectionName: 'research',
          sectionIcon: 'bi-laptop',
        },
      ],
    },
    {
      title: 'professional',
      content: [
        {
          sectionName: 'work',
          sectionIcon: 'bi-briefcase',
        },
        {
          sectionName: 'projects',
          sectionIcon: 'bi-kanban',
        },
        {
          sectionName: 'research',
          sectionIcon: 'bi-laptop',
        },
      ],
    },
    {
      title: 'professional',
      content: [
        {
          sectionName: 'work',
          sectionIcon: 'bi-briefcase',
        },
        {
          sectionName: 'projects',
          sectionIcon: 'bi-kanban',
        },
        {
          sectionName: 'research',
          sectionIcon: 'bi-laptop',
        },
      ],
    },
    {
      title: 'professional',
      content: [
        {
          sectionName: 'work',
          sectionIcon: 'bi-briefcase',
        },
        {
          sectionName: 'projects',
          sectionIcon: 'bi-kanban',
        },
        {
          sectionName: 'research',
          sectionIcon: 'bi-laptop',
        },
      ],
    },
    {
      title: 'professional',
      content: [
        {
          sectionName: 'work',
          sectionIcon: 'bi-briefcase',
        },
        {
          sectionName: 'projects',
          sectionIcon: 'bi-kanban',
        },
        {
          sectionName: 'research',
          sectionIcon: 'bi-laptop',
        },
      ],
    },
    {
      title: 'professional',
      content: [
        {
          sectionName: 'work',
          sectionIcon: 'bi-briefcase',
        },
        {
          sectionName: 'projects',
          sectionIcon: 'bi-kanban',
        },
        {
          sectionName: 'research',
          sectionIcon: 'bi-laptop',
        },
      ],
    },
    {
      title: 'professional',
      content: [
        {
          sectionName: 'work',
          sectionIcon: 'bi-briefcase',
        },
        {
          sectionName: 'projects',
          sectionIcon: 'bi-kanban',
        },
        {
          sectionName: 'research',
          sectionIcon: 'bi-laptop',
        },
      ],
    },
  ],
};

const socialDetailsPayloadExample: any = [
  {
    url: 'https://www.linkedin.com/in/francisco-a-casiano-rosado/',
    name: 'linkedin',
    icon: 'bi-linkedin',
  },
  {
    url: 'https://github.com/panchi64',
    name: 'github',
    icon: 'bi-github',
  },
  {
    url: 'mailto:contact@franciscocasiano.com',
    name: 'email',
    icon: 'bi-envelope-at-fill',
  },
];

const MenuLayout = (props: { children: any }) => {
  const { children } = props;

  return (
    <>
      <MenuBar>
        <div className='grid grid-col justify-center h-full'>
          <div className='max-w-[240px] overflow-y-auto'>
            <SearchBar />
            <ProfileSection
              title='francisco casiano'
              subtitle='about'
            />
            {/* TODO: Find a way to make the overflow-y-auto only make the Menu Sections area scrollable, keeping the profile section and searchbar visible at all times*/}
            {menuSectionPayloadExample.sections.map((section: any) => {
              return (
                <MenuSections
                  payload={section}
                  key={section.title}
                />
              );
            })}
          </div>
          <div className='place-self-end w-full'>
            <MenuFooter socialDetails={socialDetailsPayloadExample} />
          </div>
        </div>
      </MenuBar>
      {/* TODO: Add spacing so that the content on the page does not cross over to behind the menubar */}
      <div className='bg-dark-orange h-screen'>
        poopy
        {/* children */}
      </div>
    </>
  );
};

export default MenuLayout;
