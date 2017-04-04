# React TODO app

![](https://media.giphy.com/media/GuDI9sLsiRNqU/giphy.gif)

Don't leave Neville Longbottom, your newest client, down! He needs your help to create an To-Do List app, so that he can keep track of tasks that need doing.

Tonight you are going to be building your first very own React
application. You need to implement a TODO app, which allows the user
to create tasks and see a list of the created tasks. Aside from Hello World, the TODO app is one of the most basic ways to begin learning a new framework.

## Setup

There are no files provided, because you will be building out both the server and the front-end!

## Completion

There are four parts. Aim to complete the four parts - we'll be revisiting this soon and it would help to be more comfortable.

## Assignment

#### Part 1 - Express Setup

First build a very simple express server which serves one index page
to which you are able to link static files.

#### Part 2 - React Setup

Include all the libraries that React needs and test that it works by
writing a simple react view which shows a 'Hello World' message on the
page. Make sure you understand why we are including each piece, and
how everything connects together.

#### Part 3 - Layout

It is a good idea to first focus on building a static version of your
app. Do not worry about holding state or adding interactivity, but
instead focus on breaking your application into components and
implementing only the `render` method for those components.

Hardcode an array of tasks and focus on rendering them on the page with
React. Each task should have some sort of check button, and by default say NOT DONE at some point.

#### Part 4 - Interactivity

Now that you have the components built, implement interactivity.

- Allow the user to create a task by pressing the button in the
createTask component.
- Allow the user to mark a task as done (possibly through checking a checkbox).
- Complete tasks should say DONE instead of NOT DONE.

**Things to consider:**
- Think about which component will have what state at any time
- Think about what state you will need to keep in order to successfully implement the interactions
- Think about what an HTML checkbox looks like, and what data it returns if checked/unchecked

## Bonus

* Implement delete buttons for each task!
* Give the elements a 'className' attribute for any classes you want to give them for styling (since this is JavaScript, class is a reserved word). E.G:
  <p className="done">This task is complete!</p>
  <p className="not-done">This task needs doing...</p>
* Edit your task-completion function to change classNames appropriately!
