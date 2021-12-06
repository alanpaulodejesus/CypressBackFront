/// <reference types ="cypress"/>
import faker from 'faker'
const objFixTures = require('../../fixtures/example.json')

const num = faker.name.firstName();

describe('Test Back End Blip', ()=>{

    it('Send message', ()=>{

            cy.request({
                    
            url: objFixTures.urlMessage,
            method:'POST',
            headers:{ 
                Authorization: objFixTures.tokenMessage,
                'Content-Type': 'application/json'},
            body:{
                id: '1',
                to: objFixTures.idBot,
                type: 'text/plain',
                content: 'Olá estou enviando mensagem'         
                },
                failOnStatusCode: false
            })
            .as('response');
            cy.get('@response').its('status').should('be.equal', 202);            
    }) 

    it('Send message No Authorization', ()=>{

        cy.request({
                
        url: objFixTures.urlMessage,
        method:'POST',
        headers:{ 
            Authorization: objFixTures.tokenMessage+'=',
            'Content-Type': 'application/json'},
        body:{
            id: '1',
            to: objFixTures.idBot,
            type: 'text/plain',
            content: 'Olá estou enviando mensagem'         
            },
            failOnStatusCode: false
        })
        .as('response');
        cy.get('@response').its('status').should('be.equal', 401);            
}) 

    it.skip('Create Tickect', ()=>{

        cy.request({
                
        url: objFixTures.urlTicket,
        method:'POST',
        headers:{ 
        Authorization: objFixTures.tokenMessage,
        'Content-Type': 'application/json'},
        body:{
                id: "{{$guid}}",
                to: "postmaster@desk.msging.net",
                method: "set",
                uri: "/tickets/teste"+num+"@0mn.io",
                type: "text/plain",
                resource: "Informação"   
            },
            failOnStatusCode: false
        })
        .as('response');
        cy.get('@response').its('status').should('be.equal', 200);
        //cy.get('@response.resource.id').should('exist');             
    })
})  
