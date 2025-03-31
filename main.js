const App = () => {
    const [count, setCount] = React.useState(0);
    
    return React.createElement("div", { style: { textAlign: "center", fontFamily: "Arial" } },
        React.createElement("h1", null, "Hello, React without JSX!"),
        React.createElement("p", null, `Button clicked ${count} times`),
        React.createElement(
            "button", 
            { 
                onClick: () => setCount(count + 1), 
                style: { padding: "10px", fontSize: "16px" } 
            },
            "Click Me"
        )
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));


