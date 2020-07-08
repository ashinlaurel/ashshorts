import React, { useContext, useState } from "react";
import { LoginContext } from "../Context/LoginContext";

import axios from "axios";
import spinner from "../assets/spinner3.gif";
import { firebase, storage } from "../firebase/index";

export default function Admin() {
  const { handle } = useContext(LoginContext);
  const theform = {
    title: "",
    desc: "",
    fileurl: "",
  };

  const [values, setValues] = useState(theform);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  // const [uploadperc, setUploadperc] = useState("");
  const [file, setFile] = useState("");
  const [url, setUrl] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFileInput = (e) => {
    if (e.target.files[0]) {
      // let image = e.target.files[0];
      setFile(e.target.files[0]);

      // setValues({
      //   ...values,
      //   file: { image },
      // });
      // console.log(values.file);
    }
  };

  const FileSubmit = (e) => {
    e.preventDefault();
    console.log(file);
    const uploadTask = storage.ref(`images/${file.name}`).put(file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const newprogress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(newprogress);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(file.name)
          .getDownloadURL()
          .then((theurl) => {
            // console.log(theurl);
            // let passurl = url;
            setUrl(theurl);
            // setValues({
            //   ...values,
            //   [fileurl]: url,
            // });
          });
      }
    );

    // const formData = new FormData();
    // formData.append("file", file);

    // const res = axios
    //   .post("/upload", formData, {
    //     headers: {
    //       "Content-Type": "image/jpeg",
    //     },
    //     onUploadProgress: (progressEvent) => {
    //       setUploadperc(
    //         parseInt(
    //           Math.round((progressEvent.loaded * 100) / progressEvent.total)
    //         )
    //       );

    //       // Clear percentage
    //       setTimeout(() => setUploadperc(0), 10000);
    //     },
    //   })
    //   .then(console.log("Sent"));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    setLoading(true);
    setProgress(0);
    let passer = {
      title: values.title,
      desc: values.desc,
      fileurl: url,
      user: handle,
    };
    axios
      .post("/newpost", passer)
      .then((response) => {
        setValues(theform);
        setShowModal(true);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div className="appbody h-full min-h-screen container mx-auto mb-10">
      <div className="w-full h-20"></div>
      <div className="h-full py-65 bg-gray-300 bg-opacity-50 mx-4 md:mx-16 lg:mx-32 rounded-lg shadow-xl">
        <div className="mx-2 text-center py-10 flex flex-col items-center justify-center  ">
          <span className="text-4xl font-bold tracking-tight border-b border-black text-gray-800 block pb-1">
            NEW POST
          </span>

          <div className="px-4 sm:px-20 w-full">
            <div className="md:flex md:items-center my-6  ">
              <div className="md:w-1/3">
                <label
                  className=" sm:text-xl block text-gray-800  md:ml-32 mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  Title:
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-white appearance-none border-2 border-gray-200 
                    rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none 
                    focus:bg-white focus:border-purple-500"
                  id="inline-full-Item"
                  type="text"
                  name="title"
                  onChange={handleInput}
                  value={values.title}
                />
              </div>
            </div>

            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className=" sm:text-xl block text-gray-800  md:ml-32 mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  Decription:
                </label>
              </div>
              <div className="md:w-2/3">
                <textarea
                  className="bg-white appearance-none border-2 border-gray-200 
                    rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none 
                    focus:bg-white focus:border-purple-500"
                  rows="5"
                  id="inline-full-name"
                  type="text"
                  name="desc"
                  value={values.desc}
                  onChange={handleInput}
                  required
                />
              </div>
            </div>
            {/* <progress value={progress} max="100" /> */}
          </div>
          <form onSubmit={FileSubmit}>
            <div className="md:flex md:items-center my-6  ">
              <div className="md:w-1/3">
                <label
                  className=" sm:text-xl block text-gray-800  md:ml-32 mb-1 md:mb-0 pr-4"
                  for="inline-full-name"
                >
                  Image:
                </label>
              </div>
              <div className="md:w-1/2">
                <input
                  className="bg-white appearance-none border-2 border-gray-200 
                    rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none 
                    focus:bg-white focus:border-purple-500"
                  id="inline-full-Item"
                  type="file"
                  name="file"
                  onChange={handleFileInput}
                />
              </div>
              <input
                className="px-4 py-1 ml-4 rounded-lg bg-blue-500 text-white"
                type="submit"
              />
            </div>
          </form>
          <div class="ml-64 w-8/12 relative pt-1">
            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
              <div
                style={{ width: `${progress}%` }}
                class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
              ></div>
            </div>

            <button
              onClick={handleSubmit}
              className="py-2 px-6 m-2 rounded-full bg-blue-500 text-white shadow-lg outline-none focus:outline-none hover:bg-blue-700"
            >
              Order
            </button>
          </div>
        </div>
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              onClick={() => setShowModal(false)}
            >
              <div className="relative w-auto my-6 mx-auto max-w-sm">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                    <h3 className="text-3xl font-semibold">Article Posted</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-gray-600 text-lg leading-relaxed">
                      Your article has been successfully posted. Please go to
                      the homepage to view all the posts.
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                    <button
                      className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
        {/* //loading */}
        {loading ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              // onClick={() => setShowModal(false)}
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}

                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <img src={spinner} />
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </div>
  );
}
