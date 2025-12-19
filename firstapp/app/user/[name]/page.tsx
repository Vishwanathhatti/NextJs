"use client";
import axios from "axios";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const page = () => {
    const params = useParams()
  const name = params.name;

  const [userDetails, setUserDetails] = useState({
    name: "",
    count: "",
    gender: "",
    probability: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.genderize.io/?name=${name}`
        );
        console.log(response.data)

        setUserDetails({
          name: response.data?.name,
          gender: response.data?.gender,
          count: response.data?.count,
          probability: response.data?.probability,
        });
      } catch (error) {
        // console.log(error)
        alert(`Error: ${error}`);
      }
    };
    fetchData()
  }, [name]);

  return (
    <div className="flex flex-col justify-center items-center h-screen  gap-10">
      <h1>Name:{userDetails?.name}</h1>
      <h1>gender:{userDetails?.gender}</h1>
      <h1>probability:{userDetails?.probability}</h1>
      <h1>count:{userDetails?.count}</h1>

    </div>
  );
};

export default page;
