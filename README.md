# Trees - Datastructure

Q: What is the Tree Datastructure?    :
A: A widely used abstract data-type, it simulates a hierchy
  - a hierarchical tree structure where the very top is the    parent node
    and the branching node are its child , or child nodes, I view the parent node as the tree above ground-level ; whilst the child nodes are spawning beneath like roots

Q: Where do we see the example of this Tree Datastructure?   :
A:

Q: are there any operations we can perform upon Trees?   :
A: yes there are a few, [ lookup, insert, delete ]

Q: What are there Run-times of each? :
A: [ lookup O(log N), insert O(log N), delete O(log N) ]

Q: What other data-structure is it similar to?:
A: linked-list - notably; though linked-list is described as more of an linear tree structure - a tree with no leaves/nodes off its center

Q: What differentiates Trees from arrays and linked-list?   :
A: while they both can store data, arrays,and linkedlist do so in a linear fashion,
   while a tree stores things by heiracrchy e.g ; directory structure, coroporate structure - are both examples of hierarchical data


Q: What is root?    :  
A: the top most node is called a root or the parent node

Q: What is parent?    :  
A: has linear relation with child?

Q: what is child?    :   
A: has linear upward relation to parent?


Q: What is ancsestors?   :  
A: ancestors are the upper node inreference to a child node, the ultimate ancestor being the root node 

Q: what are Descendants?    :
A: descendants are child nodes 

Q: what is Internal nodes?   :
A: any node that has child nodes are inner nodes any node without descendants are outer nodes or leaf node 

Q: what are external nodes/leaves/leaf?  :
A: very end of tree strucutre?

Q: what is edge?  :      
A: edges of a tree are generally referred to as the branches of the tree,
   the branches carry nodes

Q: what is level?   :     
A: each row of nodes beginning with the root 

Q: What is the size of a binary tree? :    
A: total number of node in the tree

Q: what is the hieght?   :    
A: is the largest number of edges in a path from the root node to a leaf node. Essentially, it is the height of the root node. Note that if a tree has only one node, then that node is at the same time the root node and the only leaf node, so the height of the tree is 0. On the other hand, if the tree has no nodes, it’s height is -1.



Q: What is the height of a node ? :      
A: is the largest number of edges in a path from that node to a leaf node

Q: What is a leaf-node?  :       
A:

Q: what is the depth?   :
A: is the number of edges in the path from the root node to that node.



Q: What is a Binary Tree?  :    
A: a tree structure in which each node stemming from parent - has at maximum two children, this is a limited tree for the growth is curved by it being bound to - 2 at max child nodes per node

Q: 

Q: what is a Full binary tree ( FBT )?   :
A: 

Q: what is a perfect binary tree (PBT )?   :          
A: all of the bottom node will equal all of the upper node + 1

Q: how to calculate the num of nodes of a binary tree    :
A: 
       
    level   0 :   2^0 = 1;   // 1 node 
    level   1 :   2^1 = 2;   // 2 nodes
    level   2 :   2^2 = 4;   // 4 nodes
    level   3 :   2^3 = 8;   // 8 nodes



Q: how to figure out number of nodes within a binary tree?    :     
A: a simple way would be to 2^h ( 2 to the power of the height of tree ), the height of the tree will define how many levels it has so a tree with a height of 3 ( levels ) would fit in an expression as ; ( 2 indicates bynary tree ) 2^3 - 1 === 7 

Q: what does O(log N) mean for binary trees?    :    
A: the choice of the next element in which to perform some action is one of several possibilities, but only one needs to be chosen,
O (log N) is like looking through a phone book trying to find one name in which to eventually perform some action like [ call said number, copy said number, etc ... ]
we can use divide and conquer to locate element/name in tree/book 


::::::::::::::::::::: Binary Search Tree ::::::::::::::::::::::::

Q: What makes Binary Search tree different that Binary Tree   :  
A: Binary search tree: Used for searching. it is a Binary tree arranged where the left child contains only nodes with values less than the parent node, and where the right child only contains nodes with values greater than or equal to the parent.
   

Q: What are BINARY SEARCH TREE's ( BST )useful for?   :   
A: for comparing things, it is better than an hash map for this use

Q: Why is BST better than Hash map for comparing elements?   :   
A: BST's preserve relationships, hashes do not preserve relationships

Q: What are the rules for a BST?   :  
A: All nodes to the right must be greater than the parent node ( middle )
   and all nodes to the left must contain values less than the parent node 

                   (101) -- parent node
                /         \
             (33)        (105)
             /   \      /      \
           (9)  (37)   (104) (144)
   
Q: What are unbalanced Binary Search Trees?   :     
A: where nodes are only inserted on one branch left or right - which becomes sort of a linked-list

Q: what are the pros and cons of BST?   :  
A:      
   
    1. most operations on BST's are faster than O(n) 
    2. they are ordered
    3. we can keep the nodes anywhere in memory leading to a flexibility in size
     which is to say ; we can keep growing our tree dynamically
    
Q: What are the cons of using BST?   :   
A: There are no constant run-time operations of O(1), all operations require traversal




:::::::: AVL Tree :::::::::     
Q: What is AVL tree?    :   
A: use for balancing binary trees

Q: When are the balancing of trees needed?    :   
A: During insertion operations, whenever we are inserting elements within the tree



:::::: Red / Black Tree :::::::      
Q: What is Red / Black Tree  :  
A: used for balancing binary trees



:::::: Binary heap :::::::         

Q: What is a Binary heap? :    
A: binary heap is a data-structure it is classically used to implement priority queues

Q: what is it useful for? :   
A: comparative operations, priority Queues

Q: what is the run-time for the operations? :      
A: lookup O(n), insert O(log N), delete O(log n)

Q: must you balance a binary heap?  :  
A: no you do not.


::::: Trie ::::::

Q: what is a trie data structure?   :
A: there are another treebased lookup structure

Q: What are prefixes used for within tries?    :  
A: prefixes are equivalent to keys in arrays

Q: what is the use case for Trie's?  :  
A: [ Spell checkers/Auto suggest or correct spellings ] etc 


    ::::: BFS ( Breadth First Search ) :::::    

 Q: What is Breadth First Search?   :    
 A:   

  Q: What is it useful for? :   

  A:    


  Q: what is the advantage of BFS over DFS? :   
  A: 
    1. Very good for finding shortest path
      1.1 - due to it attempting to search nodes located on same level first which is to say its nearest neighbors
    2. can be faster than DFS
 
  Q: What is the time complexity for BFS? : 
  A: O(n)

    :::: Depth First Search  ::::    

 Q: What is DFS? :    

 A: 


 Q: What is it useful for? :   

 A:   


  Q: what is the advantage of DFS over BFS? :   
  A: 
    1. Requires less memeory than BFS 
  
  :::: Comparisons between the two ::::

  // if you know a solution is not far from the root of tree: 

   use : BFS

   // if the tree is very deep and solution are rare:

    use : BFS ( DFS will take a bit long )

  // if the tree is very wide:

    use : DFS ( BFS will need too much memory )

  // if solutions are frequent but located deep in the tree: 

    use : DFS

    


