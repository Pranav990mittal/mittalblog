---
title: CSS Tutorial
description: Learn CSS for styling beautiful and responsive web pages.
slug: css-prog-tutorial
date: 02/06/2000
author: Mittal
image: https://images.unsplash.com/photo-1603574670812-d24560880210
---

# CSS: A Comprehensive Guide

CSS (Cascading Style Sheets) describes how HTML elements are to be displayed on screen, paper, or in other media. It handles colors, fonts, layouts, responsiveness, and more.

---

## 🧠 What is CSS?

CSS is the language used to style HTML documents. It can control layout, animations, responsiveness, and appearance across different screen sizes.

---

## 🚀 Why Learn CSS?

- **Styling**: Add colors, fonts, and spacing to your HTML.
- **Layout**: Control grid, flex, and responsive design.
- **User Experience**: Make sites visually appealing.
- **Animation**: Animate elements without JavaScript.

---

## 🛠️ Setting Up the Environment

You only need a browser and a text editor (like VS Code). You can embed CSS:

- Inline: in the `style` attribute
- Internal: in `<style>` tags
- External: linked via `.css` file

---

# Code

```bash showLineNumbers
/* HTML */
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Hello, CSS!</h1>
</body>
</html>

/* style.css */
h1 {
  color: blue;
  text-align: center;
}
```