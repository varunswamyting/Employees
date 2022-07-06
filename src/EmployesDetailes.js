import React from "react";
import { useLocation } from "react-router-dom";
import { request, gql } from "graphql-request";
import { useState, useEffect } from "react";

const EmployesDetailes = () => {
  const [data, setData] = useState("");
  const result = useLocation();
  const path = result.pathname.split("/")[2];
  
  useEffect(() => {

    const query = gql`
      {
       employees(where:{ slug: "${path}"}) {
          name
          description
          picture {
            url
            width
            height
          }
        }
      }
    `;

    request(
      "https://api-ap-south-1.graphcms.com/v2/cl4mbehal7kfh01z60e44gu48/master",
      query
    ).then((data) => setData(data));
  }, [path]);
  
  return (
    <>
      <img src={data && data.employees[0].picture.url} width="300px" alt="" />
      <h1>{data && data.employees[0].name}</h1>
      <h1>{data && data.employees[0].description}</h1>
    </>
  );
};

export default EmployesDetailes;
