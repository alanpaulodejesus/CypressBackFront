/// <reference types ="cypress"/>

const inputLogin ='#email';
const inputPassword ='#password';
const inputEntry ='#blip-login';
const validUserAcess='.author-details';
const btnOut ='#logout-link';

class Login{

    logout(){
        cy.btnClick(btnOut);
    }

    loginWithSucess(){
        cy.inputText(inputLogin, 'alanpaullo@yahoo.com.br');
        cy.inputText(inputPassword,'123456');
        cy.btnClick(inputEntry);
    }

    validUserAcess(){
        cy.get(validUserAcess, {timeOut:25000}).should('exist');
    }
}

module.exports = Login;