import React from 'react';
import './SortingVisualizer.css';
import * as sortingAlgorithms from "../sortingAlgorithms/sortingAlgorithms.js";

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

testSortingAlgorithms() {
    for(let i=0;i<100;i++){
        const array =[];
        const cnttesting =randomIntFromIntervel(1,1000);
        for(let i=0;i<cnttesting;i++){
            array.push(randomIntFromIntervel(-1000,1000));
        }
        const javaScriptSortedArray = this.state.array
        .slice()
        .sort((a,b)=>a-b);
        const sortedArray = sortingAlgorithms.mergeSort(this.state.array);
    
    
        // also printing if theyare eqiual or not into console
        console.log(arrayAreEqual(javaScriptSortedArray, sortedArray));
    

    }
}

mergeSort() {
    // generating copy of that aray to sort using inbuilt funciton
    const animations = sortingAlgorithms.mergeSort(this.state.array);
    const newAnimations = [];

    for(const animation of animations) {
      newAnimations.push(animation.comparison);
      newAnimations.push(animation.comparison);
      newAnimations.push(animation.swap);
    }

    for(let i=0;i<newAnimations.length;i++){
      const arrayBars = document.getElementsByClassName('array-bar');

     
     const isColorChange = i%3 !==2;

     if(isColorChange){
      const [barOneIdx, barTwoIdx]=newAnimations[i];
     const barOneStyle = arrayBars[barOneIdx].style;
     const barTwoStyle = arrayBars[barTwoIdx].style;
     
      const color = i%3 === 0 ? 'red' : 'blue';

      //  const {comparison, swap} = animations[i];

      setTimeout(() => {
barOneStyle.backgroundColor = color;
barTwoStyle.backgroundColor =  color;
          }, i*10);
    } else {
      setTimeout(() => {
        // const tempHeight = barOneStyle.height;
        const [barOneIdx, newHeight] = newAnimations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        barOneStyle.height = `${newHeight}px`;
      }, i*10);
    }}
    // const javaScriptSortedArray = this.state.array
    // .slice()
    // .sort((a,b)=>a-b);
    // const sortedArray = sortingAlgorithms.mergeSort(this.state.array);


    // // also printing if theyare eqiual or not into console
    // console.log(arrayAreEqual(javaScriptSortedArray, sortedArray));
} 


quickSort() {}
heapSort() {}
bubbleSort() {}

// another techniques
selectionSort() {}
insertionSort() {}
radixSort() {}
bucketSort() {}

// end

  render() {
    const {array} = this.state;

    return (
        <>
        {array.map((value, idx)=> (
            <div  
            className='array-bar'
            key={idx}
            style={{height: `${value}px`}}>

            </div>
        ))}

        <button onClick={() => this.resetArray()}>Generate New Array</button>
        <button onClick={() => this.mergeSort()}>Merge Sort</button>
        <button onClick={() => this.quickSort()}>Quick Sort</button>
        <button onClick={() => this.heapSort()}>Heap Sort</button>
        <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
        <button onClick={() => this.testSortingAlgorithms()}>Test Sorting Algorithms</button>
{/* do this by userlsef */}
        <button onClick={() => this.selectionSort()}>Selection Sort</button>
        <button onClick={() => this.insertionSort()}>Insertion Sort</button>
        <button onClick={() => this.radixSort()}>Radix Sort</button>
        <button onClick={() => this.bucketSort()}>Bucket Sort</button>

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


// testing the resiult of mergesort

function arrayAreEqual(arrayOne, arrayTwo) {
    if(arrayOne.length !== arrayTwo.length) return false;
    for(let i =0;  i< arrayOne.length ; i++){
        if(arrayOne[i]!== arrayTwo[i]) return false;
    }
    return true;

}