import { Children } from 'react';
import MenuBar from '../ui/MenuBar';
import MenuSections from '../ui/MenuSections';
import ProfileSection from '../ui/ProfileSection';
import SearchBar from '../ui/SearchBar';

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
  ],
};

const MenuLayout = (props: { children: any }) => {
  const { children } = props;

  return (
    <>
      <MenuBar>
        <div className='flex justify-center'>
          <div className='max-w-[240px] overflow-y-auto'>
            <SearchBar />
            <ProfileSection
              title='francisco casiano'
              subtitle='about'
            />
            {menuSectionPayloadExample.sections.map((section: any) => {
              return (
                <MenuSections
                  payload={section}
                  key={section.title}
                />
              );
            })}
          </div>
        </div>
      </MenuBar>
      {/* TODO: Make this go behind the menu to show the blur effect */}
      <div className='bg-dark-orange h-screen'>
        poopy
        {/* children */}
      </div>
    </>
  );
};

export default MenuLayout;
