const bcrypt = require('bcryptjs');

const hashPass = async (password) => {
    const hash = await bcrypt.hash(password, 13)
    console.log(hash)
}

hashPass('password123')
//  $2a$13$Ufd0Sxhv6Tkfq/IX5LnnauZ1LUoPrFHsSG13VUsvw5I8LIdcE7DP6
//  \_/\_/\_____________________/\_____________________________/
//  /   |         |                           |
//algo cost     salt                        hash

const testPass = async (password, hash) => {
    const isPass = bcrypt.compareSync(password, hash)
    console.log(isPass)
}

testPass('password123', '$2a$13$Ufd0Sxhv6Tkfq/IX5LnnauZ1LUoPrFHsSG13VUsvw5I8LIdcE7DP6')