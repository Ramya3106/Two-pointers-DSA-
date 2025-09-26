// Is Subsequence

var isSubsequence = function(s, t) {
    let pointer_s=0;
    for(let pointer_t=0;pointer_t<t.length;pointer_t++)
    {
        if(pointer_s<s.length && s[pointer_s] == t[pointer_t]){
            pointer_s++;
        }
    }
    if(pointer_s == s.length){
        return true;
    }
    else{
        return false;
    }
};