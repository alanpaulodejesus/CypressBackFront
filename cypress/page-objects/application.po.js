/// <reference types ="cypress"/>
require('cypress-xpath')

const btnCreateChat ='.bp-btn';
const inputNameBot='.material-wrapper';
const finishCreateBot='.bp-btn';
const btnStart ='//*[contains(text(),"Começar")]';


class Application{

    btnCreateBot(){
        cy.btnClick(btnCreateChat);
    }

    insertNameBot(nome){
        cy.inputText(inputNameBot,nome);
        cy.btnClick(finishCreateBot,{timeOut:45000});
        cy.wait(8000)
        cy.btnClickXpath(btnStart,{timeOut:45000});
    }


}

module.exports = Application;