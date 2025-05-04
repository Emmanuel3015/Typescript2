// Import React library
import React from "react";

// Define the type for the props
interface GreetingProps {
  name: string;
}

// Create the Greeting component with type annotations
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

// Export the component
export default Greeting;
