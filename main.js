let practice7Array = Array(7).fill("Hello"); 

console.log(practice7Array);

practice7Array.fill(99, 1, 4);

console.log(practice7Array);

let practice5Array = Array(5);

for(let i = 0; i < practice5Array.length; i++)
{
    practice5Array[i] = i * 10;
}

console.log(practice5Array);
