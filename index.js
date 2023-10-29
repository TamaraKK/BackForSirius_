const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const cors = require('cors')
const schema = require('./schema')
const Customers = [{}]
const Trainings = [{}]
const registers = [{}]
const allGym = [{}]
const allPurchases = [{}]
const allPurchaseTraining = [{}]
const app = express()
app.use(cors())


const createCustomer = (input) =>{
    const id = Date.now()
    return {
        id, ...input
    }
}

const addTraining = (input) =>{
    const id = Date.now()
    return{
        id, ...input
    }
}

const addRegister = (input) =>{
    const id = Date.now()
    return{
        id, ...input
    }
}

const doPurchase = (input) =>{
    const id = Date.now()
    return{
        id, ...input
    }
}

const doPurchaseTraining = (input) =>{
    const income = cost*0.8
    return{
        income, ...input
    }
}

const root = {
    getAllCustomers: () =>{
        return Customers
    },
    getCustomer: ({id}) =>{
        return Customers.find(Customer => Customer.id==id)
    },
    createCustomer: ({input}) => {
        const Customer = createCustomer(input)
        Customers.push(Customer)
        return Customer
    },
    updateCustomer: ({input}) =>{
        Customers.input = input
    },
    deleteCustomer: ({id}) =>{
        Customers.delete(id)
        return Customers
    },
    addTraining: ({input}) =>{
        const Training = addTraining(input)
        Trainings.push(Training)
        return Training
    },
    deleteTraining: ({id}) =>{
        Trainings.delete(id)
        return Trainings
    },
    getAllTrainings: () =>{
        return Trainings
    },
    getTraining: ({id}) =>{
        return Trainings.find(Training => Training.id==id)
    },
    addRegister: ({input}) =>{
        const Register = addRegister(input)
        registers.push(Register)
        return Register
    },
    getAllGym: () =>{
        return allGym
    },
    getallPurchases: () =>{
        return allPurchases
    },
    doPurchase: (input) =>{
        const Purchase = doPurchase(input)
        allPurchases.push(Purchase)
        return Purchase
    },
    purchaseTraining: (input) =>{
        const purchaseTraining = doPurchaseTraining(input)
        allPurchaseTraining.push(purchaseTraining)
        return purchaseTraining
    }

}

app.use('/graphql', graphqlHTTP({
    graphiql:true,
    schema,
    rootValue: root 
}))

app.listen(5000, ()=> console.log('server OK on port 5000'))
