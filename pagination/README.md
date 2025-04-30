# Pagination and Hypermedia in RESTful APIs

## 📚 Resources

- [REST API Design: Pagination](https://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api#pagination)
- [HATEOAS (Hypermedia As The Engine Of Application State)](https://restfulapi.net/hateoas/)

---

## 🎯 Learning Objectives

By the end of this project, you should be able to clearly explain (without looking it up):

- ✅ How to paginate a dataset using simple `page` and `page_size` parameters
- ✅ How to paginate a dataset using **hypermedia metadata** (HATEOAS)
- ✅ How to paginate in a **deletion-resilient** manner

---

## ⚙️ Requirements

- All files will be interpreted/compiled on **Ubuntu 20.04 LTS** using **Python 3.9**
- All files must end with a **new line**
- The first line of all your Python files should be exactly:  
  `#!/usr/bin/env python3`
- A `README.md` file at the root of the project is **mandatory**
- Code must follow the **pycodestyle** style guide (version `2.5.*`)
- The length of your files will be tested using `wc`
- All modules must have **full documentation**:
  ```bash
  python3 -c 'print(__import__("my_module").__doc__)'
