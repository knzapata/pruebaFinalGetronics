import dashboardP from "../pageObjects/dashboardP";

describe('Pruebas general', () => {

    beforeEach(() => {
        cy.visit('https://tiendaonline.movistar.com.ar/');
        cy.viewport(1280, 768);
        cy.wait(3000);
        cy.request("GET", "https://tiendaonline.movistar.com.ar/").then((response) => {
            expect(response.status).to.eq(200);
        });

    });

    it('Seleccion de Galaxy A14 posible 3 cuotas', () => {
        dashboardP.elements.galaxiA14().should('exist')
        dashboardP.elements.galaxiA14().click()

        dashboardP.getabrirCalculadoraCuotas()
        cy.wait(3000)

        dashboardP.elements.opcionesBank().click()
        dashboardP.getselectBank1()

        dashboardP.elements.opcionesCards().click()
        dashboardP.elements.selectCard().click()

        dashboardP.elements.calcularCuotas().click()
        dashboardP.elements.cantidadCuotas().should('contain', '3 cuotas sin interés');
    })

    it('Aplico filtros de memoria y precio', () => {
        dashboardP.getaplicarFiltroMemory()
        dashboardP.getaplicarFiltroPrecio()
        cy.wait(10000)
        dashboardP.elements.resultadoFiltro().should('be.visible')
        dashboardP.elements.textRdoFiltro().should('be.visible')
        dashboardP.elements.textRdoFiltro().should('have.text', 'Mostrando 5 equipos')
        dashboardP.elements.resultadoFiltro().within(() => {
            cy.get('li').its('length').should('be.gt', 0).then((cantidad) => {
                cy.log(`Cantidad de Productos es: ${cantidad}`);
            })
        });
    })

    it('Intentar comprar en 60 cuotas', () => {
        dashboardP.elements.productosPagprincipal().eq(2).click()
        dashboardP.getabrirCalculadoraCuotas()
        cy.wait(3000)
        dashboardP.elements.opcionesBank().click()
        dashboardP.getselectBcoCredicoop()

        dashboardP.elements.opcionesCards().click()
        dashboardP.getselectVisa()
        dashboardP.elements.calcularCuotas().click()
        cy.wait(3000)
        dashboardP.elements.cantidadCuotas().should('not.contain', '60 cuotas sin interés')
    })

    it('Validar redireccion a Celulares Usados', () => {
        dashboardP.elements.celUsados().click();
        cy.url().should('include', 'https://tiendaonline.movistar.com.ar/celulares-usados.html');

        cy.get('.base').should('exist');
        cy.get('.brand > .filter-options-content > .items').within(() => {
            cy.get('li').eq(0).click()
        })



    })



})







