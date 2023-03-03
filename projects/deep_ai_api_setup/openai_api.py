import os
import openai
from api_key import APIKEY
openai.organization = "org-mpaYTEpuV3ebZVgJ0bMZ06X2"
openai.api_key = APIKEY
openai.Model.list()

results = openai.Image.create(
    prompt="a smiling blue dragon climbing down a castle tower looking down at a crowd of people",
    n=2,
    size="1024x1024"
)

print(results)



# curl https://api.openai.com/v1/completions \
# -H "Content-Type: application/json" \
# -H f"Authorization: Bearer {APIKEY}" \
# -d '{"model": "text-davinci-003", "prompt": "Say this is a test", "temperature": 0, "max_tokens": 7}'