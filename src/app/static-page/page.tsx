import React from "react";

export const revalidate = 60;

const StaticPage = async () => {
  let data = await fetch(
    "http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=1"
  );
  let json = await data.json();

  return (
    <div>
      <p>O número é: {json}</p>
    </div>
  );
};

export default StaticPage;
