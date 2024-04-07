import React from 'react';
import './SortingVisualizer.css';

export default class SortingVisualizer extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        array: [],
    };
  }

  componentDidMount(){
    this.resetArray();
  }

  resetArray(){
    const array = [];
    
    for(let i =0; i <310; i++){
        array.push(randomIntFromIntervel(5,700));
    }
    this.setState({array});
  }
mergeSort() {}
quickSort() {}
heapSort() {}
bubbleSort() {}

// another techniques
selectionSort() {}
insertionSort() {}
countingSort() {}
radixSort() {}
bucketSort() {}
shellSort() {}
combSort() {}
cycleSort() {}
// end

  render() {
    const {array} = this.state;

    return (
        <>
        {array.map((value, idx)=> (
            <div 
            className="array-bar"
            key={idx}
            style={{height: `${value}px`}}>

            </div>
        ))}

        <button onClick={() => this.resetArray()}>Generate New Array</button>
        <button onClick={() => this.mergeSort()}>Merge Sort</button>
        <button onClick={() => this.quickSort()}>Quick Sort</button>
        <button onClick={() => this.heapSort()}>Heap Sort</button>
        <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
{/* do this by userlsef */}
        <button onClick={() => this.selectionSort()}>Selection Sort</button>
        <button onClick={() => this.insertionSort()}>Insertion Sort</button>
        <button onClick={() => this.countingSort()}>Counting Sort</button>
        <button onClick={() => this.radixSort()}>Radix Sort</button>
        <button onClick={() => this.bucketSort()}>Bucket Sort</button>
        <button onClick={() => this.shellSort()}>Shell Sort</button>
        <button onClick={() => this.combSort()}>Comb Sort</button>
        <button onClick={() => this.cycleSort()}>Cycle Sort</button>
{/* uptothis */}
        
        </>
    );
  }
}


// got this from stack overflow
function randomIntFromIntervel(min, max){
    //min and max included
    
    return Math.floor(Math.random() * (max - min + 1) + min);
}