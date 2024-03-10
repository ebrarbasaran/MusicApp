# MusicApp ✨ 
## Using the State Hook
There are two types of data that control a component: props and state. props are set by the parent and they are fixed throughout the lifetime of a component. For data that is going to change, we have to use state.You can think of it as a variable.It allows us to store data and also change it when we want.
The state is generally initialized in constructor and then call setState when we want to change it.

To use state, you need to import useState from react.
Sytntax: 
const [stateName,setStateName] = useState(<initialValue>);

### :black_small_square: state in the project
![State](https://github.com/ebrarbasaran/MusicApp/blob/main/State.png)

### :black_small_square: Design analysis for custom component
![ComponentSolution](https://github.com/ebrarbasaran/MusicApp/blob/main/ComponentSolution.png)
