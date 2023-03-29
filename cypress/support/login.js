Cypress.Commands.add('gui_login', (
    user = 'ls@multti.com',
    password = "123456",
) => {
    cy.visit('/');
    cy.get(":nth-child(1) > .form-control").type(user);
    cy.get(".input-group-merge > .form-control").type(password, { log: false });
    cy.get('.btn').click()
   // cy.get('span[class="+s-inQP7fPFOTN-QSmBCJQ=="]').click()
    cy.contains('Abra ou transfira sua conta').should('be.visible')
});

Cypress.Commands.add('sessionLogin', (
    user = 'ls@multti.com',
    password = "123456"
) => {
    const login = () => cy.gui_login(user, password);

    cy.session(user, login);
});
Cypress.Commands.add('emailAndPasswordInvalid', () => {
    cy.clearLocalStorage()
    cy.visit('/')
    cy.get(':nth-child(1) > .form-control').type('testeerrado@gmail.com').should('be.visible')
    cy.get('.input-group-merge > .form-control').type('000000').should('be.visible')
    cy.get('.btn').click()
    cy.get('div[class="Toastify"]').should('have.text', 'O campo email selecionado é inválido.')
})
Cypress.Commands.add('passwordInvalid', () => {
    cy.clearLocalStorage()
    cy.visit('/')
    cy.get(':nth-child(1) > .form-control').type('ls.@multti.com').should('be.visible')
    cy.get('.input-group-merge > .form-control').type('000000').should('be.visible')
    cy.get('.btn').click()
    cy.get('div[class="Toastify"]').should('have.text', 'O campo email selecionado é inválido.')
})
Cypress.Commands.add('emailInvalid', () => {
    cy.clearLocalStorage()
    cy.visit('/')
    cy.get(':nth-child(1) > .form-control').type('testeerrado@gmail.com').should('be.visible')
    cy.get('.input-group-merge > .form-control').type('123456').should('be.visible')
    cy.get('.btn').click()
    cy.get('div[class="Toastify"]').should('have.text', 'O campo email selecionado é inválido.')
})
