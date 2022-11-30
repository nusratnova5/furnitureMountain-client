import React from 'react';

const Blog = () => {
    return (
      <div className='grid gap-5 mx-auto p-10 w-3/4 '>
      <div className='bg-lime-200 p-5 rounded'>
          <p className='font-bold'>1.What are the different ways to manage a state in a React application?</p>
          <p className='text-lg'><span className='font-bold'>Ans:</span>The Four Kinds of React State to Manage.They are local State,Global State,Server State and URL State. </p>
      </div>
      <div className='pt-5 bg-lime-200 p-5 rounded'>
          <p className='font-bold'>2.How does prototypical inheritance work?</p>
          <p className='text-lg'><span className='font-bold'>Ans:</span>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
      </div>
      <div className='pt-5  bg-lime-200 p-5 rounded'>
          <p className='font-bold'>3.What is a unit test? Why should we write unit tests?</p>
          <p className='text-lg'><span className='font-bold'>Ans:</span>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.</p>
         <p>We should write unit test because-<br/> 
         Unit tests save time and money.<br/>
         Well-written unit tests act as documentation for your code.<br/>
         It simplifies the debugging process.Unit tests make code reuse easier.<br/>
         Unit testing improves code coverage.
          </p>
      </div>

      <div className='pt-5  bg-lime-200 p-5 rounded'>
          <p className='font-bold'>4.React vs. Angular vs. Vue?</p>
          <p className='text-lg'><span className='font-bold'>Ans:</span></p>
      </div>
  </div>
    );
};

export default Blog;