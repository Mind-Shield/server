# Mind-Shield Server

## Tecnologias

-   NestJS
-   TypeScript
-   Prisma ORM
-   MySql
-   Python
-   Swagger: API Documentation
    <br>

## Estruturas de pastas
```
├── prisma
│    ├── schema.prisma
│
├── src
│    ├── prisma
│    ├── casl
│    ├── class
│    ├── common
│    ├── guards
│    ├── ml
│    ├── prisma
│    ├── tests
│    ├── user
│    ├── app.module.ts
│    ├── main.ts
│
├── LICENSE
├── model_loader.py
├── package.json
├── README.md
```

<br>

## Rodando a aplicação

Para rodar a aplicação existem algumas dependências que precisam ser instaladas devido as tecnologias utilizadas, são elas:

-   NestJS
-   Python-shell

### Rodar servidor

Para executar o servidor back-end é necessário entrar no repositório do back-end chamado `server` e executar os seguintes comandos para instalar as dependências do projeto e, em seguida, executar o servidor.

```
  $ npm i
  $ npm run start:dev
```

<br>

### Testando a aplicação
A documentação e testes da API estão disponiveis online, a partir do seguinte link: [Link](http://44.193.74.82:5500/api)

Obs: Para testar todos os endpoints da aplicação, primeiro é necessário se autenticar na aplicação através do endpoint de autenticação (auth)`/auth/signin`. Abaixo estão listadas as credencias (uma para aluno, outra para professor), mas no link já possui uma credencial salva para testes.

#### Credenciais de acesso no login
Credencial do Estudante <br>
email: ana@gmail.com <br>
senha: mortadela <br>

Credencial do Professor (admin) <br>
email: vinicios@gmail.com <br>
senha: mortadela <br>

Quando executar o endpoint, ele irá devolver um `access_token`. Com isso basta apenas copiar e colar esse acces_token no botão de `Authorize` no topo da página e todos os endpoints estarão liberados.


## License

Distributed under the MIT License. See [License](https://github.com/Mind-Shield/server/blob/main/LICENSE) for more information.

