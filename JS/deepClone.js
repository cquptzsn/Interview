const deepClone = (obj) => {
    if (typeof obj !== 'object' || typeof obj == null) {
        return obj
    }
    let result
    if (obj instanceof Array) {
        result = []
    } else {
        result = {}
    }
    for (let key in obj) {
        if(obj.hasOwnProperty(key)) {
            result[key] = deepClone(obj[key])
        }
    }
    return result
}

const obj1 = {
    age: 18,
    address: {
        city: 'beijing' 
    },
    schools: ['a' , 'b', 'c']
}

const obj2 = deepClone(obj1)
console.log('obj2 => ', obj2)
obj2.address.city = '成都'
obj2.schools = ['d', 'e']
console.log('obj1 => ', obj1)

