const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

test('background imports step 1~9 modules', () => {
  const source = fs.readFileSync('background.js', 'utf8');

  [
    'background/steps/step1.js',
    'background/steps/step2.js',
    'background/steps/step3.js',
    'background/steps/step4.js',
    'background/steps/step5.js',
    'background/steps/step6.js',
    'background/steps/step7.js',
    'background/steps/step8.js',
    'background/steps/step9.js',
  ].forEach((path) => {
    assert.match(source, new RegExp(path.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
  });
});
