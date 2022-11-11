function text(){
    const figure = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const text = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    const a = [];
  
    for(let i = 0; i < arguments.length; i++) {
        a[i] = text[arguments[i]];
    }
    return a;
  }
  
  console.log(text(7, 2, 4, 0));