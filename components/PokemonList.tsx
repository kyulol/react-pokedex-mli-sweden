import React from "react";

interface Props {
  name: string;
  id: number;
  image: string;
  type: string;
}

function PokemonList(props: Props) {
  const { name, id, image, type } = props;

  return (
    <div
      className={`border-gray-900 border-2 flex flex-col items-center p-3 m-2.5 rounded-lg text-gray-900 font-bold ${type}`}
    >
      <p># {id}</p>
      <p>{name}</p>
      <img src={image} alt={name} />
      <p className="flex flex-col items-center">
        <span>type:</span>
        <span>{type}</span>
      </p>
    </div>
  );
}

export default PokemonList;
