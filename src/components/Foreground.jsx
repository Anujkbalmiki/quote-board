// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useRef } from "react";
import Cards from "./Cards";


const Foreground = () => {
  const ref = useRef(null);

  const data = [
    {
      desc: "In every sunrise lies a promise; in every sunset, a memory.",
      filesize: ".9mbs",
      close: false,
      tag: { isOpen: true, tagTitle: "Like", Color: "blue" },
    },
    {
      desc: "The strength of a tree is not seen in its bark, but in its roots.",
      filesize: ".9mbs",
      close: false,
      tag: { isOpen: true, tagTitle: "Share", Color: "green" },
    },
    {
      desc: "Dreams are whispers from your soul; listen closely.",
      filesize: ".9mbs",
      close: false,
      tag: { isOpen: true, tagTitle: "Like", Color: "blue" },
    },
    {
      desc: "In giving, we receive the most profound gift of all—joy..",
      filesize: ".9mbs",
      close: false,
      tag: { isOpen: true, tagTitle: "Share", Color: "green" },
    },
    {
      desc: "Light up the world with your smile; it's contagious.",
      filesize: ".9mbs",
      close: false,
      tag: { isOpen: true, tagTitle: "Like", Color: "blue" },
    },
    {
      desc: "Every moment is a fresh beginning; embrace it with open arms..",
      filesize: ".9mbs",
      close: false,
      tag: { isOpen: true, tagTitle: "Share", Color: "green" },
    },
  ];
  return (
    <div ref={ref} className="fixed p-5 top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap">
      {data.map((item,index)=>(
        <Cards data={item} reference={ref} />
      ))}
    </div>
  );
};

export default Foreground;
