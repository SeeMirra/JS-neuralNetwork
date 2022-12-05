function neuralNetwork(inputs) {
  // Initialize weights randomly with mean 0
  this.weights = [];
  for (let i = 0; i < inputs.length; i++) {
    this.weights.push(Math.random() * 2 - 1);
  }

  // Activation function
  this.activate = (sum) => 1 / (1 + Math.exp(-sum));

  // Forward propagation
  this.forward = (inputs) => {
    let sum = 0;
    for (let i = 0; i < inputs.length; i++) {
      sum += inputs[i] * this.weights[i];
    }
    return this.activate(sum);
  }
}
