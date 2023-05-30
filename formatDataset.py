import json
import re

nome_f = "plantas.json" 

with open(nome_f, "r") as file:
    # Load the JSON data from the file
    data = json.load(file)

adicionar = []
remover = []

for item in data:
    item["_id"] = item["Id"]
    del item["Id"]

    for key in item.keys():
        if bool(re.search(r"\s", key)):
            new_key = re.sub(r' ', r'', key)
            adicionar.append(new_key)
            remover.append(key)

    i = 0
    while i < len(adicionar):
        item[adicionar[i]] = item[remover[i]]
        del item[remover[i]]
        i += 1

    adicionar = []
    remover = []


json_string = json.dumps(data, indent=2, ensure_ascii=False)

with open(nome_f, "w") as file:
    file.write(json_string)