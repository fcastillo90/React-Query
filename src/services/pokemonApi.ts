import { BASE_URL } from "config";
import { useQuery } from "react-query";
import { GetPokemonListQuery, Pokemon, PokemonList } from "types";

export function useGetPokemonList({offset, limit}: GetPokemonListQuery): [PokemonList | undefined, boolean] {
  const { data, isFetching } = useQuery<PokemonList>(['pokemonList', offset], 
    async () => (
      fetch(`${BASE_URL}/pokemon?offset=${offset}&limit=${limit}`)
      .then((res) => res.json())
    ), 
    {
      initialData: {
        count: 0,
        next: '',
        previous: null,
        results:  []
      }
    }
  )
  
  return [ data, isFetching ]
}

export function useGetPokemonByName(name: string): [Pokemon | undefined, boolean] {
  const { data, isFetching } = useQuery<Pokemon>(['pokemonDetail', name], 
    async () => (
      fetch(`${BASE_URL}/pokemon/${name}`)
      .then((res) => res.json())
    ), 
    {
      initialData: {
        abilities: [],
        base_experience: 0,
        forms: [],
        game_indices: [],
        height: 0,
        held_items: [],
        id: 0,
        is_default: false,
        location_area_encounters: '',
        moves: [],
        name: '',
        order: 0,
        past_types: [],
        species: {
          name: '',
          url: ''
        },
        sprites: {
          back_default: '',
          back_female: '',
          back_shiny: '',
          back_shiny_female: '',
          front_default: '',
          front_female: '',
          front_shiny: '',
          front_shiny_female: '',
        },
        stats: [],
        types: [],
        weight: 0,
      }
    }
  )

  return [ data, isFetching ] 
}