import Anthropic from "@anthropic-ai/sdk";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients a user has. Suggest a recipe using some or all of those ingredients, avoiding extras. Format your response in markdown.
`;

const anthropic = new Anthropic({
  apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
  dangerouslyAllowBrowser: true  // ⚠️ Not for production!
});

export async function getRecipeFromChefClaude(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");

  const msg = await anthropic.messages.create({
    model: "claude-3-haiku-20240307",
    max_tokens: 1024,
    system: SYSTEM_PROMPT,
    messages: [
      {
        role: "user",
        content: `I have ${ingredientsString}. What should I make?`,
      },
    ],
  });

  return msg.content[0].text;
}
