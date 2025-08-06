---
title: C Programming Tutorial
description: This is a C language tutorial for learning the fundamentals of system-level programming.
slug: c-programming-tutorial
date: 02/06/2000
author: Mittal
image: https://images.unsplash.com/photo-1603574670812-d24560880210
---

# C Programming: A Comprehensive Guide

C is a foundational language in computer science, known for its speed, portability, and efficiency. This tutorial introduces you to essential C concepts, syntax, and real-world applications.

---

## 🧠 What is C?

C is a general-purpose, procedural programming language developed in the early 1970s by Dennis Ritchie. It’s used in operating systems, embedded systems, compilers, and other low-level programming tasks.

---

## 🚀 Why Learn C?

- **Foundation for Other Languages**: Languages like C++, Java, and Rust are heavily influenced by C.
- **Performance**: Offers fine-grained control over memory and processor instructions.
- **Portability**: Code can be compiled and run on almost any system.
- **System Programming**: C is still widely used in kernel, OS, and embedded development.

---

## 🛠️ Setting Up the Environment

To start programming in C, you need:

- A text editor like VS Code, Sublime, or even Notepad++
- A compiler like GCC (GNU Compiler Collection)
- Optionally, an IDE like Code::Blocks or Dev-C++

To install GCC on Linux:

```bash
sudo apt update
sudo apt install build-essential

```

# Code

```bash showLineNumbers
#include <stdio.h>
int main() {
    printf("Hello, World!\n");
    return 0;
}
```

Explanation:
#include <stdio.h> includes the standard input/output functions.
main() is the starting point of the program.
printf is used to output data to the console.
return 0 exits the program successfully.

# 🔁 Control Statements
```bash showLineNumbers
if (age > 18) {
    printf("You are an adult.");
} else {
    printf("You are a minor.");
}


for (int i = 0; i < 5; i++) {
    printf("%d\n", i);
}

```

# File : I/O
```bash showLineNumbers
#include <stdio.h>
int main() {
    FILE *file = fopen("example.txt", "w");
    if (file != NULL) {
        fprintf(file, "This is a test file.\n");
        fclose(file);
    }
    return 0;
}

```