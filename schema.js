const {buildSchema} = require('graphql')

const schema = buildSchema(`
    type Customer{
        id: ID
        username: String!
        email: String!
        registers: [Register!]
    }

    input CustomerInput{
        id: ID
        username: String!
        email: String!
        registers: [InputRegister!]
    }

    input InputRegister{
        id:ID
        title: String!
        content: String!     
    }

    type Register{
        id:ID
        title: String!
        content: String!     
    }

    type Training{
        id: ID
        type: String!
        cost: Int!
        gym: [Gym!]!
    }

    input inputGym{
        id: ID
        branchName: [brachInput!]!
        nameAdmin: String!
        teleAdmi: Int!
        training: [inputTraining!]
        FreePlaces: Int! 
    }

    input inputTraining{
        id: ID
        type: String!
        cost: Int!
        gym: [inputGym!]!
    }

    type brachName{
        name: String!
    }

    input brachInput{
        name: String!
    }

    type Gym{
        id: ID
        branchName: [brachName!]!
        nameAdmin: String!
        teleAdmi: Int!
        training: [Training!]
        FreePlaces: Int!
    }

    type Purchase{
        id: ID
        training: [Training!]!
        customer: [Customer!]!
        cost: Int!
        income: Int 
    }

    input PurchaseInput{
        id: ID
        training: [inputTraining!]!
        customer: [CustomerInput!]!
        cost: Int!
        income: Int
    }

    input purchaseTrainingInput{
        id: ID
        training: [inputTraining!]!
        customer: [CustomerInput!]!
        cost: Int!
        income: Int
    }

    type Query{
        getAllCustomers:[Customer]
        getCustomer(id: ID): Customer
        getAllTrainings: [Training]
        getTraining(id: ID): Training
        getAllGym: [Gym]
    }

    type Mutation{
        createCustomer(input: CustomerInput): Customer
        deleteCustomer(id: ID): Customer
        addTraining(input: inputTraining): Training
        addRegister(input: InputRegister): Register
        deleteTraining(id: ID): Training
        doPurchase(input: PurchaseInput): Purchase
        purchaseTraining(input: purchaseTrainingInput): Purchase
    }

    
`)


module.exports = schema