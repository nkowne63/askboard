export const add = (a: number, b: number) => a + b;
import { OpenAI as Client } from "openai";

const ApiKeySymbol = Symbol("ApiKey");
type ApiKeySymbol = typeof ApiKeySymbol;

type ApiKey = string & { [ApiKeySymbol]: never };

export const parseApiKey = (apiKey: string): ApiKey => {
  if (!apiKey) {
    throw new Error("API key is required");
  }
  return apiKey as ApiKey;
}

type ThreadsRepository = {}
type AssistantsRepository = {}

export type ClientInfo = {
    client: Client,
    threads: ThreadsRepository
    assistants: AssistantsRepository
}