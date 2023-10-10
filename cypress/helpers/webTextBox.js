class WebTextBox {

    clearText(element) {

        element.clear().then(function () {
            cy.log(' Clearing of field !!!');
        }, function (err) {
            cy.log('--->Error: Clearing did not perform due to: ' + err);
        });
    }

    typeText(element, data) {
        element.clear().type(data).then(function () {
            cy.log('Typing of the field with value: ' + data);
        }, function (err) {
            cy.log('--->Error: Typing of the field with value:' + data + ' was not done due to: ' + err);
        });
    }

    typeTextWithoutClearingExistingText(element, data) {

        element.type(data).then(function () {
            cy.log('Typing of the field with value: ' + data);
        }, function (err) {
            cy.log(colors.red('--->Error: Typing of the field with value:' + data + ' was not done due to: ' + err));
        });
    }
}

export default WebTextBox