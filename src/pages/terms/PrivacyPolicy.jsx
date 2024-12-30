import React, { useEffect, useState } from 'react'
import { API } from '../../Host';
import axios from 'axios';
import StyledText from '../../components/StyledText';

const PrivacyPolicy = () => {
   const [policy, setPolicy] = useState({});
  
    useEffect(() => {
      const fetchPolicy = async () => {
        const postURL = API + `/api/policies`;
        try {
          const response = await axios.get(postURL);
          const responseData = response.data.data;
  
          setPolicy(responseData);
        } catch (error) {
          console.error("Error fetching subscriptions:", error);
        }
      };
  
      fetchPolicy();
    }, []);
  return (
    <div className="mx-5 my-6 font-poppins font-extralight">
    <p className="text-lg">Privacy Policy</p>
    <hr className="my-2 " />
    {policy ? (
        <StyledText text={policy.privacy} />
      ) : (
        <p className="text-center mt-4">No Privacy Policy Found</p>
      )}
  </div>
  )
}

export default PrivacyPolicy