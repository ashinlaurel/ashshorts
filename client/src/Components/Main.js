import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "./Card";

const Main = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .post("/output")
      .then((res) => {
        const newpost = res.data;
        setPosts(newpost);
        // setLoading(false);

        return () => {
          console.log("done");
        };
      })
      .catch((err) => {
        console.log(err);
        // setLoading(false);
      });
  }, []);

  return (
    <div className=" container mx-auto flex flex-col  sm:block my-10 ">
      {posts.map((doc) => (
        <Card title={doc.title} desc={doc.desc} url={doc.fileurl} />
      ))}
      {/* <Card />
      <Card />
      <Card /> */}
    </div>
  );
};

export default Main;
