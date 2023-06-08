function flattenObject(obj, prefix="") {
let flattened = {}

  for(let key in obj) {
    if(typeof obj[key] ==="object" && obj[key] !== null) {
      const nestedKey = flattenObject(obj[key], `${prefix}${key}_`)
      flattened = {...flattened, ...nestedKey}
    } else {
      const newKey = `${prefix}${key}`
      flattened[newKey] = obj[key]
    }
  }

return flattened
}

const user = {
  name: "John",
  address: {
    primary: {
      house: "109",
      street: {
        main: "21",
        cross: "32"
      }
    }
  }
};

const flattenedUser = flattenObject(user, "user_");
console.log(flattenedUser);
