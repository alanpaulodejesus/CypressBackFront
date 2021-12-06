/// <reference types ="cypress"/>
require('cypress-xpath')

const createBot ='//div[contains(text(),"Criar do zero")]';

class Market{

    createBotZero(){
        cy.btnClickXpath(createBot);
    }

}

module.exports = Market;