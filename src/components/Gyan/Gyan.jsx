import React from 'react';

const Gyan = () => {
    return (
        <section>
            <h2 className='font-extrabold text-3xl mb-4'>General Gyans</h2>
            <ul className='list-decimal ml-7 mb-4'>
                <li className='font-medium text-xl'>What's the difference between props and state in React.js?</li>
                <li className='font-medium text-xl'>How does useState() work?</li>
                <li className='font-medium text-xl'>Purpose of useEffect other than fetching data?</li>
                <li className='font-medium text-xl'>How does React.js work?</li>
            </ul>
            <div className='mb-3'>
                <h3 className='font-bold text-lg mb-3'>1. What's the difference between props and state in React.js?</h3>
                <p>
                    <span className='border-2 border-rose-500 p-1 rounded text-rose-600 text-md font-medium'>State</span><br/><br/>
                    State is the currrent status of a component or the parts of a component. It contains the current information about a component. The information can be changed at any time which means the changing of the current status of the component. To keep tracking of state and manage it, React.js provides a built in function named as 'useState' also categorized by Hook. When state is changed, react compare the previous state with the current state and just re-renders it not reloads the whole application.
                </p>
                <p className='mb-5'>On the otherhand,</p>
                <p>
                    <span className='border-2 border-purple-800 p-1 rounded text-purple-600 text-md font-medium'>Props</span><br/><br/>
                    Props, It is the short form of the word 'Properties' often used by developers.
                    Props are used to pass data to child components. These are unidirectional means that we can pass data using props from parent to children. Any type of data can be passed through.
                </p>
            </div>
            <div className='mb-3'>
                <h3 className='font-bold text-lg mb-3'>2. How does useState() work?</h3>
                <p><span className='border-2 border-rose-500 p-1 rounded text-rose-600 text-md font-medium'>useState()</span> is a React.js Hook. </p>
                <p>It is used to manage react component state. </p>
                <h3>useState() Hook Syntax:</h3>
                <h4 className='font-bold'><span className='border bg-cyan-200'>const [state, setState] = useState(initialValue)</span></h4>
                <p><strong>useState()</strong> is used inside react component</p>
                <p>Here,<br/>
                    <strong>useState()</strong> takes an argument as the initial value of a component state.
                </p>
                <p>
                    It returns an array of two elements. First one is the state of the component and last is a function for handling the state. 
                </p>
                <p>State is a primitive data. So, We can't change it using typical javascript methods but we can replace it through "<strong>setState</strong>" method/function. <strong>setState()</strong> takes an argument as the new value of "<strong>State</strong>". The state can change by user interactions or automatically by the script.</p>
            </div>
            <div className='mb-3'>
                <h3 className='font-bold text-lg mb-3'>2. Purpose of useEffect other than fetching data?</h3>
                <p>
                <span className='border-2 border-rose-500 p-1 rounded text-rose-600 text-md font-medium'>useEffect()</span> is an another react hook. It's used to perform side effect to a react component and used inside a component. Often used to fetch data from API, or Local. useEffect() performs in asynchronous method. It takes two arguments second one is the dependencies. Also used for Timer(Interval, setTimout), DOM Manipulation.
                </p>
            </div>
            <div>
                <h3 className='font-bold text-lg mb-3'>2. How does React.js work?</h3>
                <p>React.js is a javascript library used to build User Interfaces of web application.</p>
                <p>It gives best user experience to users.</p>
                <p>It has feature called Virtual DOM. What it does? In react app, DOM changes don't executed directly. Before every changes react keeps a copy of previous DOM called "Virtual DOM". when any change is happened to the DOM, react compares the updated Virtual DOM to the previous Virtual DOM. Checks where the changes happend, after that it just re-renders the updated part of actual DOM.This process also called reconciliation. Here part means the the component of react app. Every component has state. If any interaction happened means that the state is changed. React compare only the previous state and updated state. Then executes the updated component. This way it reduces a huge work that need to updated the DOM Changes. Virtual DOM is performed by react 'Diff Algorithm'. For this reason, after any changes react app doesn't need the manipulate the whole app. It has more features like Component Based Architecture, Declarative Approach, JSX, in built Hooks such as useState, useffect, etc. </p>
            </div>

        </section>
    );
};

export default Gyan;