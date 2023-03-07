const {execSync} = require('child_process');
try{
    console.log('start patching');
    execSync('git apply --ignore-whitespace patches/@react-native-community+art+1.2.0.patch');
    console.log('patching finished');
}catch(e){
    console.log("already patched");
}
