const express =  require(`express`);

const app = express();

app.use(express.json());

const { v4: uuidv4 } = require(`uuid`);

const customers = []

// Middleware recebe 3 parametros

function verifyIfExistsAccountCPF(request, response, next){

    const { cpf } = request.headers;

    const customer = customers.find( customers => customers.cpf === cpf );

    if(!customer){
        return response.status(400).json({ error: "Erro customer not found"});
    }

    return next();

}

/**
 * cpf - string
 * name - string
 * id - uuid
 * stantemant []
 */
app.post("/account", (request, response) => {

    const {cpf, name} = request.body;

    const customersAlreadyExists = customers.some(
        (customers) => customers.cpf === cpf
    );
    
    if(customersAlreadyExists){
        return response.status(400).json({error: `Customer already exists!`})
    }

    customers.push({
        cpf,
        name,
        id: uuidv4(),
        statement : [],
    });

   return response.status(201).send()

});

//app.use(veryfyUfExistsAccountCPF)

app.get("/statement", verifyIfExistsAccountCPF, (request, response) => {
   

    return response.json(customer.statement);

});

app.listen(3333);