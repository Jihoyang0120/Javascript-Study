let address = "Seoul";
let members = {};
const addFamily = (age, name, role) => (family.members[role] = { age, name });
const getHeadCount = () => Object.keys(family.members).length;

let family = { address, members, addFamily, getHeadCount };

family.addFamily(30, "Kim", "aunt");
family.addFamily(3, "Chole", "niece");
family.addFamily(30, "Mung", "dog");

console.log(getHeadCount());
