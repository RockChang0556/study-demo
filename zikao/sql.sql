-- 创建图书表，存储图书信息
CREATE TABLE Books (
    book_id INT PRIMARY KEY, -- 图书编号
    title VARCHAR(100), -- 书名
    author VARCHAR(100), -- 作者
    publisher_id INT, -- 出版社编号，外键关联出版社表
    category_id INT, -- 类别编号，外键关联类别表
    stock_quantity INT, -- 库存数量
    FOREIGN KEY (publisher_id) REFERENCES Publishers(publisher_id), -- 外键约束
    FOREIGN KEY (category_id) REFERENCES Categories(category_id)
);

-- 创建类别表，存储图书类别信息
CREATE TABLE Categories (
    category_id INT PRIMARY KEY, -- 类别编号
    category_name VARCHAR(50) -- 类别名称
);

-- 创建出版社表，存储出版社信息
CREATE TABLE Publishers (
    publisher_id INT PRIMARY KEY, -- 出版社编号
    publisher_name VARCHAR(100), -- 出版社名称
    address VARCHAR(255) -- 出版社地址
);

-- 创建读者表，存储读者信息
CREATE TABLE Readers (
    reader_id INT PRIMARY KEY, -- 读者编号
    name VARCHAR(100), -- 姓名
    password VARCHAR(100), -- 密码
    gender VARCHAR(10), -- 性别
    age INT, -- 年龄
    contact VARCHAR(50) -- 联系方式
);

-- 创建借阅证表，存储借阅证信息
CREATE TABLE LibraryCards (
    card_id INT PRIMARY KEY, -- 借阅证编号
    reader_id INT, -- 关联读者编号，外键关联读者表
    card_type VARCHAR(50), -- 借阅证类型
    valid_until DATE, -- 有效期至
    FOREIGN KEY (reader_id) REFERENCES Readers(reader_id) -- 外键约束
);

-- 创建借阅记录表，存储图书借阅信息
CREATE TABLE BorrowRecords (
    record_id INT PRIMARY KEY, -- 借阅记录编号
    book_id INT, -- 关联图书编号，外键关联图书表
    reader_id INT, -- 关联读者编号，外键关联读者表
    borrow_date DATE, -- 借阅日期
    due_date DATE, -- 应还日期
    return_date DATE, -- 实际归还日期
    is_overdue BOOLEAN, -- 是否超期
    FOREIGN KEY (book_id) REFERENCES Books(book_id), -- 外键约束
    FOREIGN KEY (reader_id) REFERENCES Readers(reader_id)
);