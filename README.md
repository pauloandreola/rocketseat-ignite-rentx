# rocketseat-ignite-rentx
Challenge from Rocketseat school to develop a new rent a car code

Dentro do VS Code

*Via console

npm init -y
npm i 
	express
	typescript -D
	@types/express -D
	tsc -D
npx tsc --init (Gera o arquivo tsconfig.sjon)

npm i ts-node-dev -D

Configurar script no package.json "dev": "ts-node-dev --transpile-only --ignore-watch node-modules --respawn src/server.ts"

*Via console

"npm run dev"

Desabilitar o comando "strict": true,  dentro do tsconfig.json (para não gerar erro)

*Via console

Instalação do Eslint - 

https://www.notion.so/ESLint-822d59afeafc47e39527be8cabb80b00#9897d6d544464d348c920e27621fc2ef

Documentação

https://prettier.io/docs/en/options.html

npm i eslint -D
npx eslint --init

Após o comando acima teremos uma sequência de 9 perguntas a serem respondidas conforme abaixo. Com excessão a 9° pergunta que deve ser analisado qual gerenciador de pacote estará sendo utilizado.

**1 - How would you like do use Eslint?** (Qual a forma que queremos utilizar o **Eslint**)

- **To check syntax only** ⇒ Checar somente a sintaxe
- **To check syntax and find problems** ⇒ Checar a sintaxe e encontrar problemas
- **To check syntax, find problems and enforce code style** ⇒ Checar a sintaxe, encontrar problemas e forçar um padrão de código

Nós iremos escolher a última opção `To check syntax, find problems and enforce code style`.

**2 - What type of modules does your project use?** (Qual tipo de módulo seu projeto usa?)

- **JavaScript modules (import/export)**
- **CommonsJS (require/exports)**

Como em nosso projeto estamos utilizando o **Typescript,** vamos selecionar a **primeira** opção `Javascript modules (import/export)`

**3 - Which framework does your project use?** (Qual framework seu projeto está utilizando?)

- **React**
- **Vue.JS**
- **None of these**

Como estamos configurando o nosso **backend** vamos escolher a opção `None of these`

**4 - Does your project use TypeScript?** (Seu projeto está utilizando Typescript?)

- **No**
- **Yes**

Vamos selecionar a opção `Yes`.

**5 - Where does your code run?** (Onde seu código está rodando?)

- **Browser**
- **Node**

Vamos selecionar a opção **Node**, para isso, utilizamos a tecla `Espaço` para desmarcar o **Browser** e selecionarmos a opção `Node`

**6 - How would you like to define a style for your project?** (Qual guia de estilo queremos utilizar?) 

- **Use a popular style guide ⇒** Padrões de projetos já criados anteriormente por outra empresa
- **Answer questions about your style ⇒** Criar seu próprio padrão de projeto

Vamos selecionar a primeira opção `Use a popular style guide`

**7 - Which style guide do you want to follow?** (Qual guia de estilo você deseja seguir?)

- **Airbnb: [https://github.com/airbnb/javascript](https://github.com/airbnb/javascript)**
- **Standard: [https://github.com/standard/standard](https://github.com/standard/standard)**
- **Google: [https://github.com/google/eslint-config-google](https://github.com/google/eslint-config-google)**

Nós iremos utilizar a primeira opção `Airbnb`. Com ela, nós vamos definir que nosso projeto utilizará **ponto e vírgula** ao final de cada linha, utilizará **aspas simples** e algumas outras configurações. Para saber todas as possíveis configurações, acessar a documentação da guia desejada. 
Lembrando que, não há um padrão correto, nós iremos utilizar o **Airbnb**, porém você pode utilizar qualquer guia, desde que seu time todo também esteja utilizando.

**8 - What format do you want your config file to be in?** (Qual formato de configuração do Eslint que você deseja salvar?)

- **Javascript**
- **YAML**
- **JSON**

Vamos selecionar a opção `JSON`.

Depois que respondemos as perguntas, o **ESLint** irá informar quais as dependências necessárias de acordo com a sua configuração e pedir para instalá-las automaticamente.

**9 - Would you like to install them now with npm?** (Você deseja instalar as dependências agora utilizando npm?)

 Caso estivéssemos utilizando o **NPM** a resposta seria `Yes`, mas como estamos utilizando o **Yarn** vamos responder `No` e adicionar manualmente as dependências.

Com as dependências instaladas vamos criar na raiz do projeto um arquivo `.eslintignore` com o conteúdo abaixo para ignorar o Linting em alguns arquivos:

```
/*.js
node_modules
dist
```

Agora vamos começar a configuração do arquivo que foi gerado na inicialização do **ESLint**, o `.eslintrc.json` , a primeira coisa a ser feita é adicionar dentro de `"extends"` a linha:

```json
"plugin:@typescript-eslint/recommended"
```

Em seguida, adicionamos dentro de `"rules"` as seguintes configurações:

```json
"no-use-before-define": "off",
"@typescript-eslint/no-use-before-define": [
	"error"
]
```
Por fim, para que o **Node.js** consiga entender arquivos **Typescript** é necessário acrescentar uma configuração adicional nas importações pois por padrão vai ser apresentado um erro dizendo que as importações de arquivos **Typescript** não foram resolvidas. Para resolver isso basta instalar uma dependência que habilite essa funcionalidade:

```bash
yarn add eslint-import-resolver-typescript -D
```

Agora para que essa configuração funcione corretamente vamos adicionar logo abaixo das `"rules"` no `.eslintrc.json` o seguinte:

```json
"settings": {
    "import/resolver": {
      "typescript": {}
    }
  }
```

E dentro das `"rules"` adicione o trecho abaixo para que as importações de arquivos `.ts` não precisem da extensão do arquivo:

```json
"import/extensions": [
    "error",
    "ignorePackages",
    {
      "ts": "never"
    }
  ]
```

*Via console

Instalação do Prettier

Inicialmente se a extensão estiver instalada no VS Code deve ser desisntalada.

https://www.notion.so/Prettier-e2c6a3ec188c4cce8890a3e16a0d6425#da104f9b05964ec1aaac067ab2bf8a54

npm i prettier eslint-config-prettier eslint-plugin-prettier -D

Documentação 

https://prettier.io/docs/en/options.html


***************
Resumo de organização das pastas:

UseCase = Funcionalidade = Criação, listagem, importação, etc... de categoria, de usuário, de veículo, etc...
***************

Criação de UseCase/Funcionalidades
1 - Criar o arquivo Controller - class, export, handle retorno por response e return 
2 - Criar o arquivo UseCase - class, export, 
3 - Criar o arquivo Index

**************
Construção das rotas

Primeiro - Criar o repositório (Repository)
Segundo - Criar o controlador (Controller)
Terceiro - Criar o caso de uso (UseCase)

**************

Primeiro, montar o caso de uso, (USeCase), ajustar o index, depois o controle (Controller), ajustar o index

Utilizar a extensão Multer, é um middleware, responsável pela upload dos dados (através do Insomnia para o VSCode) . Inicialmente está sendo executado na rota das categorias (categories.routes.ts) 

Primeiro - Importar o controle (Controller)

