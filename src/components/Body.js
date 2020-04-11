import React, { useContext } from "react";
import "../style/Body.css";
import DataAreaContext from "../utils/DataAreaContext";

const Body = () => {
  const context = useContext(DataAreaContext);
 
  function parseDOB(date) {
    const dateArray = date.split("-"),
     year = dateArray[0],
     month = dateArray[1],
     dayArray = dateArray[2].split("T"),
     day = dayArray[0],
     newDate = [month, day, year].join("-");
    return newDate;
  }
  return (
    <tbody>
      {context.developerState.filteredUsers[0] !== undefined && context.developerState.filteredUsers[0].name !== undefined ? (
        context.developerState.filteredUsers.map(({ login, name, picture, phone, email, dob }) => {
          return (
            <tr key={login.uuid}>
              <td data-th="Image" className="align-middle">
                <img
                  src={picture.medium}
                  alt={"profile image for " + name.first + " " + name.last}
                  className="img-responsive"
                />
              </td>
              <td data-th="Name" className="name-cell align-middle">
                {name.first} {name.last}
              </td>
              <td data-th="Phone" className="align-middle">
                {phone}
              </td>
              <td data-th="Email" className="align-middle">
                <a href={"mailto:" + email} target="__blank">
                  {email}
                </a>
              </td>
              <td data-th="DOB" className="align-middle">
                {parseDOB(dob.date)}
              </td>
            </tr>
          );
        })
      ) : (
        <></>
      )}
    </tbody>
  );
}

export default Body;