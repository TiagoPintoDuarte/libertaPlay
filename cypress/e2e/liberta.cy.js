describe('Automação Liberta play', () => {

    beforeEach(function () {
        cy.sessionLogin()
    })
    it('login com email e senha incorretos', () => {
        cy.emailAndPasswordInvalid()
    })
    it('login com senha incorreta', () => {
        cy.passwordInvalid()
    })
    it('login com email incorreto', () => {
        cy.emailInvalid()
    })

    it('Criar Curso', () => {
        let path = 'Cursos'
        cy.allPath(path)
        cy.mainData()
        cy.salesSetup()
        cy.courseSettings()
        cy.courseModality()
        cy.courseDisplay()
    })
    /*it.only('Editar Curso', () => {
        cy.editCourse()
    })*/
    it('Apagar Curso', () => {
        let toastDelete = 'Curso removido com sucesso!'
        let endPoint = '/cursos'
        cy.allDeletes(toastDelete, endPoint)
    })

    it(' Criar Livros', () => {
        let path = 'Livros'
        cy.allPath(path)
        cy.bookRegistration()
    })
    it('Apagar Livro', () => {
        let toastDelete = 'Livro removido com sucesso!'
        let endPoint = '/livros'
        cy.allDeletes(toastDelete, endPoint)
    })
    it('Criar Empresa', () => {
        let path = 'Empresa'
        cy.allPath(path)
        cy.createCompany()
    })
    it('Apagar uma empresa', () => {
        let toastDelete = 'Empresa removida com sucesso!'
        let endPoint = '/empresas'
        cy.allDeletes(toastDelete, endPoint)
    })
    it('Termos de uso', () => {
        let path = 'Termos de Uso'
        cy.allPath(path)
        cy.termsUse()
    })
    it('Apagar um termo de uso', () => {
        let toastDelete = 'Termo de uso removido com sucesso!'
        let endPoint = '/termos'
        cy.allDeletes(toastDelete, endPoint)
    })
    it('Politica de privacidade', () => {
        let path = 'Política de Privacidade'
        cy.allPath(path)
        cy.privacyPolicyList()
    })
    it('Apagar uma politica', () => {
        let toastDelete = 'Política de privacidade removida com sucesso!'
        let endPoint = '/politica'
        cy.allDeletes(toastDelete, endPoint)
    })
    it('Criar Tipo de assinatura', () => {
        let path = 'Tipos de Assinatura'
        cy.allPath(path)
        cy.subscriptionTypes()
    })
    it('Apagar tipo de assinatura', () => {
        let toastDelete = 'Tipo de Assinatura removido com sucesso!'
        let endPoint = '/assinatura'
        cy.allDeletes(toastDelete, endPoint)
    })
    it(' Criar Cliente', () => {
        let path = 'Clientes'
        cy.allPath(path)
        cy.createClient()
    })
    it('Apagar cliente', () => {
        let toastDelete = 'Cliente removido com sucesso!'
        let endPoint = '/clientes'
        cy.allDeletes(toastDelete, endPoint)
    })
    it('Criar Trilhas',() => {
        let path = 'Trilhas'
        cy.allPath(path)
        cy.createTrails()
    })
    it('Apagar uma tilha', () => {
        let toastDelete = 'Trilha excluida com sucesso'
        let endPoint = '/trilhas'
        let ifNumber = 1
        cy.allDeletes(toastDelete, endPoint,ifNumber)
    })
    it('Criar Lista de qualificação de conteúdo', () => {
        let path = 'Qualificação de conteúdo'
        cy.allPath(path)
        cy.createContentQualificationList()
    })
    it('Apagar Lista de qualificação de conteúdo', () => {
        let toastDelete = 'Qualificação excluida com sucesso'
        let endPoint = '/qualificacao-de-conteudo'
        cy.allDeletes(toastDelete, endPoint)    
    })
    it('Criar Relatórios Research', () => {
        let path = ' Relatórios Research'
        let ifNumber = 1
        cy.allPath(path, ifNumber)
        cy.createResearchReports()
    })

})