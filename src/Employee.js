import React from "react";
import { request, gql } from "graphql-request";
import { useState, useEffect } from "react";
import EmployesDetailes from "./EmployesDetailes";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

const Employee = () => {
  const [data, setData] = useState("");

  // useEffect(() => {
  //   const query = gql`
  //     {
  //       designs {
  //         picture {
  //           url
  //           width
  //           height
  //         }
  //         name
  //         description
  //         slug
  //         id
  //       }
  //       servicings {
  //         picture {
  //           url
  //           width
  //           height
  //         }
  //         name
  //         description
  //         slug
  //       }
  //       copies {
  //         picture {
  //           url
  //           width
  //           height
  //         }
  //         name
  //         description
  //       }
  //       socialMedias {
  //         picture {
  //           url
  //           width
  //           height
  //         }
  //         name
  //         description
  //       }
  //     }
  //   `;

  //   request(
  //     "https://api-ap-south-1.graphcms.com/v2/cl4f6k5p21dnx01xsb7djdxht/master",
  //     query
  //   ).then((data) => setData(data));
  // }, []);

  useEffect(() => {
    const query = gql`
      {
        positions {
          position
          slug
          employee {
            name
            description
            slug
            picture {
              url
              width
              height
            }
            bio {
              json
            }
          }
        }
      }
    `;

    request(
      "https://api-ap-south-1.graphcms.com/v2/cl4mbehal7kfh01z60e44gu48/master",
      query
    ).then((data) => {setData(data);console.log(data)});
  }, []);




  return (
    <>
      {data &&
        data.positions.map((curritem, id) => {
          return (
            <>
              <h1 className="head" key={id}>
                {curritem.position}
              </h1>
              <div className="doubleline"></div>
              {curritem.employee.map((initem, index) => {
                return (
                  <>
                    <div className="profile">
                      <img src={initem.picture.url} width="200px" alt="" />
                      <h1 key={index}>{initem.name}</h1>
                      <Link to={`/employe/${initem.slug}`}>
                        <h1>{initem.description}</h1>
                      </Link>
                    </div>
                  </>
                );
              })}
            </>
          );
        })}
    </>
  );
};

export default Employee;
