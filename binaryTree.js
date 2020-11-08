// example of binary tree

// define function aptly-named and make it require an arg
function BinaryTreeNode(value){
    // use context to assign the argument to the object property of this.value
    this.value = value;
    // define a property named this.left to represent the left side of this binary tree - give it value of null
    this.left  = null;
    // define a property to represent right side of binary tree give it value of null
    this.right = null;
}