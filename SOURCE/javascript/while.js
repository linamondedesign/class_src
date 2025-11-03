/**
 * 랫
 *무한반복
 * 
 * do {
 * 반복문장;
 * } while(조건식) 
 *
 */
// let i=1;
// while(i<6){
//   console.log( `${i}번째 반복입니다`);
//   i++;
// }
// console.log("종료");

// let i=1;
// do {
//   console.log( `${i}번째 반복입니다`);
//   i++;
// } while(i<6);

/**
 * break,continue; 
 * i값을 하나씩 증가시켜 가면서 i=5가 되면 멈춤
 */

 let i=0;
 while(i<10){
  i++;
  console.log(i);
  if(i === 5 ){
    //break;
    continue;
    console.log(i);
  }
 }
 console.log("종료");