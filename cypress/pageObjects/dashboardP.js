

class dashboard {

    elements = {
        pagWeb: ()=> cy.visit('https://tiendaonline.movistar.com.ar/'),
        galaxiA14: ()=> cy.get('div.content-products li.product-item[data-id="14908"]'),
        calculadoraCuotas: ()=> cy.get('#open-installments-modal'),
        opcionesBank: ()=> cy.get('#inputbank'),
        selectBank: ()=> cy.get('[id="ui-id-3"]'),
        opcionesCards: ()=> cy.get('[id="inputCard"]'),
        selectCard: ()=> cy.get('#selectCardByBank li:nth-child(1)'),
        calcularCuotas: ()=> cy.get('#calculate_btn > .btn-primary'),
        cantidadCuotas: ()=> cy.get('#bodyTable'),
        filtroMemory: ()=> cy.get('[data-value="802"] > a'),
        filtroPrecio:()=> cy.get('[data-value="200000_300000"] > a'),
        resultadoFiltro: ()=> cy.get('[class="content-products"]'),
        textRdoFiltro: ()=> cy.get('.total-products > p'),
        productosPagprincipal: ()=> cy.get('[class="product-item"]'),
        bcoCredicoop: ()=> cy.get('[id="ui-id-21"]'),
        cardVisa: ()=> cy.get('#selectCardByBank li:nth-child(3)'),
        celUsados: ()=> cy.get('.category-slider > .slick-list > .slick-track > [data-slick-index="1"] > :nth-child(1) > .item > a')
    }

    getentrarweb(){
        this.elements.pagWeb()
    }
    getabrirCalculadoraCuotas(){
        this.elements.calculadoraCuotas().click()
    }
    getselectBank1(){
        this.elements.selectBank().click()
    }
    getaplicarFiltroMemory(){
        this.elements.filtroMemory().click()
    }
    getaplicarFiltroPrecio(){
        this.elements.filtroPrecio().click()
    }
    getselectBcoCredicoop(){
        this.elements.bcoCredicoop().click()
    }
    getselectVisa(){
        this.elements.cardVisa().click()
    }
    
}

module.exports = new dashboard()