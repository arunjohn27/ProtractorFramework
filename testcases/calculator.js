let homepage = require('../pages/homepage')

describe('test calculator', function() {
    it('addition test', function(){
        //browser.get('http://juliemr.github.io/protractor-demo/');
        homepage.get('http://juliemr.github.io/protractor-demo/');
        
        //element(by.model('first')).sendKeys('5');
        homepage.enterFirstNumber('8')

        //element(by.model('second')).sendKeys('5');
        homepage.enterSecondNumber('2');
        
        //element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickGo();

        //let result = element(by.cssContainingText('.ng-binding','10'));

        //expect(result.getText()).toEqual('10');
        homepage.verifyResult('10');
        browser.sleep(3000)
        

    });

});