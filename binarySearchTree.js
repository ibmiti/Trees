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