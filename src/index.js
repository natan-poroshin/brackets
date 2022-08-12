
  /** 
 *  @param {String} str
 *  @param {Array} bracketsConfig
 * bracketsConfig = [['(', ')'], ['|', '|']] example
 */
module.exports = function check(str, bracketsConfig) {
  let stack = [];
    const openBrackets = bracketsConfig.map(pair => pair[0]);
    const closeBrackets = bracketsConfig.map(pair => pair[1]);
  
    for(let i = 0; i < str.length; i++){
      let char = str[i];
  
      if(openBrackets.includes(char)){
        stack.push(char);
      }
      
      if(closeBrackets.includes(char)){
        let index = closeBrackets.indexOf(char);
        topChar = stack.pop();

        if(topChar !== openBrackets[index]){
            return false;
        }
      }
    }

    return stack.length === 0;
}
