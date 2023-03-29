import { faker } from '@faker-js/faker'
let Name = "William teste automação"
let descricao = "teste automação"
let data = "10/03/2023"
let CEP = '01153 000'
let Faker = faker.company.name()
let number = faker.datatype.number({ min: 84654625003 })
let email = faker.internet.email()

Cypress.Commands.add('editCourse', () => {
    cy.visit('/cursos')
    cy.get('[class="btn btn-outline-secondary"').click()
    cy.get('[placeholder="Digite o que deseja buscar"]').type(Name).wait(2000)
    cy.get('svg[width="15"').eq(3).click()
    cy.contains(`Editar`).click()
    cy.get('#main-data-button').click().should('have.text', 'Avançar')
    cy.get('[class="rdw-editor-main"').eq(2).type(descricao)
    cy.get('#sales-settings-button').click().should('have.text', 'Avançar')
    cy.get('[class="form-control"').eq(12).type(data)
    cy.get('#course-settings-button').click().should('have.text', 'Avançar')
    cy.get('[name="pre_sale"]').check({ force: true })
    cy.contains('Pré-Venda').should('be.visible')
    cy.get('#course-modalities-button').click().should('have.text', 'Avançar')
    cy.get('[placeholder="00000-000"').type(CEP).should('be.visible')
    cy.get('#course-display-button').click().should('have.text', 'Avançar')
    cy.get('[class="btn btn-secondary"').last().click()
    cy.get('[name="title"').type(Name)
    cy.get('[name="slug"').last().type(Faker)
    cy.get('[class="rdw-editor-main"').last().type(descricao)
    cy.get('[class="btn btn-primary-default').last().click().should('have.text', 'Salvar Módulo')
    cy.get('#add-content-button').click()

})