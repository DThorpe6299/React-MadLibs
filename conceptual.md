### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it? React is a lightweight, flexible frontend library. Often used to build modular applications.

- What is Babel? Babel is a free and open-source JavaScript transcompiler that transforms code into JavaScript code.

- What is JSX? JSX is an extension of the JavaScript language syntax. It is used in several frontend frameworks, including React.

- How is a Component created in React? Components are the building blocks of React. It has pieces of UI and logic.

- What are some difference between state and props? State is toggled/manipulated within the component while props are passed from a parent component. Also props are immutable while state can change.

- What does "downward data flow" refer to in React? The convention of a parent component passing data down to its children via props and state in the parent can be changed by passing a function down that the child would put information into.

- What is a controlled component? One thats state is controlled by React.

- What is an uncontrolled component? One thats state is not controlled by React. It can handle its own state.

- What is the purpose of the `key` prop when rendering a list of components? It is an identifier for React to quicly know which components have been changed to re-render only those ones very quickly via Hot Module Replacement (HMR).

- Why is using an array index a poor choice for a `key` prop when rendering a list of components? This is because as items are added/removed from the array the index will change so the key (which should be a unique and constant identifier) would constantly change which could leading to unwanted results or reduced performance speed.

- Describe useEffect.  What use cases is it used for in React components? useEffect will run after the first render. It will also run after all re-renders by default. It accepts a callback function as it's first argument and the second is an array that may or may not be empty depending on the desired side effect. useEffect returns undefined or a function. If a function is returned, it will run before the component unmounts or before the effect runs again.

- What does useRef do?  Does a change to a ref value cause a rerender of a component? It returns a mutable object with a key of 'current' whose value is equal to the inital value passed into the hook. The object persists across renders and mutating the object does not trigger a re-render.

- When would you use a ref? When wouldn't you use one? You would use it when accessing an underlying DOM element.It should not be used to access the DOM and to make changes.

- What is a custom hook in React? When would you want to write one? a custom hook is a React hook created by the developer to achieve one or more tasks such as: abstracting repetitive logic, handling repeated tasks and to generate your own JSX.
