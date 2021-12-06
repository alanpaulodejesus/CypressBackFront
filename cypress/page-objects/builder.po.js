/// <reference types ="cypress"/>
require('cypress-xpath')

const btnCreateBlock ='.new-state';
const validCreatedBot='.builder-node-container';

class Builder{

    createBlock(){
        cy.btnClick(btnCreateBlock);
    }

    validCreatedBlock(){
        cy.get(validCreatedBot, {timeOut:45000}).should('exist');
}
}

module.exports = Builder;