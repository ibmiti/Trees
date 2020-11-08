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

Q: What is an AST?   :
A: 

Q: WHat differentiates Trees from arrays and linked-list?   :
A: while they both can store data, arrays,and linkedlist do so in a linear fashion,
   while a tree stores things by heiracrchy e.g ; directory structure, coroporate structure - are both examples of hierarchical data

Q: What are the pros and cons if any when/with using a Tree?   :
A:

Q: What is root?    :  
A:

Q: what is parent?    :  
A: has linear relation with child?

Q: what is child?    :   
A: has linear upward relation to parent?


Q:what is ancsestors?   :  
A:

Q: what are Descendants?    :
A:

Q: what is Internal nodes?   :
A:

Q: what are external nodes/leaves/leaf?  :
A: very end of tree strucutre?

Q: what is edge?  :
A:

Q: what is level?   :
A:

Q: what is the hieght?   :
A:

Q: what is the depth?   :
A:

Q: What is a Binary Tree?  :    
A: a tree structure in which each node stemming from parent - has at maximum two children, this is a limited tree for the growth is curved by it being bound to - 2 at max child nodes per node

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

Q: What makes Binary Search tree different that Binary Tree
A: Binary search tree: Used for searching. it is a Binary tree arranged where the left child contains only nodes with values less than the parent node, and where the right child only contains nodes with values greater than or equal to the parent.
   

Q: What are BINARY SEARCH TREE's ( BST )useful for?:
A: for comparing things, it is better than an hash map for this use

Q: Why is BST better than Hash map for comparing elements?:
A: BST's preserve relationships, hashes do not preserve relationships

Q: What are the rules for a BST?:
A: All nodes to the right must be greater than the parent node ( middle )
   and all nodes to the left must contain values less than the parent node 

                   (101) -- parent node
                /         \
             (33)        (105)
             /   \      /      \
           (9)  (37)   (104) (144)
   
Q: What are unbalanced Binary Search Trees?:  
A: where nodes are only inserted on one branch left or right - which becomes sort of a linked-list

Q: what are the pros and cons of BST?:
A: 
  1. most operations on BST's are faster than O(n) 
  2. they are ordered
  3. we can keep the nodes anywhere in memory leading to a flexibility in size
     which is to say ; we can keep growing our tree dynamically
    
Q: What are the cons of using BST?:
A: There are no constant run-time operations of O(1), all operations require traversal



