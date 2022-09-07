/// <reference types="cypress" />

export {};

const submitButton = '[data-testid="create__post--button"'

describe('<Posts />', () => {
  context('Posts Page', () => {
    before(() => {
      cy.visit("/posts")
    })

    it('should be able to submit a post with optimistic update', () => {
      const phraseText = 'Thats why i love rust, cypress test'

      cy.get(submitButton).should('be.disabled')

      cy.get('textarea').type(phraseText)

      cy.get(submitButton).should('not.be.disabled')

      cy.get(submitButton).click()

      cy.get(submitButton).should('be.disabled')

      cy.get('p').contains(phraseText)
    });


    it('should be able to visit a user profile', () => {
      cy.get('img').first().click()

      cy.url().should('include', '/users/')
    });
  });
});
