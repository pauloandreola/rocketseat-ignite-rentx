**RF** => Requisitos funcionais
**RNF** => Requisitos não funcionais
**RN** => Regras de negócios

# Cadastro de carro

**RF**
- Deve ser possível cadastrar um novo carro;
- Deve ser possível listar todas as categorias;
**RN**
- Não deve ser possível cadastrar um carro com uma placa já existente;
- Não deve ser possível alterar a placa de uma carro já cadastrado;
- O carro deve ser cadastrado, por padrão, com disponibilidade. (available);
- O usuário responsável pelo cadastro deve ser um usuário adminsitrador;

# Listagem de carros

**RF**
- Deve ser possível listar todos os carros disponíveis; (somente os disponíveis)
- Deve ser possível listar todos os carros disponíveis pelo nome da categoria;
- Deve ser possível listar todos os carros disponíveis pelo nome da marca;
- Deve ser possível listar todos os carros disponíveis pelo nome do carro;

**RN**
- O usuário não precisa estar logado no sistema;

# Cadastro de Especificação no carro

**RF**
- Deve ser possível cadastrar uma especificfação para um carro;
- Deve ser possível listar todas as especificações
- Deve ser possível listar todos os carros

**RNF**

**RN**
- Não deve ser possível cadastrar uma especificação para um carro não cadastrado;
- Não deve ser possível cadastrar uma especificação já existente para o mesmo carro;
- O usuário responsável pelo cadastro deve ser um usuário adminsitrador;

# Cadastro de imagens do carro

**RF**
- Deve ser possível cadastrar a imagem do carro
- Deve ser possível listar todos os carros; (disponíveis e não disponíveis)

**RNF**
- Utilizar o multer para upload dos arquivos

**RN**
- O usuário deve poder cadastrar mais de uma imagem para o mesmo carro;
- O usuário responsável pelo cadastro deve ser um usuário adminsitrador;

# Alugule de carro

**RF**
- Deve ser possível cadastrar um aluguel

**RNF**

**RN**
- O aluguel deve ter duração mínima de 24 horas;
- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário;
- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro;

***Para o desenvolvimento do sistema*** 
# rocketseat-ignite-rentx
Challenge from Rocketseat school to develop a new rent a car code

Dentro do VS Code

*Via console

npm init -y
npm i bcryptjs csv-parse express express-async-errors jsonwebtoken multer pg reflect-metadata ts-node swagger-ui-express tsyringe typeorm uuid 
npm i -D eslint eslint-config-airbnb-base eslint-config-prettier eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-import-helpers eslint-plugin-prettier jest prettier ts-jest ts-node ts-node-dev tsconfig-paths typescript @types/bcryptjs @types/express @types/jest @types/jsonwebtoken @types/mocha @types/multer @types/node @types/swagger-ui-express @types/uuid @typescript-eslint/eslint-plugin @typescript-eslint/parser
npx tsc --init (Gera o arquivo tsconfig.json)

Configurar script no package.json "dev": "ts-node-dev --poll --inspect --transpile-only --ignore-watch node_modules --respawn src/server.ts"

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

O link abaixo está desatacado logo na sequência.

https://www.notion.so/Prettier-e2c6a3ec188c4cce8890a3e16a0d6425#da104f9b05964ec1aaac067ab2bf8a54

npm i prettier eslint-config-prettier eslint-plugin-prettier -D

Aqui abaixo começa a configuração do eslintrs.json e algum arquivos e procedimentos que devem ser configurados.
## Configuração

O **Prettier** é mais uma ferramenta que vamos utilizar para ajudar na padronização de código, ele consiste em várias configurações que são feitas para que o código seja formatado para seguir um padrão.

Alguns exemplos de formatações que ele faz é a quebra de linha quando ela tem mais de 80 caracteres, adicionar `;` no final das linhas dentre outras funcionalidades muito úteis para um projeto.

<aside>
💡 ⚠️  Antes de começar a configuração é importante que você se certifique de remover a extensão **Prettier - Code Formatter** do seu VS Code, ela pode gerar incompatibilidades com as configurações que vamos fazer.

</aside>

<aside>
💡 As configurações são iguais para os projetos **NodeJS**, **ReactJS** e **React Native!**

</aside>

A primeira coisa que vamos fazer para a configuração do **Prettier** é a instalação dos pacotes no projeto, e faremos isso executando:

```bash
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```

Esse comando vai adicionar 3 dependências que serão as responsáveis por fazer a formatação do código e também integrar o **Prettier** com o **ESLint**.

Com a instalação feita vamos modificar o arquivo `.eslintrc.json` adicionando ao **final** do `"extends"` a seguintes regra:

```json
"plugin:prettier/recommended"
```

Nos `"plugins"` vamos adicionar ao **final** apenas uma linha:

```json
"prettier"
```

E nas `"rules"` vamos adicionar uma linha indicado para o **ESLint** mostrar todos os erros onde as regras do **Prettier** não estiverem sendo seguidas, como abaixo:

```json
"prettier/prettier": "error"
```

O arquivo final vai ficar assim:

```json
{
	...
  "extends": [
		...
    "plugin:prettier/recommended"
  ],
  ...
  "plugins": [
    ...
    "prettier"
  ],
  "rules": {
    ...
		"prettier/prettier": "error"
  },
  ...
}
```

E para resolver os conflitos entre as regras do **ESLint** e as regras do **Prettier** vamos criar um arquivo na raiz do projeto como `prettier.config.js` , nesse arquivo vamos adicionar 3 regras, sendo elas:

 `singleQuote` para utilizar aspas simples (`'`);

 `trailingComma` para adicionar vírgula (`,`) sempre ao final de um objeto que tenha sido quebrado em várias linhas

 `arrowParens` para que não seja adicionado parênteses (`()`) quando uma Arrow Function tiver apenas um parâmetro

O arquivo no final vai ficar assim:

```jsx
module.exports = {
  singleQuote: true, 
  trailingComma: 'all',
	arrowParens: 'avoid',
}
```

E para finalizar a configuração, vamos criar na raiz do projeto um arquivo `.eslintignore` e nele vamos adicionar a linha (se você já estiver com ele criado, apenas adicione):

```jsx
/*.js
```

E a configuração está finalizada, para garantir que o código seja formatado corretamente, você pode abrir os arquivos do projeto e salvar eles novamente.

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
Terceiro - Criar o caso de uso (UseCase) - Regras do negócio

**************

Primeiro, montar o caso de uso, (USeCase), ajustar o index, depois o controle (Controller), ajustar o index

Utilizar a extensão Multer, é um middleware, responsável pela upload dos dados (através do Insomnia para o VSCode) . Inicialmente está sendo executado na rota das categorias (categories.routes.ts) 

Primeiro - Importar o controle (Controller)

