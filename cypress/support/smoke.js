require ('cypress-xpath');
import * as objectRepoJson from '../fixtures/objectRepo.json';

export class smoke{

  static login(email, password){
    cy.xpath(objectRepoJson.register.emailInputBox).type(email)
    cy.xpath(objectRepoJson.register.further).click()
    cy.xpath(objectRepoJson.register.passwordInputBox).type(password)
    cy.xpath(objectRepoJson.register.registerButton).click()
  }

}