import { Inngest} from "inngest";

export const inngest = new Inngest({
    id: 'stockstream',
    ai: { gemini: { apiKey: process.env.GEMINI_API_KEY! }}
})