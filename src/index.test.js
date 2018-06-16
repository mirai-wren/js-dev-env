import {expect} from 'chai';
import {JSDOM} from 'jsdom';

describe('Our first test', function() {
  it('should pass', function() {
    expect(true).to.equal(true);
  });
});

describe('index.html', function(){
  it('should have correct header', function(done) {
    JSDOM.fromFile('./src/index.html').then(dom => {
      const h1 = dom.window.document.querySelector("h1").textContent;
      expect(h1).to.equal("Welcome to the JS Starter Kit");
      done();
    })
  });
});
