// create class named node - which will represent the nodes comprising tree
class Node {
    // on class instantiation accept value to use against innate properties
    constructor(value){
        // trees have left and right branches , create them here
        this.left  = null;
        this.right = null;
        // hold incoming value
        this.value = value;
    }
}

// create class representing Binary Search tree it will be the root until nodes are added
class BinarySearchTree {
    // on instantiation create a root property
    constructor(){
        this.root = null;
    }
    // create method in which will add to this tree
    insert(value){
        // create new node and pass value to its constructor
        const newNode = new Node(value);
        // check if BinarySearchTree is empty || NULL.
        // if root node is null it is empty
        if(this.root === null){
            // set root property with a instatiation of the new class with value
            this.root = newNode;
        } else { // otherwise if the tree has a node already do...
            // because the tree has values ( nodes ) we can/must traverse the tree to insert
            // set parent node ( root ) to a variable or 'sentry' for while loop
            let currentNode = this.root; 
            // while our loop is walking across nodes with values and not null 
            while(true){ // do...
                // do a conditional check in which will determine which branch to insert this value [ right || left ]
                // left branch aggregates nodes with less value than parent node , right aggregates higher values than parent
                // check if the value we are inserting is greater than or less than currentNode
                if(value < currentNode.value) {
                    //Left branch 
                    // if there are no nodes on left branch
                    if(!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    console.log('adding to left branch')
                    currentNode = currentNode.left
                } else {
                    // right branch
                    // check if there is no value on right branch 
                    if (!currentNode.right){
                        // add new node to the right branch
                        currentNode.right = newNode;
                        // exit out of while loop by point two null
                        return this;
                    }
                    console.log('adding to right branch');
                    // set current node to the right branch node
                    currentNode = currentNode.right;
                }
            }
        }

    }
    // create method in which will lookup value from this tree ( traverse and return value )
    lookup(value){

    }
    // create method in which will remove value from tree
    remove(){

    }
}


// instantiate BinarySearchTree and set into const 
const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(10);
tree.insert(20);
tree.insert(40);