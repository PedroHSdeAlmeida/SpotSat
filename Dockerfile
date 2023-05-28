# Não está concluído. Procurei a estudar e entender de fato o que é e como funciona o docker, mas eu estava perdendo muito 
# tempo no seu desenvolvimento, e não estava tendo progresso, a aplicação só não funcionava no docker, cheguei a criar a 
# imagem e um container com a aplicação a partir dessa imagem, rodei, espelhei a porta do meu localhost na do docker e as
# requisições http só não funcionavam, então, decedi deixar o docker de lado e priorizar o desenvolvimento da parte 5 do 
# desafio

FROM node:latest

WORKDIR /app

COPY package.json package-lock.json* tsconfig-node.json ./
RUN npm install

COPY src ./src

RUN npx tsc --project tsconfig-node.json

FROM node:14-alpine

WORKDIR /app

COPY --from=builder /app/package.json .
COPY --from=builder /app/dist .

RUN npm install --only=production

CMD ["ts-node", "--project", "tsconfig-node.json", "src/app.ts"]
