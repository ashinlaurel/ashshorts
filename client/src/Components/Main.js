import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

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
    <div className=" container mx-auto px-10 sm:px-0 flex flex-col  sm:block my-10 ">
      {posts.map((doc) => (
        <Card
          title={doc.title}
          desc={doc.desc}
          url={doc.fileurl}
          user={doc.user}
          date={moment(doc.createdat).format("DD-MM-YYYY")}
        />
      ))}
      {/* <Card />
      <Card />
      <Card /> */}
    </div>
  );
};

export default Main;
