module.exports = {
  // Run type-check on changes to front's TypeScript files
  'front/**/*.ts?(x)': () => 'yarn front:type-check',
  // Run ESLint on changes to JavaScript/TypeScript files
  '**/*.(ts|js)?(x)': (filenames) => `yarn lint ${filenames.join(' ')}`,
}
