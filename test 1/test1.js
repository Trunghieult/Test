let firstNum = document.getElementById("Number1"),
        secondNum = document.getElementById("Number2"),
        btnCheck = document.getElementById("check"),
        result = [],
        sum = 0;
      btnCheck.onclick = () => {
        for (
          let i = Number(Number1.value);
          i <= Number(Number2.value);
          i += 1
        ) {
          let check = 0;
          for (let j = 2; j < i; j ++) {
            if (i % j === 0) {
              check += 1;
            }
          }
          if (check < 1) {
            result.push(i);
          }
        }
        for (let x = 0; x < result.length; x ++) {
          sum += result[x];
        }
        let resultPrint =
          "Các số nguyên tố trong khoảng:" +
          result.join(", ") +
          '<br>' +
          "Tổng các số nguyên tố là: " +
          sum;
        document.getElementById("result").innerHTML = resultPrint;
        result = [];
        sum = 0;
      };