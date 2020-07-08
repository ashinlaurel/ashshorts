import React from "react";
const Card = (props) => {
  return (
    <div>
      <div class=" max-w-sm my-5 w-full lg:max-w-full lg:flex lg:justify-center">
        <div
          class="h-64 lg:h-auto lg:w-48 flex-none bg-cover bg-center rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style={{ backgroundImage: `url(${props.url})` }}
          title="Woman holding a mug"
        ></div>
        <div class="border-r lg:w-5/12 border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div class="mb-8">
            <div class="text-gray-900 font-bold text-3xl mb-2">
              {props.title}
            </div>
            <p class="text-gray-700 text-base">{props.desc}</p>
          </div>
          <div class="flex items-center">
            <div class="text-sm">
              <p class="text-gray-900 leading-none">{props.user}</p>
              <p class="text-gray-600">{props.date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
