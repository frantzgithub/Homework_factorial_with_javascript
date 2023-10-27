

function nfactoriel(n){
    
    if(n === 1 || n === 0){
        return 1;
    }
    if(n < 0){
        return "error!! le nombre doit être positif";
    }
    
    return n * nfactoriel(n - 1)
}

console.log(nfactoriel(2));

// here is another way to do it 

function nfactorielTwo(n){
    
    let f = 1;
    
    for(let i = 1; i <= n; i++){
        f = f * i;
    }
    return f;
}

console.log(nfactorielTwo(2))