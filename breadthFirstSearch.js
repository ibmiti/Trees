 class BinarySearchTree {
     constructor(){
         this.root = null;
     }
     insert(value){

     }
     lookup(value){

     }
     remove(value){

     }
     breadthFirstSearch(){
         // start search with root node
         let current = this.root;
         let list = [];
         let queue = [];
         queue.push(currenNode);

         while(queue.length > 0){
             currentNode = queue.shift();
             console.log(curreNode);
             list.push(currentNode.value);
             if (currentNode.left){
                 queue.push(curreNode.left)
             }
             if (currentNode.right){
                 queue.push(currentNode.right);
             }
         }
         return list;
     }
 }

 const tree = new BinarySearchTree();
 tree.insert(9);