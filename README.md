# `Cadastros de Clientes`

<p>Aplicação com o untuito de:<br>

- 1º: Cadastrar um usúario;<br>
- 2º: Ser possível o usuáro efetuar login no sistema;<br>
- 3º: O usuário poderá cadastrar clientes, editá-los e excluí-los;
- 4º: Cadastrar contatos em cada cliente, editá-los e excluí-los;
<hr>
<br>

## `Tecnologias utilizadas no projeto`

<br>
<div id="tecs"style='display:flex; gap: 5px;'><br>
   <img align="center" alt="Html5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">

   <img align="center" alt="css" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">

   <img align="center" alt="react" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">

   <img align="center" alt="Typescript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">

   <img align="center" alt="material-ui" src="https://img.shields.io/badge/material ui-007ACC?style=for-the-badge&logo=mui&logoColor=white">

   <img align="center" alt="express" src="https://img.shields.io/badge/express-007ACC?style=for-the-badge&logo=express&logoColor=white">

   <img align="center" alt="express" src="https://img.shields.io/badge/TypeORM-007ACC?style=for-the-badge&logo=javascript&logoColor=white">

</div></br>
<hr>
<br>


## `Instruções para rodar o porjeto com DOCKER`

### OBS.: Esta aplicação utiliza por padrão as PORTAS: 3000, 5433 e 8000. Certifique-se que estas portas estajam livres em sua maquina para que não haja conflitos!! 
<br>

### - Dentro da pasta BACKEND-EXPRESS crie o arquivo .env conforme o .env.example: troque o "postgres_user" e o "postgress_password" do DATABASE_URL e as demais variáveis pelos seus dados.

<br>

```
DATABASE_URL="postgres://postgres_user:postgres_password@customer_base_db:5432/customer_base_db"
SECRET_KEY=
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=customer_base_db

```

<hr>
<br>

### - Na pasta raiz do projeto Fullstack, abra o terminal e execute o comando:
```
docker compose up
```
<hr>
<br>

## `Acessse o Frontend pelo navegador`

```
http://localhost:3000
```

