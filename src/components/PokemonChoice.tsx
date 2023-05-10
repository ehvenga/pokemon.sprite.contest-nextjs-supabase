'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import axios from 'axios';

const PokemonChoice: React.FC = () => {
  const [pokemonData, setPokemonData] = useState<any>(null);
  const [pokemonSprites, setPokemonSprites] = useState<any[]>([]);
  const [selectedSprite, setSelectedSprite] = useState<string>('');
  const [disableSelection, setDisableSelection] = useState<boolean>(false);

  useEffect(() => {
    if (!selectedSprite) {
      fetchPokemonDetails();
    }
  }, [selectedSprite]);

  const handleSpriteDetails = (pokemonData: any[]) => {
    const arr = [];
    for (const generation in pokemonData) {
      let generationName = generation;
      for (const version in pokemonData[generation]) {
        const frontDefault = pokemonData[generation][version]['front_default'];
        if (frontDefault) {
          arr.push({ generationName: generationName, spriteUrl: frontDefault });
          break;
        }
      }
    }
    return arr;
  };

  const fetchPokemonDetails = async () => {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 800) + 1}`
    );
    setPokemonData(data);
    setPokemonSprites(handleSpriteDetails(data.sprites.versions));
  };

  const handleChoiceMade = (sprite: any) => {
    const { generationName } = sprite;
    setSelectedSprite(generationName);
    setDisableSelection(true);
  };

  const capitalizeHyphenatedString = (str: string) => {
    const hyphenIndex = str.indexOf('-');
    if (hyphenIndex === -1) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    } else {
      const firstPart = str.substring(0, hyphenIndex);
      const secondPart = str.substring(hyphenIndex + 1).toUpperCase();
      return (
        firstPart.charAt(0).toUpperCase() +
        firstPart.slice(1) +
        '-' +
        secondPart
      );
    }
  };

  return (
    <section className='flex flex-col justify-center'>
      {pokemonData ? (
        <div>
          <h2 className='w-full text-center text-xl 2xl:text-2xl mt-5 pb-2 font-light text-sky-900 dark:text-sky-100'>
            Choose the best looking sprite
          </h2>
          <div className='flex justify-center items-center py-4 gap-x-6'>
            {pokemonSprites.map((sprite, idx) => {
              return (
                <button
                  className={`hover:outline hover:outline-2 hover:outline-offset-4 rounded-lg w-28 h-28 2xl:w-36 2xl:h-36 disabled:outline-none cursor-pointer ${
                    selectedSprite === sprite?.generationName
                      ? 'disabled:opacity-100 scale-110'
                      : 'disabled:opacity-50 cursor-default'
                  }`}
                  key={idx}
                  onClick={() => handleChoiceMade(sprite)}
                  disabled={disableSelection}
                >
                  <Image
                    src={sprite?.spriteUrl}
                    alt='pokemon'
                    width={144}
                    height={144}
                    className='rounded-lg'
                  />
                </button>
              );
            })}
          </div>
          <div className='w-full text-center capitalize text-2xl font-medium text-sky-900 dark:text-white'>
            {pokemonData?.name}{' '}
            <span className='text-lg font-normal ml-2 text-sky-600 dark:text-sky-500'>
              #{pokemonData?.order}
            </span>
          </div>
          {selectedSprite ? (
            <div className='w-full text-center font-medium text-xl h-4'>
              You chose {capitalizeHyphenatedString(selectedSprite)}
            </div>
          ) : (
            <div className='w-full text-center font-medium h-4'></div>
          )}
        </div>
      ) : null}
    </section>
  );
};

export default PokemonChoice;
