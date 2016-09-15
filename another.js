/**
 * Created by shituocheng on 2016/9/12.
 */
function Cat(name) {
    this.name = name;
    this.say = function(){
        return("Hello, "+this.name+"!");
    };
}

var kitty = new Cat('Kitty');
var test = kitty.say('Kitty');
console.log(test);

/*
var doraemon = new Cat('哆啦A梦');
if (kitty && kitty.name === 'Kitty' && kitty.say && typeof kitty.say === 'function' && kitty.say() === 'Hello, Kitty!' && kitty.say === doraemon.say) {
    alert('测试通过!');
} else {
    alert('测试失败!');
}
*/
