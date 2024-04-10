import http  from 'node:http';

const PORT = 3333; //porta do servidor 


//'Metodos: Get, post, put, path, delete'

/**
 * REQUISIÇÃO DO USUÁRIO
 * 1. corpo da requisição (resquest.body) (POST) todas as informções do corpo
 * 
 * 2.Parâmetro de busca e filtro (Search PARAMS, QUERRY PARAMS)
 * htpp://localhost:3333/users/2 (GET)
 * 
 * 3. Parâmetro de ROTA (ROUTE PARAMS) -  htpps://localhost:3333/users/1
 * (PUT, PATH, DELETE)
 */


 


//aarmazenar dados
const users = []
const server = http.createServer((request, response) => {
    const {method, url} = request 

    // console.log('Olá, Mundo!')

    if( url === '/users' && method === "GET" ){//Buscar todos os usuários
        response.setHeader('Content-Type', 'application/json');// contruindo um cabeça~lho
        response.end(JSON.stringify(users)); //JSON.stringify - server para conveter todos os elementos do array users em objeto json

    }else if(false){//Buscar um único usuário


    }else if(url === '/users' && method === "POST"){//Cadastrar um usuário
        let body = ''
        request.on('data', (chunk)=> {
            body += chunk.toString()
        })

        request.on('end', ()=>{
            const novoUsuario = JSON.parse(body)
            novoUsuario.id = '1'
            users.push(novoUsuario)
            response.writeHead(201, {'Content-Type': 'application/json'})
        })

        response.end(JSON.stringify(novoUsuario))

    }else if(true){//Atualizar um usuário


    }else if(true){//Deletar um usuário


    }else{//Recurso não encontrado


    }
});

server.listen(PORT, () => {
    console.log(`Sevidor on PORT: ${PORT}`);
});


// import http from 'node:http';

// const PORT = 3333; // Porta do servidor

// // Armazenar dados
// const users = [];
// const server = http.createServer((request, response) => {
//     const { method, url } = request;

//     if (url === '/users' && method === 'GET') {
//         response.setHeader('Content-Type', 'application/json');
//         response.end(JSON.stringify(users));
//     } else if (url === '/users' && method === 'POST') {
//         let body = '';
//         request.on('data', (chunk) => {
//             body += chunk.toString();
//         });

//         request.on('end', () => {
//             const novoUsuario = JSON.parse(body);
//             novoUsuario.id = '1';
//             users.push(novoUsuario);
//             response.writeHead(201, { 'Content-Type': 'application/json' });
//             response.end(JSON.stringify(novoUsuario));
//         });
//     } else {
//         // Implementar lógica para os outros casos (Buscar um único usuário, Atualizar um usuário, Deletar um usuário)
//         // ...
//         // Recurso não encontrado
//         response.writeHead(404, { 'Content-Type': 'text/plain' });
//         response.end('Recurso não encontrado');
//     }
// });

// server.listen(PORT, () => {
//     console.log(`Servidor on PORT: ${PORT}`);
// });
