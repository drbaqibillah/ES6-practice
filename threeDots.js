const ages = [12, 33, 56, 12];
const ages2 = [77, 12, 55, 45];
const ages3 = [12,33,55,66,77,];
const allAges = ages.concat(ages2).concat(ages3);
console.log(allAges);
const allAges2 = [...ages, ...ages2, ...ages3];
console.log(allAges2);

const business = 670;
const minister = 453;
const sochib = 888;
const max = Math.max(business,minister,sochib);
console.log(max);

const takaPoisa = [450, 670, 888];
const max2 = Math.max(...takaPoisa);
console.log(max2); 