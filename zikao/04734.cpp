/* 
  数据结构实践题
 */

#include <iostream>
#include <queue>
using namespace std;

// 定义二叉树节点结构体
struct TreeNode {
    int val;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
};

// 插入节点函数
TreeNode* insert(TreeNode* root, int val) {
    if (root == nullptr) {
        return new TreeNode(val);
    }
    if (val < root->val) {
        root->left = insert(root->left, val);
    } else {
        root->right = insert(root->right, val);
    }
    return root;
}

// 中序遍历输出二叉树
void inorderTraversal(TreeNode* root) {
    if (root != nullptr) {
        inorderTraversal(root->left);
        cout << root->val << " ";
        inorderTraversal(root->right);
    }
}

// 层次遍历输出二叉树
void levelOrderTraversal(TreeNode* root) {
    if (root == nullptr)
        return;
    
    queue <TreeNode*> q;
    q.push(root);
    while (!q.empty()) {
        int size = q.size();
        for (int i = 0; i < size; ++i) {
            TreeNode* node = q.front();
            q.pop();
            cout << node->val << " ";
            if (node->left)
                q.push(node->left);
            if (node->right)
                q.push(node->right);
        }
    }
}

int main() {
    TreeNode* root = nullptr;
    int num;
    cout << "请输入10个1-100的整数：" << endl;
    for (int i = 0; i < 10; ++i) {
        cin >> num;
        cin.clear(); // 清除输入流状态标志
        cin.ignore(numeric_limits<streamsize>::max(), '\n'); // 清除输入缓冲区
        root = insert(root, num);
    }

    cout << "中序遍历结果：" << endl;
    inorderTraversal(root);
    cout << endl;

    cout << "层次遍历结果：" << endl;
    levelOrderTraversal(root);
    cout << endl;

    // 等待用户输入，直到用户按下回车键退出
    cout << "输入任意字符并按下回车键以退出程序：" << endl;
    char c;
    cin >> c;

    return 0;
}