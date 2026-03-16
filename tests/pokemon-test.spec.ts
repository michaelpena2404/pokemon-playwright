import { test, expect} from '@playwright/test';
import { PokeApiClient } from '../api-test/services/pokeApiClient';
import { extractSpeciesNames } from '../api-test/helpers/extractSpeciesNames';
import { getSpeciesWeight } from '../api-test/helpers/getSpeciesWeight';
import { alphabeticalOrder } from '../api-test/helpers/alphabeticalOrder';

test('Should get Pokémon by name', async ({ request, baseURL }) => {
  const pokeApi = new PokeApiClient(request, baseURL!);
  const name = 'squirtle';
  const response = await pokeApi.getPokemonByName(name);
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.name).toBe(name);
});

test('Should get Pokémon species', async ({ request, baseURL }) => {
  const pokeApi = new PokeApiClient(request, baseURL!);
  const response = await pokeApi.getPokemonSpecies(7);
  expect(response.status()).toBe(200);
});

test('Should get Pokémon evolution', async ({ request, baseURL }) => {
  const pokeApi = new PokeApiClient(request, baseURL!);
  const response = await pokeApi.getPokemonEvolution(3);
  expect(response.status()).toBe(200);
  const body = await response.json();
  const speciesName = body.chain.species.name;
  expect(speciesName).toBe('squirtle');
});

test('Should get names and weights of evolutions', async ({ request, baseURL }) => {
  const pokeApi = new PokeApiClient(request, baseURL!);
  const evolutionResponse = await pokeApi.getPokemonEvolution(3);
  const chain = await evolutionResponse.json();
  const names = extractSpeciesNames(chain.chain);
  const speciesData = await getSpeciesWeight(pokeApi, names);
  const sortedSpecies = alphabeticalOrder(speciesData);
  console.log(sortedSpecies);
});