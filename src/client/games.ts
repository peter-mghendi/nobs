import { createClient } from "./client";
import { Game, Response } from "./models";

export async function getGamesAsync(page: number): Promise<Response<Game[]>> {
    const client = createClient("https://localhost:7101");
    const { data } = await client.get<Response<Game[]>>(`games?page=${page}`);
    return data;
}