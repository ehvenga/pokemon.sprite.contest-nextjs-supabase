'use client';

import { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from 'recharts';
import supabase from '../../client';

interface VoteData {
  chosen_generation: string;
  count: number;
}

const VoteBarChart: React.FC<{ data: VoteData[] }> = ({ data }) => {
  return (
    <BarChart width={400} height={400} data={data}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='chosen_generation' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey='count' fill='#8884d8' />
    </BarChart>
  );
};

const PokemonResults: React.FC = () => {
  const [generationCounts, setGenerationCounts] = useState<VoteData[]>([]);

  useEffect(() => {
    handleFetchResults();
  }, []);

  const handleFetchResults = async () => {
    const { data: votes, error } = await supabase
      .from('votes')
      .select('chosen_generation');

    if (votes && !error) {
      const countMap: Record<string, number> = {};

      votes.forEach((vote: { chosen_generation: string }) => {
        const chosenGeneration = vote.chosen_generation;
        countMap[chosenGeneration] = (countMap[chosenGeneration] || 0) + 1;
      });

      const data: VoteData[] = Object.entries(countMap)
        .sort(([, countA], [, countB]) => countA - countB) // Sort by count in ascending order
        .map(([chosen_generation, count]) => ({
          chosen_generation,
          count,
        }));

      setGenerationCounts(data);
    }
  };

  return (
    <div className='w-full flex justify-center'>
      <VoteBarChart data={generationCounts} />
    </div>
  );
};

export default PokemonResults;
