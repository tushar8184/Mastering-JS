//  Nested loop tutorial


for (let a = 1; a <= 4; a++) {
      console.log(`PINTU PATEL  ${a}`);

      for (let b = 1; b <= 3; b++) {
            console.log(`tussy ${b}`);
      }

}

/*'FOR' outer loop jo he wo 'a<=4' yaani 4 tak chalege
or 'FOR' inner loop jo he wo 'b<=3' yaani 3 tak chalega
'FOR' inner loop jo apni condition pehle finish karti
he or uske baad 'FOR' outer loop chalte he 
AND THIS IS A VERY IMPORTANT TOPIC*/

for (let a = 1; a <= 4; a++) {
      console.log(`CHICKOO PATEL PINTU  ${a}`);

      for (let b = 1; b <= a; b++) {
            console.log(`pintuuuu ${b}`);
      }

}
