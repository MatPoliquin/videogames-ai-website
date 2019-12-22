// Notice there is no 'import' statement. 'tf' is available on the index-page
// because of the script tag above.




function WriteOutput(value) {
  var node = document.getElementById('test-output');
  node.innerHTML += value;
}



async function AsyncTest() {
  WriteOutput("AsyncTest() - BEGIN =====================<br>");
  var i=0;
  while(i < 9000000000){
    i++;
  }
  WriteOutput("AsyncTest() - END =====================<br>");
}

async function StartTest() {

  //WriteOutput("StartTest - BEGIN =====================");


  //await AsyncTest();

  MatMulTest();

  /*MatMulTest().then(function() {
    WriteOutput("End of Matmul test");

  }).then(function() {
    WriteOutput("Other Test");

  }).catch(function(err) {
    console.log('Test Error: ' + err.message);
  });*/

  
  //WriteOutput("StartTest - END =====================");
}

async function StartTest2() {

  WriteOutput("StartTest2 - BEGIN =====================<br>");


  //await AsyncTest();

  //MatMulTest();

  /*MatMulTest().then(function() {
    WriteOutput("End of Matmul test");

  }).then(function() {
    WriteOutput("Other Test");

  }).catch(function(err) {
    console.log('Test Error: ' + err.message);
  });*/

  
  WriteOutput("StartTest2 - END =====================<br>");
}

async function run() {
  //document.write("RUN TEST")

  //await MatMulTest();

  //await AsyncTest();
  
}

document.addEventListener('DOMContentLoaded', run);







      