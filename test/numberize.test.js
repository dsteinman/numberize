var assert = require('assert');

var numberize = require('../');

describe("numberize", function() {

  var NUMBERS = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9
  }

  var TEENS = {
    'eleven': 11,
    'twelve': 12,
    'thirteen': 13,
    'fourteen': 14,
    'fifteen': 15,
    'sixteen': 16,
    'seventeen': 17,
    'eighteen': 18,
    'nineteen': 19
  };

  var TEN_PREFIXES = {
    'twenty': 20,
    'thirty': 30,
    'forty': 40,
    'fourty': 40,
    'fifty': 50,
    'sixty': 60,
    'seventy': 70,
    'eighty': 80,
    'ninety': 90
  };

  it('should parse all kind of numbers', function (done) {

    assert.equal(
        numberize('one hundred two'),
        '102'
    );

    assert.equal(
        numberize('twenty two two'),
        '22 2'
    );

    assert.equal(
        numberize('one hundred two fifteen'),
        '102 15'
    );

    assert.equal(
        numberize('ten and eleven'),
        '10 and 11'
    );

    assert.equal(
        numberize('one two three twenty'),
        '1 2 3 20'
    );

    assert.equal(
        numberize('one two three twenty one'),
        '1 2 3 21'
    );

    assert.equal(
      numberize('one hundred and two five'),
      '102 5'
    );

    assert.equal(
      numberize('ninety nine thousand nine hundred ninety nine'),
      '99999'
    );
    assert.equal(
        numberize('ninety nine thousand nine hundred ninety nine ten'),
        '99999 10'
    );
    assert.equal(
      numberize('one thousand two hundred'),
      '1200'
    );
    assert.equal(
        numberize('five one thousand two hundred'),
        '5 1200'
    );
    assert.equal(
        numberize('one thousand two hundred two'),
        '1202'
    );
    assert.equal(
        numberize('one thousand two hundred and two'),
        '1202'
    );
    done();
  });
  

  describe('numbers from 1 to 100', function(){

    it('should parse single numbers', function(done) {
      for(var num in NUMBERS) {
        assert.equal(numberize(num),NUMBERS[num].toString());
      }
      done();
    });

    it('should parse numbers at the end of a string', function(done) {
      assert.equal(numberize('a day has twenty four hours'), 'a day has 24 hours');
      done();
    });

    it('should parse numbers at the end of a string', function(done) {
      assert.equal(numberize('the answer is thirty six'), 'the answer is 36');
      done();
    });

  });

  describe('numbers in the 100 - 1000 range', function(){

    it('should parse numbers from 101-999', function (done) {
      for(var num1 in NUMBERS) {
        // tests for 101 - 109, 201 - 209, ..., 901 - 909
        for(var num2 in NUMBERS) {
          assert.equal(
            numberize(num1 + ' hundred and ' + num2),
            (NUMBERS[num1] * 100 + NUMBERS[num2]).toString()
          );
        }
        // tests for 111 - 119, 211 - 219, ..., 911 - 919
        for(var teen in TEENS) {
            assert.equal(
              numberize(num1 + ' hundred and ' + teen),
              (NUMBERS[num1] * 100 + TEENS[teen]).toString()
            );
        }
        for(var tp in TEN_PREFIXES) {
          // tests for 120, 130, ..., 190
          assert.equal(
            numberize(num1 + ' hundred and ' + tp),
            (NUMBERS[num1] * 100 + TEN_PREFIXES[tp]).toString()
          );
          for(var num2 in NUMBERS) {
            // test for 121-129, 131-139, ..., 191-199, 221-229, ..., 991-999
            assert.equal(
              numberize(num1 + ' hundred and ' + tp + ' ' + num2),
              (NUMBERS[num1] * 100 + TEN_PREFIXES[tp] + NUMBERS[num2]).toString()
            );
          }
        }
      }
      done();
    });

    it('should parse numbers above hundred within some text', function (done) {
      assert.equal(
        numberize('mary has one hundred and twenty three little lambs'),
        'mary has 123 little lambs'
      );
      done();
    });

    it('should treat a as 1 in some cases', function(done) {
      assert.equal(
        numberize('a thousand two hundred and fifteen'),
        '1215'
      );
      assert.equal(numberize('a hundred miles'), '100 miles');
      assert.equal(numberize('the road is a hundred miles long'), 'the road is 100 miles long');
      done();
    });
  });

  describe('Large numbers', function(){
    it('should parse numbers above thousand', function (done) {
      assert.equal(numberize('two thousand'), '2000');
      assert.equal(numberize('two thousand and thirty'), '2030');
      assert.equal(numberize('nine hundred and ninety nine thousand nine hundred and ninety nine'), '999999');
      assert.equal(numberize('two million'), '2000000');
      done();
    });
  });

  describe('Fractions', function(){
    it('should parse fractions', function (done) {
      assert.equal(numberize('three quarters'), '0.75');

      // todo: need an "anderizer' for franctions
      // assert.equal(numberize('two and a half'), '2.5');
      // assert.equal(
      //   numberize('one thousand two hundred and fifteen and one half'),
      //   '1215.5'
      // );
      done();
    });
  });

  // describe.skip('Ordinals', function(){
  //   it('should handle ordinals', function(done) {
  //     assert.equal(numberize('first'), '1st');
  //     assert.equal(numberize('twenty-first'), '21st');
  //     done();
  //   });
  // });
  
});
