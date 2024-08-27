import grantReverseString from 'grant-reverse-string';
import { expect } from 'chai';

describe('grantReverseString', () => {
    it('dapat membalikkan kata', () => {
        expect(grantReverseString('Grant')).to.equal('tnarG');
        expect(grantReverseString('Gabriel')).to.equal('leirbaG');
    });
});

describe('grantReverseString', () => {
  it('dapat membalikkan kalimat', () => {
      expect(grantReverseString('Grant Gabriel Tambunan')).to.equal('nanubmaT leirbaG tnarG');
      expect(grantReverseString('Back-End Terkece dan Best Mentees')).to.equal('seetneM tseB nad ecekreT dnE-kcaB');
  });
});
