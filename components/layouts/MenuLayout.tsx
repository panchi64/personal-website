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
    const {children} = props;

    return (
        <>
            <MenuBar>
                <div className='grid grid-col justify-center h-full'>
                    <div className='max-w-[240px] overflow-hidden flex flex-col h-full'>
                        <SearchBar/>

                        <ProfileSection
                            title='francisco casiano'
                            subtitle='about'
                        />
                        {/* TODO: Find a way to style the scrollbar so it doesn't look so jarring? */}
                        <div className='overflow-y-auto flex-grow'>
                            {menuSectionPayloadExample.sections.map((section: any) => {
                                return (
                                    <MenuSections
                                        payload={section}
                                        key={section.title}
                                    />
                                );
                            })}
                        </div>
                        <div className='w-full my-2'>
                            <MenuFooter socialDetails={socialDetailsPayloadExample}/>
                        </div>
                    </div>
                </div>
            </MenuBar>
            <div className='h-screen flex flex-row bg-light-background dark:bg-dark-background'>
                {/* Spacer to prevent page content get stuck behind the  */}
                <div className='sm:w-1/3 lg:w-1/5 sm:max-w-xs'></div>
                <div className='w-full h-full'>
                    poopy
                    {/* children */}
                </div>
            </div>
        </>
    );
};

export default MenuLayout;
