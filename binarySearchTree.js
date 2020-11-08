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
        // check if root is empty 
        if (!this.root) {
            return false;
        }
        // set root to variable of currentNode 
        // we will use this node to traverse the tree
        let currentNode = this.root;
        while(currentNode){
            // if the value we are looking for is less than the current value
            if(value < currentNode){
                // go left , make currentNode == the left 
                currentNode = currentNode.left;
            } else if ( value > currentNode.value) {
                // go right 
                currentNode = currentNode.right;
            } else if (currentNode.value === value){ // if the currentNodes value is a match then..
                // then we have a match
                return currentNode;
            }
        }
        // we did not find value in tree
        return false;

    }
    // create method in which will remove value from tree
    remove(value){
        // if root does not have a value
        if (!this.root){
            return false;
        }
        // other wise ..
        // let the current node == the root node
        let currentNode = this.root;
        // let the parent node == null
        let parentNode = null;
        // traverse the tree using the currentNode as sentry
        while(currentNode){
            // if the input value is less than the current nodes value then..
            if(value < currentNode.value){
                // the parent node is the currentNode  or vice-versa
                parentNode = currentNode;
                // since the value is less than the parent - we move left to search the left branch
                currentNode = currentNode.left;
            } else if ( value > currentNode.value){
                parentNode = currentNode;
                // move right
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {
                // there is a match
                
                if (currentNode.right === null){
                    if(parentNode === null){
                        this.root = currentNode.left;
                    } else {
                        if(currentNode.value < parentNode.value){
                            parentNode.left = currentNode.left;
                        } else {
                            if(currentNode.value < parentNode.value){
                                parentNode.left = currentNode.left;
                            } else if (currentNode.value > parentNode.value) {
                                    parentNode.right = currentNode.left;
                            }
                        }
                    }
                } return true;
            } 
        }
    }
}


// instantiate BinarySearchTree and set into const 
const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(10);
tree.insert(20);
tree.insert(40);
tree.lookup(9)