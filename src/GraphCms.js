import React from 'react';
import { request, gql } from 'graphql-request';
import { useState, useEffect } from 'react';


const GraphCms = () => {

    const [ name ,setName ]=useState("")


    useEffect(()=>{
        const query = gql`
        {
          dogs{
              name
              age
            }
            cats{
                name
                age
              }
        }`
      
      request('https://api-ap-south-1.graphcms.com/v2/cl4duej456ndu01wd2zpbhx14/master', query).then((data) => setName(data))
         

    },[])

 


  return (
    <>
    <div>graphCms</div>

    {/* <p>{name && name.dogs[0].name +" "+ name.dogs[0].age}</p> */}
    



        <table>
            <tbody>
            <tr>
                <td>Name</td>
                <td>Age</td>
            </tr>
            {name && name.dogs.map((a,index)=>(

            <tr key={index}>
                <td>{a.name}</td>
                <td>{a.age}</td>
            </tr>
                ))}
            </tbody>
        </table>

  
    
    
    
    </>

    


  )
}

export default GraphCms;