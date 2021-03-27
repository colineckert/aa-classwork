class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
   constructor() {
       this.root = null;
   }

   insert(val, root = this.root) {
        if (!this.root) {
            this.root = new TreeNode(val);
            return;
        }

        if (val < root.val) {
            if (!root.left) {
                root.left = new TreeNode(val);
            } else {
                this.insert(val, root.left);
            }
        } else {
            if (!root.right) {
                root.right = new TreeNode(val);
            } else {
                this.insert(val, root.right);
            }
        }
   }

   

   searchRecur(val, root = this.root) {
       if (!root) return false;

       if (val < root.val) {
           return this.searchRecur(val, root.left)
       } else if (val > root.val) {
           return this.searchRecur(val, root.right)
       } else {
           return true;
       }
   }
// this still has O(n) space with the queue
//    searchIter(val) { 
//         if (!this.root) return false;

//         let queue = [this.root];
//         while (queue.length) {
//             let node = queue.shift();
//             if (val < node.val) {
//                 if (node.left) queue.push(node.left);
//             } else if (val > node.val) {
//                 if (node.right) queue.push(node.right);
//             } else {
//                 return true;
//             }
//         }

//         return false;
//    }

// O(1) space
   searchIter(val) {  
       let currNode = this.root;
       while (currNode) {
            if (val < currNode.val) {
                currNode = currNode.left;
            } else if (val > currNode.val) {
                currNode = currNode.right;
            } else {
                return true;
            }
       }

       return false;
   }
}

module.exports = {
    TreeNode,
    BST
};