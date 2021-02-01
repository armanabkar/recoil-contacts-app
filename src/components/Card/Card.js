import React from "react";
import { useRecoilValue } from "recoil";
import "./Card.css";

import { currentContactDetails } from "../../recoil/selectors";

const Card = () => {
  const contact = useRecoilValue(currentContactDetails);

  return (
    <>
      <img
        src="https://discountdoorhardware.ca/wp-content/uploads/2018/06/profile-placeholder-3.jpg"
        alt="profile-pic"
      />
      <h3>{contact.name}</h3>
      <p>
        <span>ADDRESS :</span> {contact.address}
      </p>
      <p>
        <span>PHONE :</span> {contact.phone}
      </p>
      <p>
        <span>EMAIL :</span>
        {contact.email}
      </p>
    </>
  );
};

export default Card;
