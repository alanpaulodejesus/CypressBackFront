/// <reference types ="cypress"/>

describe('Acess', ()=>{

    it('Acess aplication', ()=>{
                cy.getToken('xxxxxxxx', '123456')
                .then(token=>{

                        cy.request({
                            url: 'xxxxxxxxxxxx',
                            method:'GET',
                            headers:{ Authorization: `Bearer ${token}` },
                            
                            failOnStatusCode: false
                        }).as('response');
                
                        cy.get('@response').its('status').should('be.equal', 200);        
                    
                });
                
    })   

})
