import React from "react";
import MenuSectionItem from "./MenuSectionItem";

// The intended type for the payload is: JSON. However it seems that JSON.parse() just returns an any type object so any attempt to specify the payload's type will just create errors.
const MenuSections = (props: { payload: any }) => {
  const sectionTitle = props.payload.title;
  const sectionContent = props.payload.content;

  // TODO: Add API logic to fetch the section title and details regarding the section items
  return (
    <div className="flex flex-col mb-3 w-full">
      <p className="capitalize text-light-tertiary dark:text-dark-tertiary text-xs">
        {sectionTitle}
      </p>
      <div className="flex flex-col justify-center">
        {sectionContent?.map((itemDetails: any) => {
          return (
            <MenuSectionItem item={itemDetails} key={itemDetails.sectionName} />
          );
        })}
      </div>
    </div>
  );
};
export default MenuSections;
