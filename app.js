// let [x1,x2] = [0.05,0.1];
// let [w1,w2,w3,w4,w5,w6,w7,w8] = [0.15,0.2,0.25,0.3,0.4,0.45,0.5,0.55];
// let [b1,b2] = [0.35, 0.6]
// let [t1 ,t2] = [0.01, 0.99];

// //Forward pass

// function getinputs(x1,x2){
// const h1 = x1*w1 + x2*w2 + b1,
// Oh1 = 1/(1+(Math.exp(-h1)));
// console.log(`h1:${h1}`)
// console.log(`Oh1:${Oh1}`)

// const h2 = x1*w3 + x2*w4 + b1,
// Oh2 = 1/(1+(Math.exp(-h2)));
// console.log(`h2:${h2}`)
// console.log(`Oh2:${Oh2}`)

// const y1 = Oh1*w5 + Oh2*w6 + b2,
// Oy1 = 1/(1+(Math.exp(-y1)));
// console.log(`y1:${y1}`)
// console.log(`Oy1:${Oy1}`)

// const y2 = Oh1*w7 + Oh2*w8 + b2,
// Oy2 = 1/(1+(Math.exp(-y2))); 
// console.log(`y2:${y2}`)
// console.log(`Oy2:${Oy2}`)  


// // //Error 
// const e1 = (1/2)*Math.pow((t1-Oy1),2) 
// const e2 = (1/2)*Math.pow((t2-Oy2),2) 
// const Etotal = e1 + e2;
// console.log(`e1:${e1}`)
// console.log(`e2:${e2}`)   
// console.log(`Etotal:${Etotal}`)   


// }

// getinputs(0.05,0.1)

//declaring variables
const [input1,input2] = [0.05,0.1];
const [weight1,weight2,weight3,weight4] = [0.15,0.2,0.25,0.3];
const [bias1, bias2] = [0.35,0.6];

// Calculate the values of h1 and h2
const h1 = (input1 * weight1) + (input2 * weight2) + bias1;
const h2 = (input1 * weight3) + (input2 * weight4) + bias1;

// Define the activation function (sigmoid)
function sigmoid(x) {
  return 1 / (1 + Math.exp(-x));
}

// Apply the activation function to the values of h1 and h2
const output_h1 = sigmoid(h1);
const output_h2 = sigmoid(h2);

// Log the results
console.log(`h1: ${h1}`);
console.log(`h2: ${h2}`);
console.log(`output_h1: ${output_h1}`);
console.log(`output_h2: ${output_h2}`);



// declaring variables in second part
const [weight5,weight6,weight7,weight8] = [0.4,0.45,0.5,0.55];

// Calculate the values of y1 and y2
const y1 = (output_h1 * weight5) + (output_h2 * weight6) + bias2;
const y2 = (output_h1 * weight7) + (output_h2 * weight8) + bias2;

// Apply the activation function to the values of y1 and y2
const output_y1 = sigmoid(y1);
const output_y2 = sigmoid(y2);

// Log the results
console.log(`y1: ${y1}`);
console.log(`y2: ${y2}`);
console.log(`output_y1: ${output_y1}`);
console.log(`output_y2: ${output_y2}`);



// Target values
const [t1,t2] = [0.01,0.99];

// Calculate the mean squared error
const tte = 0.5 * (Math.pow((output_y1 - t1), 2) + Math.pow((output_y2 - t2), 2));

// Log the result
console.log(`TTE: ${tte}`);


// Define the derivative of the sigmoid activation function
function sigmoidDerivative(x) {
  return sigmoid(x) * (1 - sigmoid(x));
}


//backward pass
// Initialize the values of the deltas
let delta_y1 = output_y1 - t1;
let delta_otp_y1 = output_y1 * (delta_y1);


let delta_y2 = output_y2 - t2;

console.log(`delta_y1: ${delta_y1}`)
console.log(`delta_otp_y1: ${delta_otp_y1}`)

let delta_h1 = (delta_y1 * weight5 + delta_y2 * weight7) * sigmoidDerivative(h1);
// let delta_h2 = (delta_y1 * weight6 + delta_y2 * weight8) * sigmoidDerivative(h2);

// // // Define the learning rate and 
const learningRate = 0.5;
// const  = 0.1;

// // Update the weights and biases from h1 to the output layer
const new_weight5 = weight5 - learningRate * (delta_y1 * output_h1 * weight5);
// const new_weight6 = weight6 - learningRate * (delta_y1 * output_h2  * weight6);
// const new_weight7 = weight7 - learningRate * (delta_y2 * output_h1  * weight7);
// const new_weight8 = weight8 - learningRate * (delta_y2 * output_h2  * weight8);
// // const new_bias2 = bias1 - learningRate * delta_y1;
// // const new_bias3 = bias2 - learningRate * delta_y2;

// // // Update the weights and biases from the input layer to h1 and h2
// const new_weight1 = weight1 - learningRate * (delta_h1 * input1 * weight1);
// const new_weight2 = weight2 - learningRate * (delta_h1 * input2 * weight2);
// const new_weight3 = weight3 - learningRate * (delta_h2 * input1 * weight3);
// const new_weight4 = weight4 - learningRate * (delta_h2 * input2 * weight4);
// // const new_bias1 = bias1 - learningRate * delta_h1;
// // const new_bias2prime = bias2 - learningRate * delta_h2;

// // Print the updated weights and biases
// console.log(`New weights and biases from the input layer to h1 and h2:`);
// console.log(`new_weight1: ${new_weight1}`);
// console.log(`new_weight2: ${new_weight2}`);
// console.log(`new_weight3: ${new_weight3}`);
// console.log(`new_weight4: ${new_weight4}`);
// // console.log(`new_bias1: ${new_bias1}`);
// // console.log(`new_bias2prime: ${new_bias2prime}`);

// console.log(`New weights and biases from h1 to the output layer:`);
console.log(`new_weight5: ${new_weight5}`);
// console.log(`new_weight6: ${new_weight6}`);
// console.log(`new_weight7: ${new_weight7}`);
// console.log(`new_weight8: ${new_weight8}`);
// console.log(`new_bias2: ${new_bias2}`);
// console.log(`new_bias3: ${new_bias3}`);

  





    