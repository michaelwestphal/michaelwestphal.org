module.exports = {
  name: 'michaelwestphal',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/michaelwestphal/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
