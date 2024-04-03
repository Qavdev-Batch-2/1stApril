import {signup} from "../fixtures/selectors.js"

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

describe('Testing Signup', ()=> {
  beforeEach(() =>{
    cy.visit('/')
  })

  it('Should be able to signup', ()=>{
    cy.get(signup.signupBtn,{force: true}).click()
    cy.get(signup.dontHaveAnAccBtn).click()
    cy.get(signup.firstNameField).type('Qavdev')
    cy.get(signup.lastNameField).type('Limited')
    cy.get(signup.emailField).type('suya@yopmail.com')
    cy.get(signup.phoneNumber).type('08153886451')
    cy.get(signup.password).type('sam12345')
    cy.get(signup.createAccBtn).click()
    cy.get(signup.pin).type('1234')

  })
})

