# Simple++ Usage Guide

## Introduction

**Simple++** is a programming language designed to simplify the process of creating websites. This guide will walk you through the basics of writing and running Simple++ code.

## Writing Simple++ Code

Simple++ code is written in files with the `.sp++` extension. Here is a basic example:

```simplepp
Simple+en(website/simple site)$
(Top Bar#Color:#443.(Menu #ID=Menu))
    (Item#Text:"Home"#Link:"/home")
    (Item#Text:"About"#Link:"/about")
    (Item#Text:"Contact"#Link:"/contact")
(Main Content#Color:#FFF)
    (Header#Text:"Welcome to Simple++")
    (Paragraph#Text:"This is a simple website created using Simple++ language.")
(Footer#Color:#443)
    (Text#Text:"© 2025 Simple++. All rights reserved.")
```

## Running Simple++ Code

To run Simple++ code, you need to use the Simple++ interpreter. Follow these steps:

1. Ensure you have Node.js installed on your system.
2. Clone the Simple++ repository and install dependencies:

    ```sh
    git clone https://github.com/state-NER/Simple.git
    cd Simple
    npm install
    ```

3. Create a `.sp++` file with your Simple++ code. You can use the provided `example.sp++` as a reference.
4. Run the interpreter with the following command:

    ```sh
    npm start -- example.sp++
    ```

## Simple++ Syntax

### Basic Structure

A Simple++ program starts with a declaration of the website and its properties. For example:

```simplepp
Simple+en(website/simple site)$
```

### Components

You can define various components such as top bars, menus, content, and footers. Each component can have properties like color, text, and links. For example:

```simplepp
(Top Bar#Color:#443.(Menu #ID=Menu))
    (Item#Text:"Home"#Link:"/home")
    (Item#Text:"About"#Link:"/about")
    (Item#Text:"Contact"#Link:"/contact")
```

### Main Content

The main content of the website is defined using components like headers and paragraphs. For example:

```simplepp
(Main Content#Color:#FFF)
    (Header#Text:"Welcome to Simple++")
    (Paragraph#Text:"This is a simple website created using Simple++ language.")
```

### Footer

The footer can contain text and other elements. For example:

```simplepp
(Footer#Color:#443)
    (Text#Text:"© 2025 Simple++. All rights reserved.")
```

## Conclusion

Simple++ makes it easy to create structured and styled websites with minimal effort. Use this guide to get started and explore the possibilities of the Simple++ programming language.