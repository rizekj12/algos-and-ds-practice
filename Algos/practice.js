/*
 write a function “decode” that takes in a “network” (aka string). 
 Inside of a network are “packets”. A packet is made up of all the characters 
 after a “S” for start and before an “E” for end. Your function takes one 
 network at a time but should maintain its state between networks. 
 (Basically if you call decode(“abcSa”) and  then call decode(“12Edd”) 
 then “a12" is a packet. Return an array of completed packets
*/




function decode(str){
    //create a stack as an array
    let packet = []

    let temp = []
    //loop through string 
    //check if there is an S or an E

    for(i = 0; i < str.length; i++){
        if(str[i] === "S"){
            for(j = i + 1; j < str.length; j++){
                packet.push(str[j])
            }
        }else if(str[i] === "E"){
            for( j = 0; j < i ; j++){
                packet.push(str[j])
            }
        }
    }
    
    return packet 
}

console.log(decode('12Edd'))



//class Packets {
    // constructor() {
    //     this.substr = ''
    //     this.stack = []
    //     this.packets = []
    //   } 
    
    //   decode(s) {
    //     for (let i = 0; i < s.length; i++){
    //       let j = 0
    //       if (s[i] === 'S') {
    //         j = i+1
    //         this.substr = '' 
    //         while (j < s.length && s[j] !== 'S' && s[j] !== 'E') {
    //           this.substr += s[j]
    //           j++
    //         }
    //         this.stack.push(this.substr)
    //       } else if (s[i] === 'E') {
    //         this.substr = ''
    //         j = i-1
    //         while (j >= 0 && s[j] !== 'S' && s[j] !== 'E') {
    //           this.substr += s[j]
    //           j--
    //         }
    //         this.substr = this.substr.split('').reverse().join('')
    //         if (this.stack.length && this.stack[this.stack.length-1] === this.substr){
    //         this.packets.push(this.stack.pop())
    //         } else if (this.stack.length){ 
    //         this.packets.push(this.stack.pop() + this.substr)
    //         }
    //       }
    //     }
    //    //if the packet is incomplete, return empty arra
    //   return this.packets
    //   }
    // }

// 'abcSa'
// '12Edd'
// 'SabSabS123EjklEbbE'