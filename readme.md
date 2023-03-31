# Projeto SmartNX - Desafio

https://user-images.githubusercontent.com/78919447/229140225-a04b980b-727c-4fa8-94b4-063e33386e4e.mp4

# Introdução
* Primeiramente, fiz um rascunho/protótipo no Figma para ter uma base inicial do projeto. O resultado final ficou diferente do rascunho por escolha minha, pois mudei algumas cores e layouts =D
![image](https://user-images.githubusercontent.com/78919447/229141822-6cdcd759-cf57-4916-85bf-7895ddee61b0.png)


##  1. Como iniciar o projeto?
  ### 1.1. Clonar o repositório
   * Primeiramente, é preciso clonar o repositório na sua máquina local. No terminal, você pode digitar "git clone (link do repositorio)".
   
  ### 1.2. Instalar os pacotes
  * Logo após clonar o repositório, é necessário utilizar o gerenciamento de pacotes, como o "npm" ou o "yarn" para instalar os pacotes necessários para rodar a aplicação.
  ```
    npm install
  ```
  ```
    yarn install
  ```
  ### 1.3. Após todos os passos anteriores, a aplicação pode ser inicializada pelo seguinte comando:
  ```
    npm run dev
  ```
  * Lembrando que é necessário estar na pasta da aplicação para executar a aplicação.
  
## 2. Tecnologias Utilizadas: 
* ReactJs (além do vite como ferramenta), HTML, CSS, JavaScript e Material UI.

## 3. Organização do projeto:
<div align="center">
  <img src="https://user-images.githubusercontent.com/78919447/229131787-dae5a718-7edd-4fc6-bae9-c53846419f94.png" />
</div>

## 3.1.0 Arquivos principais:

### 3.1.1. package.json e package-lock.json
* São os arquivos que guardam dados das versões dos pacotes/bibliotecas do projeto, além de scripts, como o de inicialização e build. A partir do comando da seção 1.2,
as versões das dependências que estão no package.json são instaladas na máquina local para funcionamento da aplicação.

### 3.1.2. node_modules
* Essa pasta estão todas as dependências necessárias para executar a aplicação com eficácia, que foi gerada após o comando da seção 1.2.

### 3.1.3. index.html
* Esse arquivo é o HTML geral de toda a aplicação, mas não se mexe diretamente nele, pois o react faz todo o HTML junto com a utilização do JavaScript
e da renderização dos "Components".

## 3.2.0. Arquitetura das pastas:

### 3.2.1. ./src
* A pasta chamada "source", abreviada como "src", possui a maior parte de arquivos e pastas da aplicação, é nela que estão as pastas assets, components,
pages, services, entre outras.

### 3.2.2. ./assets
* Em assets, normalmente, armazena os arquivos "externos" como, por exemplo, imagens. Nessa aplicação, tem-se apenas a imagem da Header que é a logo da Smart NX.

### 3.2.3. ./components
* Nessa pasta, estão os componentes principais da página, como a Header e a Footer.

### 3.2.4. ./pages
* Em pages, deve estar todas as páginas da aplicação, porém, esse projeto tem apenas 1 página, a "Home". Além disso, vale ressaltar que dentro de cada page
tem sua pasta components onde estão cada componente utilizado para o desenvolvimento dessa página. Por exemplo, a page "Home" utiliza o componente
"ListCharacter".

### 3.2.5. ./services
* A pasta services está a chamada da api "SWAPI", utilizando o axios. Há a separação das requisições em classes, para melhor organização do projeto, por exemplo, 
tem-se a classe "Character", TODAS as requisições relacionadas com personagens, seja post, get, put, até mesmo delete, devem estar nessa classe, mas em funções
diferentes. Um outro exemplo seria se a aplicação tivesse que cadastrar um usuario, deveria ter uma classe "User" e dentro dela estariam todas as funções
(chamadas de api) relacionadas ao usuário.


## Observações : 
* Gostaria de ressaltar que coloquei apenas 5 navigations entre os personagens, totalizando em 50 personagens na lista, mas por escolha minha, 
pois percebi que as chamadas dos personagens na api estão em url diferentes, visto que, a cada "url page" possui apenas 10 personagens. 
Dessa forma, pensei em realizar 5 requisições, para as 5 primeiras pages de personagens, em variáveis diferentes e, após isso, concatenar tudo em uma variável. 
Fiquei em dúvida se essa é uma boa prática, se vocês possuem alguma sugestão, se há uma maneira melhor de fazer isso.
<div align="center">
 <img width="500px" src="https://user-images.githubusercontent.com/78919447/229135878-c49d8f20-2a0d-4174-99dd-2cce835c5165.png" />
</div>


* Nessa aplicação, não foi necessário utilizar o react-routes, mas se tivesse mais páginas seria preciso utilizá-lo.

* Outra observação é que percebi que as chamadas da api demoram um pouco para carregar e, ao pesquisar na internet, descobri que pode ser a parte do backend, ou seja, da própria criação dessa api, mas como não tenho certeza se é isso, fiquei em dúvida se foi devido à várias chamadas que realizei na função getCharacter() no arquivo Home.jsx.

* Também, pensei que seria uma boa ideia ressaltar que escrevi o código em inglês, entretanto há partes em português, devido à visualização na parte da execução, ou seja, as partes em pt-br são somentes as que aparecem ao usuário rsrs. Por isso, há essa discrepância, mas sempre gosto de seguir um padrão.