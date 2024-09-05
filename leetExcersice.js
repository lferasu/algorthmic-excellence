// var twoSum = function(nums, target) {  
//     for (let i=0;i<nums.length; i++){
//         for (let j = i+1 ; j<nums.length; j++) {
//             if(nums[i] + nums[j]===target) {
//                 return [i,j]
//             }
//         }
//     }
// };

// console.log(twoSum([3,2,3],6))

//345

// function reverseNumber(x){
//     let reveresed = 0 ;
//     let remaining = x;

//     while(remaining> 0) { 
//         const rem = remaining%10;
//         reveresed = reveresed * 10 + rem
//         remaining = ~~(remaining/10)
//     }
//     return reveresed;
// }


function reverseString(s) {
    for (let i = 0, lastIndex = s.length - 1; i < lastIndex; i++, lastIndex--) {
        let temp = s[i];
        s[i] = s[lastIndex];
        s[lastIndex] = temp;
    }

};


function reverseInteger(int) {
    let remaining = int;
    let reversed = 0;
    while (remaining > 0) {
        const rem = remaining % 10;
        reversed = reversed * 10 + rem;
        remaining = ~~(remaining / 10)
    }
    return reversed
}

isValid = function (s) {
  const startTime = new Date()
    if (s.length % 2 !== 0)
    {
        const endTime = new Date()
        const diff = endTime-startTime;
        console.log(endTime - startTime)
        return false;
    }
    const matchMap = new Map([['(', ')'], ['{', '}'], ['[', ']']]);
    const stack = []
    while (s.length > 0) {
        let value = s[0]
        if (value === matchMap.get(stack[stack.length - 1])) {
            stack.pop()
        } else {
            stack.push(value)
        }
        s = s.substring(1)
    }
    const endTime = new Date()
    const diff = endTime-startTime;
    console.log(endTime - startTime)
    return stack.lenght === 0

};

console.log(isValid("()[]{}"))



var mergeTwoLists = function(list1, list2) {
    const merged = {
        val : undefined,
        next : undefined
    };
    let ptr1 = list1;
    let ptr2 = list2;
    let mergedPtr = null;
    while(ptr1.val !== undefined || ptr2.val !==undefined ) {
        const node = {
            next : undefined
        }

        if(ptr1.val > ptr2.val)
        {
            node.val = ptr2.val;
            mergedPtr = node;
            ptr2= ptr2.next;

        } else if (ptr1.val < ptr2.val) {
            node.val = ptr1.val;
            mergedPtr = node;
            ptr1 = ptr1.next;
        } else{

              node.val = ptr2.val; 
              node.next = {val : ptr1.val, next : undefined};
              mergedPtr = node.next;
              ptr2 = ptr2.next;
              ptr1 = ptr1.next;

        }
    }

    
    
};


//linkedlist
// 1. reverse
// 2. find mid
// 3.  



