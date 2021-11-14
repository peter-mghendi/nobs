import { createClient } from "./client";
import { Game, Response } from "./models";

/**
 * Gets games from the specified page.
 * 
 * @param page The page to get.
 * @returns A paginated list of games.
 */
export async function getGamesAsync(page = 1): Promise<Response<Game[]>> {
    const client = createClient("https://localhost:7101");
    const { data } = await client.get<Response<Game[]>>(`games?page=${page}`);
    return data;
}