const express =  require(`express`);

const app = express();

app.use(express.json());

const { v4: uuidv4 } = require(`uuid`);

const customers = []

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
        stantemant : [],
    });

   return response.status(201).send()

});

app.get("/account/:cpf", (request, response) => {

    const { cpf } = request.params

    console.log(cpf)

    return response.json({cpf})

});

app.listen(3333);