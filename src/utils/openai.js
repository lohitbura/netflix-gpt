import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_GPT_KEY, 
   dangerouslyAllowBrowser: true// defaults to process.env["OPENAI_API_KEY"]
});

export default openai;