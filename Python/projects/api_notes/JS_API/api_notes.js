import { Configuration, OpenAIApi } from "openai";
import { writeFileSync } from 'fs';
import APIKEY from api_key

const configuration = new Configuration({
    organization: "org-mpaYTEpuV3ebZVgJ0bMZ06X2",
    apiKey: APIKEY,
});


const openai = new OpenAIApi(configuration);

const prompt = "a dragon climbing a 100 meter high tower looking down at people"

const result = await openai.createImage({
  prompt,
  n: 1,
  size: "1024x1024"
})

const url = result.data.data[0].url;
console.log(url);

//Save Image URL to Disk
const imgResult = await fetch(url);
const blob = await imgResult.blob();
const buffer = Buffer.from( await blob.arrayBuffer() )
writeFileSync(`./img/${Date.now()}.png`, buffer);