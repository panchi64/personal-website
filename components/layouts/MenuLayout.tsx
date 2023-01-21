import { Children } from "react";
import MenuBar from "../ui/MenuBar";
import MenuSections from "../ui/MenuSections";
import ProfileSection from "../ui/ProfileSection";
import SearchBar from "../ui/SearchBar";

const menuSectionPayloadExample: any = {
  sections: [
    {
      title: "professional",
      content: [
        {
          sectionName: "work",
          sectionIcon: "bi-briefcase",
        },
        {
          sectionName: "projects",
          sectionIcon: "bi-kanban",
        },
        {
          sectionName: "research",
          sectionIcon: "bi-laptop",
        },
      ],
    },
    {
      title: "hobbies",
      content: [
        {
          sectionName: "blog",
          sectionIcon: "bi-pencil-square",
        },
        {
          sectionName: "photography",
          sectionIcon: "bi-camera2",
        },
        {
          sectionName: "sports",
          sectionIcon: "bi-bicycle",
        },
      ],
    },
    {
      title: "tools",
      content: [
        {
          sectionName: "finance",
          sectionIcon: "bi-cash-stack",
        },
        {
          sectionName: "productivity",
          sectionIcon: "bi-diagram-3",
        },
      ],
    },
  ],
};

const MenuLayout = (props: { children: any }) => {
  const { children } = props;
  return (
    //   TODO: Find out how to show the content of the page side by side with the menu bar and there are no rendering issues
    <div className="">
      <MenuBar>
        {/* TODO: Figure out how to align the menu items in the center of the menu bar area */}
        <div className="flex justify-center">
          <div className="max-w-xs ">
            <SearchBar />
            <ProfileSection title="francisco casiano" subtitle="about" />

            {menuSectionPayloadExample.sections.map((section: any) => {
              return <MenuSections payload={section} key={section.title} />;
            })}

            <MenuSections payload={menuSectionPayloadExample} />
          </div>
        </div>
      </MenuBar>
      <div className="">{children}</div>
    </div>
  );
};

export default MenuLayout;
