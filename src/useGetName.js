import React, { useEffect, useState } from 'react'

function useGetFullName(first, middle, last) {
const [fullname,setFullName] = useState();

    useEffect(()=>{
        const hasFirstName = first ? `${first} ` : '';
        const hasMiddleName = middle ? `${middle} ` : '';
        const tempfullName = hasFirstName ? `${first} ${hasMiddleName}${last}` : null;

        setFullName(tempfullName)
    },[first, middle, last])

    return fullname;
   
  }
  
  export default useGetFullName;
