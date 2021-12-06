/// <reference types ="cypress"/>
import faker from 'faker'

const Login = require('../../page-objects/login.po')
const Account = require('../../page-objects/account.po')
const Application = require('../../page-objects/application.po')
const Market = require('../../page-objects/marketPlace.po')
const Builder = require('../../page-objects/builder.po')

const nome = faker.name.firstName();

describe('ChatBot', ()=>{

    const accountPage = new Account();
    const loginPage = new Login();
    const applicationPage= new Application();
    const marketPlacePage = new Market();
    const builderPage = new Builder();

    before(()=>{
        cy.UrlAdm();
        loginPage.loginWithSucess();
    })
    
    
    it('Create ChatBot with sucess', ()=>{

        applicationPage.btnCreateBot();
        marketPlacePage.createBotZero();
        applicationPage.insertNameBot(nome);
        builderPage.createBlock();
        expect(builderPage.validCreatedBlock());
    
    })

    after(()=>{
        
    })
})

