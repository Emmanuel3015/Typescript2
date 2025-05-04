// Step 1: Import React and Component with TypeScript types

import { Component } from "react";

// Step 2: Define interfaces for props and state
interface CounterProps {} // No props used in this component
interface CounterState {
  count: number; // State has a single property 'count'
}

// Step 3: Extend Component with props and state interfaces
class Counter extends Component<CounterProps, CounterState> {
  // Step 4: Define the initial state with type safety
  state: CounterState = {
    count: 0,
  };

  // Step 5: Arrow function to increment the count
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  // Step 6: Render method to show the UI
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
