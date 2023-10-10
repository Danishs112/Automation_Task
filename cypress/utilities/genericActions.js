class GenericActions {

    visit(){
        cy.visit("/");
    }

    wait(time){
        cy.wait(time).then(function(){
            cy.log('Wait for' + time);
        })
    }

    invokeText(element){
            return element.invoke('text').then(function (text) {
                 return text;
            })
    
        

    }

   

}
export default GenericActions;