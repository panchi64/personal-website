import React from "react";

// The intended type for the payload is: JSON. However it seems that JSON.parse() just returns an any type object so any attempt to specify the payload's type will just create errors.
const MenuSections = (props: { payload: any }) => {
    // TODO: Add API logic to fetch the section title and details regarding the section items
    return null;
};

export default MenuSections;