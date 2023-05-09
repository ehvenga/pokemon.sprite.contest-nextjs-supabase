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
    <section className='h-[50svh] flex flex-col justify-evenly'>
      {pokemonData ? (
        <div>
          <div className='flex justify-center items-center py-4 gap-x-6'>
            {pokemonSprites.map((sprite, idx) => {
              return (
                <button
                  className={`hover:outline hover:outline-2 hover:outline-offset-4 rounded-md w-32 h-32 disabled:opacity-50 disabled:outline-none cursor-pointer ${
                    selectedSprite === sprite?.generationName
                      ? 'disabled:opacity-100 scale-110'
                      : 'cursor-default'
                  }`}
                  key={idx}
                  onClick={() => handleChoiceMade(sprite)}
                  disabled={disableSelection}
                >
                  <Image
                    src={sprite?.spriteUrl}
                    alt='pokemon'
                    width={128}
                    height={128}
                    className='rounded-md'
                  />
                </button>
              );
            })}
          </div>
          <div className='w-full text-center capitalize mt-12 text-xl font-medium'>
            {pokemonData?.name}{' '}
            <span className='text-lg font-normal ml-2'>
              #{pokemonData?.order}
            </span>
          </div>
          {selectedSprite ? (
            <div className='w-full text-center font-medium h-8'>
              You chose {capitalizeHyphenatedString(selectedSprite)}
            </div>
          ) : (
            <div className='w-full text-center font-medium h-8'> </div>
          )}
        </div>
      ) : null}
    </section>
  );
};

export default PokemonChoice;
