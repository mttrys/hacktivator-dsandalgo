var binaryTreeExampleData = require('./treeStructures').binaryTreeExampleData;

const getLeafNodeCount = require('./nodeCount').getLeafNodeCount;
const getNodeCount = require('./nodeCount').getNodeCount;

test('Will accurately count the number of leaf nodes', () => {
  expect(getLeafNodeCount(binaryTreeExampleData)).toBe(4)
});

test('Will accurately count the total number of nodes', () => {
  expect(getNodeCount(binaryTreeExampleData)).toBe(9)
});