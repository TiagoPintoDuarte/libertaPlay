import { faker } from '@faker-js/faker'
let Faker = faker.company.name()
let name = "William teste automação"
let descricao = "teste automação"
let data = "10/03/2023"
let valor = "100"
let Empresa = faker.company.bs()
let number = faker.datatype.number({ min: 84654625003 })
let email = faker.internet.email()
const uploadPdf = ('cypress/fixtures/fixture.pdf')
const uploadImage = ('cypress/fixtures/image.jpg')

//--------------------------Caminho para cadastros---------------------------------//
Cypress.Commands.add('allPath', (
    path = undefined,
    ifNumber = undefined
) => {
    cy.visit('/')
    cy.get('a[class="nav-menu-main menu-toggle hidden-xs is-active nav-link"]').click()
    cy.get('[class="d-flex align-items-center"').eq(6).click()
    cy.get('.show > :nth-child(1) > [href="/"]').click().should('be.visible')
    cy.contains(`Cadastros`).should('be.visible')
    if (ifNumber == undefined) {
        cy.contains(`${path}`).click()
    } else {
        cy.get('[class="sub-item d-flex align-items-center"').eq(11).click()
    }
})
//--------------------------Delete---------------------------------//
Cypress.Commands.add('allDeletes', (
    toastDelete = undefined,
    endPoint = undefined,
    ifNumber = undefined
) => {
    cy.visit(`${endPoint}`)
    cy.get('[class="btn btn-outline-secondary"').first().click({ force: true })
    if (ifNumber == undefined) {
        cy.get('[placeholder="Digite o que deseja buscar"]').type(name)
    } else {
        cy.get('[placeholder="Busque por nome ou descrição"]').type(name)
    }
    cy.get('svg[width="15"').eq(2).click()
    cy.contains('Excluir').click({ force: true })
    cy.get('[class="btn btn-danger"]').click()
    cy.contains(`${toastDelete}`).should('be.visible')
})
//-------------------------Colocando os elementos do Curso---------------------------------//
Cypress.Commands.add('mainData', () => {
    cy.visit('/cursos/cadastro').wait(1000)
    cy.get('[class="switch-icon-right"]').eq(0).click({ force: true })
    cy.get('#main-data-form > :nth-child(2) > :nth-child(1) > .form-group > .form-control').type(name).should('be.visible')
    cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > .form-group > .form-control').type(Faker).should('be.visible')
    cy.get('#company_id').select('L&S Educação')
    cy.get('div[class="d-flex align-items-center"]').selectFile(uploadImage, {
        action: ('drag-drop')
    })
    cy.get('div[class="RMnN7fG1jHMsJw+kXvO6+w== "]').first().selectFile(uploadImage, {
        action: ('drag-drop')
    })
    cy.get(':nth-child(6) > .col-12 > .form-group > .form-control').type('https://app-hml.libertaplay.com.br/login')
    cy.get('div[class="rdw-editor-main"]').first().type('teste automação')
    cy.get('div[class="rdw-editor-main"]').eq(1).type('teste automação')
    cy.get('div[class="RMnN7fG1jHMsJw+kXvO6+w== "]').eq(0).selectFile(uploadImage, {
        action: ('drag-drop')
    })
    cy.get('div[class="RMnN7fG1jHMsJw+kXvO6+w== "]').eq(1).selectFile(uploadImage, {
        action: ('drag-drop')
    })
    cy.get('div[class="RMnN7fG1jHMsJw+kXvO6+w== "]').last().selectFile(uploadImage, {
        action: ('drag-drop')
    })
    cy.get('#main-data-button').click().should('have.text', 'Avançar')
})
Cypress.Commands.add('salesSetup', () => {
    cy.get('input[class="form-control"]').eq(4).type('20').should('be.visible')
    cy.get('input[class="form-control"]').eq(5).type(data).should('be.visible')
    cy.get('input[name="eduzz_cart_url"]').type(descricao).should('be.visible')
    cy.get('input[name="price_info"]').type('10.00').should('be.visible')
    cy.get('div[class="DraftEditor-root"]').eq(2).type(descricao).should('be.visible')
    cy.get('[name="access_period_id"]').select('Mensal')
    cy.get('input[name="price"]').type('100').should('be.visible')
    cy.get('[name="commercial_tables_id"]').select('Tabela 1 parcela')
    cy.get('[class="btn btn-secondary"]').eq(1).click().should('be.visible')
    cy.get('#sales-settings-button').click().should('have.text', 'Avançar')
})
Cypress.Commands.add('courseSettings', () => {
    cy.get('[name="classes_start_date"]').type(data)
    cy.get('[name="total_classes"]').type(valor)
    cy.get('[name="total_hours"]').type('5h')
    cy.get('[class="select__placeholder css-1wa3eu0-placeholder"]').eq(0).click().type('iniciante{enter}')
    cy.get('[name="date"]').last().type(data)
    cy.get('[name="hour"]').type('10:00')
    cy.get(':nth-child(3) > .col-md-2 > .btn').click().should('have.text', 'Adicionar')
    cy.get('[name="id"]').first().select('André Moreira')
    cy.get('[name="id"]').last().select('Análise Técnica')
    cy.get('[name="order"]').first().type('5')
    cy.get('[name="order"]').last().type('6')
    cy.get(':nth-child(5) > .col-md-2 > .btn').click().should('have.text', 'Adicionar')
    cy.get(':nth-child(7) > .col-md-2 > .btn').click().should('have.text', 'Adicionar')
    cy.get('#course-settings-button').click().should('have.text', 'Avançar')
})
Cypress.Commands.add('courseModality', () => {
    cy.get('[name="without_discount"').check({ force: true })
    cy.contains('Sem cupom de desconto').should('be.visible')
    cy.get('[name="pre_sale"]').check({ force: true })
    cy.contains('Pré-Venda').should('be.visible')
    cy.get('[name="online"').check({ force: true })
    cy.contains('Online').should('be.visible')
    cy.get('[name="online_live"').check({ force: true })
    cy.contains('Online ao vivo').should('be.visible')
    cy.get('[class="switch-icon-right"]').eq(1).click({ force: true })
    cy.get('#course-modalities-button').click().should('have.text', 'Avançar')
})
Cypress.Commands.add('courseDisplay', () => {
    cy.get('[name="feature.online"').check({ force: true })
    cy.get('[name="feature.level"').check({ force: true })
    cy.get('[name="feature.records_access"').check({ force: true })
    cy.get('[name="feature.total_classes').check({ force: true })
    cy.get('[name="feature.certificate"').check({ force: true })
    cy.get('[name="feature.total_hours"').check({ force: true })
    cy.get('[name="feature.further_material"').check({ force: true })
    cy.get('[name="zip_code"]').type('62322240')
    cy.intercept('POST', '/api/create-course').as('request')
    cy.get('.col-md-4 > :nth-child(1) > .form-group > .form-control').type('100')
    cy.contains('Salvar').click()
    cy.wait('@request')
    cy.get('@request').its('response.statusCode').should('eq', 200)
})
//-------------------------Colocando os elementos do Livro-------------------------------//
Cypress.Commands.add('bookRegistration', () => {
    cy.visit('/livros')
    cy.get('[class="btn btn-primary-default"]').last().should('be.visible').wait(1000).click()
    cy.get('[class="switch-icon-right"]').click({ force: true })
    cy.get('[name="name"]').type(name).should('be.visible')
    cy.get('#company_id').select('L&S Educação')
    cy.get('[name="author"]').type('William De Souza')
    cy.get('[data-contents="true"]').first().type('Cadastro de livro com teste automatizado')
    cy.get('[name="slug"').type(Faker)
    cy.contains('Avançar').click()
    cy.get('[class="rdw-editor-main"').last().type(descricao)
    cy.get('[name="total_pages"]').type('15').should('be.visible')
    cy.get('[name="release_year"]').type('2023').should('be.visible')
    cy.get('[name="stock"]').type('20').should('be.visible')
    cy.get('[name="price"]').type('2550').should('be.visible')
    cy.get('[name="eduzz_code"]').type('02').should('be.visible')
    cy.get('div[class="RMnN7fG1jHMsJw+kXvO6+w== "]').first().selectFile(uploadImage, {
        action: ('drag-drop')
    })
    cy.get('div[class="RMnN7fG1jHMsJw+kXvO6+w== "').eq(1).first().selectFile(uploadImage, {
        action: ('drag-drop')
    })
    cy.get('div[class="RMnN7fG1jHMsJw+kXvO6+w== "]').last().selectFile(uploadImage, {
        action: ('drag-drop')
    })
    cy.contains('Salvar').click().should('be.visible')
    cy.intercept('POST', '/api/create-book').as('request')
    cy.wait('@request')
    cy.get('@request').its('response.statusCode').should('eq', 200)
})
//-------------------------Colocando os elementos da empresa-------------------------------//
Cypress.Commands.add('createCompany', () => {
    cy.visit('/empresas')
    cy.get('[class="btn btn-primary-default"').eq(3).click()
    cy.get('form > .form-group > .form-control').type(Empresa)
    cy.intercept('POST', '/api/create-company').as('request')
    cy.contains('Salvar').click()
    cy.wait('@request')
    cy.get('@request').its('response.statusCode').should('eq', 200)
})
//-------------------------Colocando os elementos do termo de uso-------------------------------//
Cypress.Commands.add('termsUse', () => {
    cy.visit('/termos')
    cy.get('[class="btn btn-primary-default"').last().click({ force: true })
    cy.get('[class="switch-icon-right"]').click({ force: true })
    cy.get('[name="name"').type(name)
    cy.get('[name="start_date"').type(data)
    cy.get('[name="slug"').type(Faker)
    cy.get('[class="rdw-editor-main"').type(descricao)
    cy.get('[name="company_id"').select('Grupo L&S')
    cy.get('[name="end_date"').type(data)
    cy.get('[type="submit"').click()
    cy.intercept('POST', '/api/create-term-of-service').as('request')
    cy.wait('@request')
    cy.get('@request').its('response.statusCode').should('eq', 200)
})
//-------------------------Colocando os elementos de politica de privacidade-------------------------------//
Cypress.Commands.add('privacyPolicyList', () => {
    cy.visit('/politica')
    cy.get('[class="btn btn-primary-default"').last().click()
    cy.get('[class="switch-icon-right"]').eq(0).click({ force: true })
    cy.get('[name="name"').type(name)
    cy.get('[name="start_date"').type(data)
    cy.get('[name="slug"').type(Faker)
    cy.get('[class="rdw-editor-main"').type(descricao)
    cy.get('[name="company_id"').select('Grupo L&S')
    cy.get('[name="end_date"').type(data)
    cy.get('[type="submit"').click()
    cy.intercept('POST', '/api/create-privacy-policy').as('request')
    cy.wait('@request')
    cy.get('@request').its('response.statusCode').should('eq', 200)
})
//-------------------------Colocando os elementos em tipos de Assinatura -------------------------------//
Cypress.Commands.add('subscriptionTypes', () => {
    cy.visit('/assinatura')
    cy.get('[class="btn btn-primary-default"').last().click()
    cy.get('[class="switch-icon-right').click()
    cy.get('[name="name"').type(name)
    cy.get('[name="slug"').type(Faker)
    cy.get('[id="company_id"').select('Grupo L&S')
    cy.get('[class="select__indicator select__dropdown-indicator css-qj08tm-indicatorContainer"').click().type('André Moreira{enter}')
    cy.get('[class="RMnN7fG1jHMsJw+kXvO6+w== "').first().selectFile(uploadImage, {
        action: ('drag-drop')
    })
    cy.intercept('POST', '/api/liberta-create-signature-type').as('request')
    cy.get('[class="rdw-editor-main"').last().type(descricao)
    cy.get('[class="rdw-editor-main"').first().type(descricao)
    cy.get('[class="btn btn-primary-default"').eq(3).click()
    cy.get('[class="form-control"').eq(6).select('Cortesia')
    cy.get('[class="form-control"').eq(7).type(valor)
    cy.get('[class="form-control"').eq(8).select('TESTE 6 PARCELAS')
    cy.get('[class="btn btn-secondary').last().click()
    cy.get('[class="btn btn-primary-default"').eq(5).click()
    cy.get('[id="type.0"').select('Livros')
    cy.get('[id="product_id.0"').select('A importância de investir no futuro')
    cy.get('[name="product_access_period_id.0"').select('Eterno')
    cy.get('[class="btn btn-secondary"').last().click()
    cy.get('[class="btn btn-primary-default"').last().click()
    cy.wait('@request')
    cy.get('@request').its('response.statusCode').should('eq', 200)
})
//-------------------------Colocando os elementos do Cliente-------------------------------//
Cypress.Commands.add('createClient', () => {
    cy.get('[class="btn btn-primary-default"').eq(3).click().should('be.visible')
    cy.get('[name="name"').type(name)
    cy.get('[class="form-control"').eq(3).type(number)
    cy.get('[class="form-control"').eq(4).type(email)
    cy.get('[class="form-control"').eq(5).type(data)
    cy.get('[class="select__indicator select__dropdown-indicator css-qj08tm-indicatorContainer').click().type('xp_investimentos{enter}')
    cy.get('[class="form-control"').eq(6).type('123456')
    cy.get('[class="form-control"').eq(7).type('123456')
    cy.intercept('POST', '/api/create-customer').as('request')
    cy.get('[class="btn btn-primary-default"').last().click().should('have.text', 'Salvar')
    cy.wait('@request')
    cy.get('@request').its('response.statusCode').should('eq', 200)
})
//-------------------------Colocando os elementos da Trilha-------------------------------//
Cypress.Commands.add('createTrails', () => {
    cy.get('[class="btn btn-primary-default"').last().click()
    cy.get('[name="name"').type(name)
    cy.get('[name="what_do_you_deliver"').type(Faker)
    cy.get('#content_type').select('Cursos')
    cy.get('#content').select('O Investidor completo')
    cy.get('#email').check({ force: true })
    cy.get('[name="notification_message"').type(name)
    cy.get('[type="submit"').last().click()
    cy.intercept('POST', '/api/liberta-create-trail').as('request')
    cy.get('[class="btn btn-primary-default"').last().click().should('have.text', 'Salvar')
    cy.wait('@request')
    cy.get('@request').its('response.statusCode').should('eq', 200)
})
//-------------------------Colocando os elementos da lista de qualificação-------------------------------//
Cypress.Commands.add('createContentQualificationList', () => {
    cy.get('[class="btn btn-primary-default"').last().click()
    cy.get('[name="name"').type(name)
    cy.get('[name="slug"').type(Faker)
    cy.get('[class="select__value-container select__value-container--is-multi css-1hwfws3').click({ force: true }).type('Categoria{enter}')
    cy.get('[name="order"').last().type(valor)
    cy.get('[class="ZTlQSGXvh-wK2TBl8vl8Og=="').selectFile(uploadImage, {
        action: ('drag-drop')
    })
    cy.intercept('POST', '/api/liberta-create-content-qualification').as('request')
    cy.get('[class="btn btn-primary-default"').last().click()
    cy.wait('@request')
    cy.get('@request').its('response.statusCode').should('eq', 200)
})
//-------------------------Colocando os elementos de relatórios-------------------------------//
Cypress.Commands.add('createResearchReports', () => {
    cy.get('[class="btn btn-primary-default"').last().click()
    cy.get('[name="title"').type(name).should('be.visible')
    cy.get('[name="subtitle"').type(Faker).should('be.visible')
    cy.get('[class="select__indicator select__dropdown-indicator css-qj08tm-indicatorContainer"').first().click({ force: true }).type('Scalp{enter}')
    cy.get('#public').check({ force: true })
    cy.get('[class="custom-dropzone-input "').selectFile(uploadPdf, {
        action: ('drag-drop')
    })
    cy.intercept('POST', '/api/liberta-create-report-research').as('request')
    cy.get('[class="btn btn-primary-default"').last().click()
    cy.wait('@request')
    cy.get('@request').its('response.statusCode').should('eq', 200)
})