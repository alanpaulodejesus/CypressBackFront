/// <reference types ="cypress"/>

describe('Login', ()=>{

    it('Login com sucesso', ()=>{

                cy.request({
                    url: 'xxxxxxxxx',
                    method:'POST',
                    body:{
                        email: 'xxxxxxxxx',
                        password:'123456'
                    }
                })//.its('body.token').should('not.be.empty')
                .as('response');
                cy.get('@response').its('status').should('be.equal', 200);
    })   

    it('Login inválido', ()=>{

        cy.request({
            url: 'xxxxxxxxx',
            method:'POST',
            failOnStatusCode: false,
            body:{
                email: 'xxxxxxxxxxx',
                password:'123456'
            }
        }).as('response');

        cy.get('@response').its('status').should('be.equal', 401);
    })   

})