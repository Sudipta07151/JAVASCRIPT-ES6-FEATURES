//get a new array based on existing values(without destroying the original array)

const prices = [10, 20, 45, 67, 11, 90]


const pricesMap = prices.map(price => price * 0.2)
console.log(pricesMap)

const pricesMapList = prices.map((price) => {
    return `<h1>${price * 2}</h1>`
})

console.log(pricesMapList)


const products = [{
    "_id": "tftRbzc6Pic7NyCkg",
    "ancestors": [],
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "title": "Vans Men's Suede Sk-8 Hi Shoe",
    "pageTitle": "Nesciunt itaque modi soluta sint sint.",
    "description": "This shoe is so rad that it was brought back to life from the past so that you can wear it yourself. Consider that a sign.\n\n* Canvas\n* Rubber sole\n* Featuring sturdy canvas and suede uppers\n* Signature waffle rubber outsoles\n* Padded collar and heel counters for all-day comfort, support * and flexibility\n* Legendary lace-up high top",
    "type": "simple",
    "vendor": "Vans",
    "price": {
        "range": "24.99",
        "min": 24.99,
        "max": 24.99
    },
    "isLowQuantity": false,
    "isSoldOut": false,
    "isBackorder": false,
    "metafields": [
        {
            "key": "Material",
            "value": "Canvas"
        },
        {
            "key": "Sole",
            "value": "Rubber"
        }
    ],
    "requiresShipping": true,
    "hashtags": [
        "aBrzKpykg9jzL62i4",
        "dj5xTy5dcQ2WRiS9L",
        "E5oZpTSjYnYfAQSiz"
    ],
    "isVisible": true,
    "publishedAt": {
        "$date": "2016-08-12T08:05:39.743Z"
    },
    "createdAt": {
        "$date": "2016-08-23T05:53:16.134Z"
    },
    "updatedAt": {
        "$date": "2016-08-23T05:53:16.134Z"
    },
    "handle": "vans-men-s-suede-sk-8-hi-shoe",
    "workflow": {
        "status": "new"
    }
},
{
    "_id": "xwig5CNnHZDB8vS94",
    "ancestors": [
        "tftRbzc6Pic7NyCkg",
        "fc6Waj38KdzRaKX4g"
    ],
    "type": "variant",
    "price": 24.99,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "optionTitle": "Size 9",
    "inventoryQuantity": 20
},
{
    "_id": "3XmZojrGggsPbeDrY",
    "ancestors": [
        "tftRbzc6Pic7NyCkg",
        "fc6Waj38KdzRaKX4g"
    ],
    "type": "variant",
    "price": 24.99,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "optionTitle": "Size 10",
    "inventoryQuantity": 20
},
{
    "_id": "neAZSEvZbXtkwE2GB",
    "ancestors": [
        "tftRbzc6Pic7NyCkg",
        "fc6Waj38KdzRaKX4g"
    ],
    "type": "variant",
    "price": 24.99,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "optionTitle": "Size 11",
    "inventoryQuantity": 20
},
{
    "_id": "YdauT3r6hNM2ydRxp",
    "ancestors": [
        "tftRbzc6Pic7NyCkg",
        "MFQmGGPti9XBLNtiK"
    ],
    "type": "variant",
    "price": 24.99,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000"
},
{
    "_id": "BD4N25BKfKE8vSfPx",
    "ancestors": [
        "tftRbzc6Pic7NyCkg",
        "MFQmGGPti9XBLNtiK"
    ],
    "type": "variant",
    "price": 24.99,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000"
},
{
    "_id": "iBc28EYoRC7XR7RZH",
    "ancestors": [
        "tftRbzc6Pic7NyCkg",
        "MFQmGGPti9XBLNtiK"
    ],
    "type": "variant",
    "price": 24.99,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000"
},
{
    "_id": "2shvxg8QooaNFF9ZP",
    "ancestors": [
        "tftRbzc6Pic7NyCkg"
    ],
    "type": "variant",
    "price": 24.99,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "title": "Black",
    "weight": 3,
    "inventoryQuantity": 0
},
{
    "_id": "yBKSrMkWq3dN2C2sj",
    "ancestors": [
        "tftRbzc6Pic7NyCkg"
    ],
    "type": "variant",
    "price": 24.99,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "weight": 3,
    "title": "Red",
    "inventoryQuantity": 0
},
{
    "_id": "SssE4bg8W3mPEbJmY",
    "ancestors": [
        "tftRbzc6Pic7NyCkg",
        "2shvxg8QooaNFF9ZP"
    ],
    "type": "variant",
    "price": 24.99,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "optionTitle": "Size 9",
    "inventoryQuantity": 20,
    "title": "Size 9"
},
{
    "_id": "jR9JTWhJ6ZXbga648",
    "ancestors": [
        "tftRbzc6Pic7NyCkg",
        "2shvxg8QooaNFF9ZP"
    ],
    "type": "variant",
    "price": 24.99,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "optionTitle": "Size 10",
    "inventoryQuantity": 100,
    "title": "Size 10"
},
{
    "_id": "spvzy23w3goaHaqxq",
    "ancestors": [
        "tftRbzc6Pic7NyCkg",
        "2shvxg8QooaNFF9ZP"
    ],
    "type": "variant",
    "price": 24.99,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "optionTitle": "Size 11",
    "inventoryQuantity": 100,
    "title": "Size 11",
    "isVisible": true
},
{
    "_id": "kXcxPaczbLP8SLjhk",
    "ancestors": [
        "tftRbzc6Pic7NyCkg",
        "yBKSrMkWq3dN2C2sj"
    ],
    "type": "variant",
    "price": 24.99,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "optionTitle": "Size 9",
    "inventoryQuantity": 100,
    "title": "Size 9",
    "isVisible": true
},
{
    "_id": "uTWJ2DiAZZgq4q8TY",
    "ancestors": [
        "tftRbzc6Pic7NyCkg",
        "yBKSrMkWq3dN2C2sj"
    ],
    "type": "variant",
    "price": 24.99,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "optionTitle": "Size 10",
    "inventoryQuantity": 100,
    "title": "Size 10",
    "isVisible": true
},
{
    "_id": "G27pYihDTHJoMv6Co",
    "ancestors": [
        "tftRbzc6Pic7NyCkg",
        "yBKSrMkWq3dN2C2sj"
    ],
    "type": "variant",
    "price": 24.99,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "optionTitle": "Size 11",
    "inventoryQuantity": 100,
    "title": "Size 11",
    "isVisible": true
},
{
    "_id": "LXECo6pZectbeHYEi",
    "ancestors": [],
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "title": "DC Men's Pure SE Skate Shoe",
    "pageTitle": "Nesciunt itaque modi soluta sint sint.",
    "description": "Stand out, make waves and lay down your best tricks in this two-tone leather technical design from DC. Featuring a lace-up front for full adjustability, the low-profile Pure Se is equipped with a sturdy upper, generous cushioning at the collar and tongue, and plenty of padding at the insole for those extra-hard landings. The thick rubber midsole lends added shock absorbency, while the grip rubber bottom will keep you glued to your board.",
    "type": "simple",
    "vendor": "DC",
    "price": {
        "range": "60.76",
        "min": 60.76,
        "max": 60.76
    },
    "isLowQuantity": false,
    "isSoldOut": false,
    "isBackorder": false,
    "metafields": [
        {
            "key": "Material",
            "value": "Canvas"
        },
        {
            "key": "Sole",
            "value": "Rubber"
        }
    ],
    "requiresShipping": true,
    "hashtags": [
        "aBrzKpykg9jzL62i4",
        "dj5xTy5dcQ2WRiS9L",
        "E5oZpTSjYnYfAQSiz"
    ],
    "isVisible": true,
    "workflow": {
        "status": "new"
    },
    "handle": "dc-men-s-pure-se-skate-shoe",
    "createdAt": {
        "$date": "2016-08-23T05:55:27.680Z"
    },
    "updatedAt": {
        "$date": "2016-08-23T06:42:00.238Z"
    }
},
{
    "_id": "QvtZpk4mXBugKrZPb",
    "ancestors": [
        "LXECo6pZectbeHYEi"
    ],
    "type": "variant",
    "price": 24.99,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "title": "Black",
    "weight": 3,
    "inventoryQuantity": 0,
    "isVisible": true
},
{
    "_id": "5yJvQgc2Q2efGce79",
    "ancestors": [
        "LXECo6pZectbeHYEi"
    ],
    "type": "variant",
    "price": 24.99,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "weight": 3,
    "title": "Red",
    "inventoryQuantity": 0,
    "isVisible": true
},
{
    "_id": "XfC4E4R58tJw5fCJq",
    "ancestors": [
        "LXECo6pZectbeHYEi",
        "QvtZpk4mXBugKrZPb"
    ],
    "type": "variant",
    "price": 60.76,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "optionTitle": "Size 9",
    "title": "Size 9",
    "inventoryQuantity": 100,
    "isVisible": true
},
{
    "_id": "DAv2QJJWw5yAFW2RE",
    "ancestors": [
        "LXECo6pZectbeHYEi",
        "QvtZpk4mXBugKrZPb"
    ],
    "type": "variant",
    "price": 60.76,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "optionTitle": "Size 10",
    "title": "Size 10",
    "inventoryQuantity": 100,
    "isVisible": true
},
{
    "_id": "NmfpHpfHpZJtbDP8F",
    "ancestors": [
        "LXECo6pZectbeHYEi",
        "QvtZpk4mXBugKrZPb"
    ],
    "type": "variant",
    "price": 60.76,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "optionTitle": "Size 11",
    "title": "Size 11",
    "inventoryQuantity": 100,
    "isVisible": true
},
{
    "_id": "HnJDtxDz35v38sdiW",
    "ancestors": [
        "LXECo6pZectbeHYEi",
        "5yJvQgc2Q2efGce79"
    ],
    "type": "variant",
    "price": 60.76,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "optionTitle": "Size 9",
    "title": "Size 9",
    "inventoryQuantity": 100,
    "isVisible": true
},
{
    "_id": "w8SwdHAsPqcwDJe57",
    "ancestors": [
        "LXECo6pZectbeHYEi",
        "5yJvQgc2Q2efGce79"
    ],
    "type": "variant",
    "price": 60.76,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "optionTitle": "Size 10",
    "title": "Size 10",
    "inventoryQuantity": 100,
    "isVisible": true
},
{
    "_id": "sw7W5Pj44HbivqRZY",
    "ancestors": [
        "LXECo6pZectbeHYEi",
        "5yJvQgc2Q2efGce79"
    ],
    "type": "variant",
    "price": 60.76,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "optionTitle": "Size 11",
    "title": "Size 11",
    "inventoryQuantity": 100,
    "isVisible": true
},
{
    "_id": "hPYwaFDX4dp9vocNY",
    "ancestors": [],
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "title": "Lucky Chouette X Vans",
    "pageTitle": "Nesciunt itaque modi soluta sint sint.",
    "description": "Funky Style and Chic Look \nRenowned for its sister brand, Jardin de Chouette\n\nCreated in 2009, Lucky Chouette quickly won a large Korean celebrity fan base for its funky styles with street cool graphics and humorous art works. \nChouette means owl in French and indicates good luck. \nThus, various owl character prints play a huge part in the design, like Techno Chouette, Yo Chouette, Apple Chouette, etc. \n\nLucky Chouette suggests distinctive style blended with diverse culture for active and smart young women who defy any hint of boredom.\n\n\nNew contemporary character brand \nChunky and casual silhouettes; short and flared skirts, oversized blouses",
    "type": "simple",
    "price": {
        "range": "89",
        "min": 89,
        "max": 89
    },
    "isLowQuantity": false,
    "isSoldOut": false,
    "isBackorder": false,
    "metafields": [
        {
            "key": "Material",
            "value": "Canvas"
        },
        {
            "key": "Sole",
            "value": "Rubber"
        }
    ],
    "requiresShipping": true,
    "hashtags": [
        "E5oZpTSjYnYfAQSiz",
        "m2TtzXpNNgierdjKN",
        "dg7X8xtzWDEBpENEL"
    ],
    "isVisible": true,
    "workflow": {
        "status": "new"
    },
    "handle": "lucky-chouette-x-vans",
    "createdAt": {
        "$date": "2016-08-23T06:16:33.781Z"
    },
    "updatedAt": {
        "$date": "2016-08-23T06:34:29.596Z"
    },
    "vendor": "Vans"
},
{
    "_id": "PrtwGHct9jh8D3cyF",
    "ancestors": [
        "hPYwaFDX4dp9vocNY"
    ],
    "type": "variant",
    "price": 24.99,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "title": "Yellow",
    "weight": 3,
    "inventoryQuantity": 0,
    "isVisible": true
},
{
    "_id": "pLirDoY46LycrjSy4",
    "ancestors": [
        "hPYwaFDX4dp9vocNY",
        "PrtwGHct9jh8D3cyF"
    ],
    "type": "variant",
    "price": 89,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "optionTitle": "Size 9",
    "title": "Size 9",
    "inventoryQuantity": 100,
    "isVisible": true
},
{
    "_id": "ibx6oBTcqgnwYJjLE",
    "ancestors": [
        "hPYwaFDX4dp9vocNY",
        "PrtwGHct9jh8D3cyF"
    ],
    "type": "variant",
    "price": 89,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "optionTitle": "Size 10",
    "title": "Size 10",
    "inventoryQuantity": 100,
    "isVisible": true
},
{
    "_id": "ewg632T6AHKhNisuP",
    "ancestors": [
        "hPYwaFDX4dp9vocNY",
        "PrtwGHct9jh8D3cyF"
    ],
    "type": "variant",
    "price": 89,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "optionTitle": "Size 11",
    "title": "Size 11",
    "inventoryQuantity": 100,
    "isVisible": true
},
{
    "_id": "MGStoBoTZHNcSJrtf",
    "ancestors": [],
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "title": "Vans Authentic Black Canvas Womens Trainers",
    "pageTitle": "Nesciunt itaque modi soluta sint sint.",
    "description": "The Vans Authentic is a time tested classic. This retro plimsoll is part of the Off The Wall range and is durable, responsive, and stylish with a lace up front and subtle branding on the outside. Finished off with the vulcanised Waffle sole",
    "type": "simple",
    "vendor": "Vans",
    "price": {
        "range": "89",
        "min": 89,
        "max": 89
    },
    "isLowQuantity": false,
    "isSoldOut": false,
    "isBackorder": false,
    "metafields": [
        {
            "key": "Material",
            "value": "Canvas"
        },
        {
            "key": "Sole",
            "value": "Rubber"
        }
    ],
    "requiresShipping": true,
    "hashtags": [
        "m2TtzXpNNgierdjKN",
        "jCCcuLd8hv437Zgha"
    ],
    "isVisible": true,
    "workflow": {
        "status": "new"
    },
    "handle": "vans-authentic-black-canvas-womens-trainers",
    "createdAt": {
        "$date": "2016-08-23T06:30:53.765Z"
    },
    "updatedAt": {
        "$date": "2016-08-23T06:34:41.306Z"
    }
},
{
    "_id": "mnAE7TDPKBdQvbTSK",
    "ancestors": [
        "MGStoBoTZHNcSJrtf"
    ],
    "type": "variant",
    "price": 24.99,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "title": "Black",
    "weight": 3,
    "inventoryQuantity": 0,
    "isVisible": true
},
{
    "_id": "JRRsiqoNEG5nnTudH",
    "ancestors": [
        "MGStoBoTZHNcSJrtf",
        "mnAE7TDPKBdQvbTSK"
    ],
    "type": "variant",
    "price": 89,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "optionTitle": "Size 9",
    "title": "Size 9",
    "inventoryQuantity": 100,
    "isVisible": true
},
{
    "_id": "qfoWdYmftFwQbypDb",
    "ancestors": [
        "MGStoBoTZHNcSJrtf",
        "mnAE7TDPKBdQvbTSK"
    ],
    "type": "variant",
    "price": 89,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "optionTitle": "Size 10",
    "title": "Size 10",
    "inventoryQuantity": 100,
    "isVisible": true
},
{
    "_id": "RW5gB4e8zh7fgDm6y",
    "ancestors": [
        "MGStoBoTZHNcSJrtf",
        "mnAE7TDPKBdQvbTSK"
    ],
    "type": "variant",
    "price": 89,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "optionTitle": "Size 11",
    "title": "Size 11",
    "inventoryQuantity": 100,
    "isVisible": true
},
{
    "_id": "xe3uaXSNzNZdQbyTP",
    "ancestors": [],
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "title": "Vans Kids Atwood (Canvas) Skate Shoe",
    "pageTitle": "Nesciunt itaque modi soluta sint sint.",
    "description": "The Vans Authentic is a time tested classic. This retro plimsoll is part of the Off The Wall range and is durable, responsive, and stylish with a lace up front and subtle branding on the outside. Finished off with the vulcanised Waffle sole",
    "type": "simple",
    "vendor": "Vans",
    "price": {
        "range": "89",
        "min": 89,
        "max": 89
    },
    "isLowQuantity": false,
    "isSoldOut": false,
    "isBackorder": false,
    "metafields": [
        {
            "key": "Material",
            "value": "Canvas"
        },
        {
            "key": "Sole",
            "value": "Rubber"
        }
    ],
    "requiresShipping": true,
    "hashtags": [
        "tmqLnEa6d4ENgK3GQ",
        "E5oZpTSjYnYfAQSiz",
        "jNsL7cTTpk8rYPBqF"
    ],
    "isVisible": true,
    "workflow": {
        "status": "new"
    },
    "handle": "vans-kids-atwood-canvas-skate-shoe",
    "createdAt": {
        "$date": "2016-08-23T06:36:01.365Z"
    },
    "updatedAt": {
        "$date": "2016-08-23T06:38:01.090Z"
    }
},
{
    "_id": "pzt4cQYt2LgGJZDaC",
    "ancestors": [
        "xe3uaXSNzNZdQbyTP"
    ],
    "type": "variant",
    "price": 24.99,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "title": "Red",
    "weight": 3,
    "inventoryQuantity": 0,
    "isVisible": true
},
{
    "_id": "KSge4EordzLTJgFta",
    "ancestors": [
        "xe3uaXSNzNZdQbyTP",
        "pzt4cQYt2LgGJZDaC"
    ],
    "type": "variant",
    "price": 89,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "optionTitle": "Size 9",
    "title": "Size 9",
    "inventoryQuantity": 100,
    "isVisible": true
},
{
    "_id": "eE8gipSbRRfyZHqMA",
    "ancestors": [
        "xe3uaXSNzNZdQbyTP",
        "pzt4cQYt2LgGJZDaC"
    ],
    "type": "variant",
    "price": 89,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "optionTitle": "Size 10",
    "title": "Size 10",
    "inventoryQuantity": 100,
    "isVisible": true
},
{
    "_id": "MxxE3Radjvws7DMGL",
    "ancestors": [
        "xe3uaXSNzNZdQbyTP",
        "pzt4cQYt2LgGJZDaC"
    ],
    "type": "variant",
    "price": 89,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "optionTitle": "Size 11",
    "title": "Size 11",
    "inventoryQuantity": 100,
    "isVisible": true
},
{
    "_id": "SDtdoRMfhWv5yTrLH",
    "ancestors": [],
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "title": "DC Trase TX Skate Shoe (Little Kid/Big Kid)",
    "pageTitle": "Nesciunt itaque modi soluta sint sint.",
    "description": "The trase continues to make a statement with bold new graphic prints, colors and lux materials. The original, since now.\n\nDC recognizes the fusion between art and skateboarding, taking footwear to the next level. Delivering uncompromising comfort, durability, and eye-catching fashion, DC is the source for everyday and technical skateboarding footwear.",
    "type": "simple",
    "vendor": "DC",
    "price": {
        "range": "89",
        "min": 89,
        "max": 89
    },
    "isLowQuantity": false,
    "isSoldOut": false,
    "isBackorder": false,
    "metafields": [
        {
            "key": "Material",
            "value": "Canvas"
        },
        {
            "key": "Sole",
            "value": "Rubber"
        }
    ],
    "requiresShipping": true,
    "hashtags": [
        "tmqLnEa6d4ENgK3GQ",
        "jNsL7cTTpk8rYPBqF"
    ],
    "isVisible": true,
    "workflow": {
        "status": "new"
    },
    "handle": "kids",
    "createdAt": {
        "$date": "2016-08-23T06:38:43.317Z"
    },
    "updatedAt": {
        "$date": "2016-08-23T06:42:11.331Z"
    }
},
{
    "_id": "GvZ7TX5ah4CJ2e55m",
    "ancestors": [
        "SDtdoRMfhWv5yTrLH"
    ],
    "type": "variant",
    "price": 24.99,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "title": "Black/Turquoise",
    "weight": 3,
    "inventoryQuantity": 0,
    "isVisible": true
},
{
    "_id": "aLMmwehg3zB9g4Fkv",
    "ancestors": [
        "SDtdoRMfhWv5yTrLH",
        "GvZ7TX5ah4CJ2e55m"
    ],
    "type": "variant",
    "price": 89,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "optionTitle": "Size 9",
    "title": "Size 9",
    "inventoryQuantity": 100,
    "isVisible": true
},
{
    "_id": "c7D4MXRwBNeSRHXPZ",
    "ancestors": [
        "SDtdoRMfhWv5yTrLH",
        "GvZ7TX5ah4CJ2e55m"
    ],
    "type": "variant",
    "price": 89,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "optionTitle": "Size 10",
    "title": "Size 10",
    "inventoryQuantity": 100,
    "isVisible": true
},
{
    "_id": "SHgjrwv3EFGsr3H9D",
    "ancestors": [
        "SDtdoRMfhWv5yTrLH",
        "GvZ7TX5ah4CJ2e55m"
    ],
    "type": "variant",
    "price": 89,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "optionTitle": "Size 11",
    "title": "Size 11",
    "inventoryQuantity": 100,
    "isVisible": true
},
{
    "_id": "9Pa6qdfXa7y5pQBoY",
    "ancestors": [],
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "title": "Girls' Rio Casual Sneaker",
    "pageTitle": "Nesciunt itaque modi soluta sint sint.",
    "description": "Add some old-school cool to her look with this laid-back Airwalk sneaker. It features a quality canvas upper with laces for a good fit, a cushiony insole for comfort and a flexible, non-marking, built-up outsole. Fabric and rubber.",
    "type": "simple",
    "vendor": "Airwalk",
    "price": {
        "range": "14.99",
        "min": 14.99,
        "max": 14.99
    },
    "isLowQuantity": false,
    "isSoldOut": false,
    "isBackorder": false,
    "metafields": [
        {
            "key": "Material",
            "value": "Canvas"
        },
        {
            "key": "Sole",
            "value": "Rubber"
        }
    ],
    "requiresShipping": true,
    "hashtags": [
        "979wmEwfQTgBJNgYj",
        "E5oZpTSjYnYfAQSiz"
    ],
    "isVisible": true,
    "workflow": {
        "status": "new"
    },
    "handle": "girls-rio-casual-sneaker",
    "createdAt": {
        "$date": "2016-08-23T06:43:14.043Z"
    },
    "updatedAt": {
        "$date": "2016-08-23T06:46:51.907Z"
    }
},
{
    "_id": "72Qomfd9SSzs3eRyE",
    "ancestors": [
        "9Pa6qdfXa7y5pQBoY"
    ],
    "type": "variant",
    "price": 24.99,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "title": "Pink/Black",
    "weight": 3,
    "inventoryQuantity": 0,
    "isVisible": true
},
{
    "_id": "8e8puQMMndFZCX73P",
    "ancestors": [
        "9Pa6qdfXa7y5pQBoY",
        "72Qomfd9SSzs3eRyE"
    ],
    "type": "variant",
    "price": 14.99,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "optionTitle": "Size 9",
    "title": "Size 9",
    "inventoryQuantity": 100,
    "isVisible": true
},
{
    "_id": "v3owmpajQjnGFz8Fs",
    "ancestors": [
        "9Pa6qdfXa7y5pQBoY",
        "72Qomfd9SSzs3eRyE"
    ],
    "type": "variant",
    "price": 14.99,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "optionTitle": "Size 10",
    "title": "Size 10",
    "inventoryQuantity": 100,
    "isVisible": true
},
{
    "_id": "TgfciaEZy7fani5Bk",
    "ancestors": [
        "9Pa6qdfXa7y5pQBoY",
        "72Qomfd9SSzs3eRyE"
    ],
    "type": "variant",
    "price": 14.99,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "optionTitle": "Size 11",
    "title": "Size 11",
    "inventoryQuantity": 100,
    "isVisible": true
},
{
    "_id": "x6EY6r4jGJga8dAKK",
    "ancestors": [],
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "title": "Liv and Maddie Girls' Retro Liv and Maddie Oxford",
    "pageTitle": "Nesciunt itaque modi soluta sint sint.",
    "description": "She'll be able to get her sparkle on with this fun take on the retro oxford from Liv and Maddie! It features a fabric upper, rubber cap toe laces, canvas lining, padded insole, and a built-up outsole. Manmade materials.",
    "type": "simple",
    "vendor": "Liv and Maddie",
    "price": {
        "range": "14.99",
        "min": 14.99,
        "max": 14.99
    },
    "isLowQuantity": false,
    "isSoldOut": false,
    "isBackorder": false,
    "metafields": [
        {
            "key": "Material",
            "value": "Canvas"
        },
        {
            "key": "Sole",
            "value": "Rubber"
        }
    ],
    "requiresShipping": true,
    "hashtags": [
        "979wmEwfQTgBJNgYj",
        "E5oZpTSjYnYfAQSiz",
        "Gsbw8H4LN9QSLNmB9"
    ],
    "isVisible": true,
    "workflow": {
        "status": "new"
    },
    "handle": "liv-and-maddie-girls-retro-liv-and-maddie-oxford",
    "createdAt": {
        "$date": "2016-08-23T06:48:14.395Z"
    },
    "updatedAt": {
        "$date": "2016-08-23T06:52:51.877Z"
    }
},
{
    "_id": "W2dPNFoM57hGFvxLm",
    "ancestors": [
        "x6EY6r4jGJga8dAKK"
    ],
    "type": "variant",
    "price": 24.99,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "title": "Iridescent Pewter",
    "weight": 3,
    "inventoryQuantity": 0,
    "isVisible": true
},
{
    "_id": "rmCqXuT8FLhDoc7KH",
    "ancestors": [
        "x6EY6r4jGJga8dAKK",
        "W2dPNFoM57hGFvxLm"
    ],
    "type": "variant",
    "price": 14.99,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "optionTitle": "Size 9",
    "title": "Size 9",
    "inventoryQuantity": 100,
    "isVisible": true
},
{
    "_id": "TCRX3to9nFrgn955Q",
    "ancestors": [
        "x6EY6r4jGJga8dAKK",
        "W2dPNFoM57hGFvxLm"
    ],
    "type": "variant",
    "price": 14.99,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "optionTitle": "Size 10",
    "title": "Size 10",
    "inventoryQuantity": 100,
    "isVisible": true
},
{
    "_id": "3QLJY45BbiAr42mH3",
    "ancestors": [
        "x6EY6r4jGJga8dAKK",
        "W2dPNFoM57hGFvxLm"
    ],
    "type": "variant",
    "price": 14.99,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "optionTitle": "Size 11",
    "title": "Size 11",
    "inventoryQuantity": 100,
    "isVisible": true
},
{
    "_id": "fkXgNBsWeK6fM3Gjc",
    "ancestors": [
        "x6EY6r4jGJga8dAKK"
    ],
    "type": "variant",
    "price": 24.99,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "weight": 3,
    "title": "Teal Shimmer",
    "isVisible": true
},
{
    "_id": "37TiX2h9MomnB4ric",
    "ancestors": [
        "x6EY6r4jGJga8dAKK",
        "fkXgNBsWeK6fM3Gjc"
    ],
    "type": "variant",
    "price": 14.99,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "isVisible": true
},
{
    "_id": "XaM9DS4JokZx84SN9",
    "ancestors": [
        "x6EY6r4jGJga8dAKK",
        "fkXgNBsWeK6fM3Gjc"
    ],
    "type": "variant",
    "price": 14.99,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "isVisible": true
},
{
    "_id": "y4ztRSmzkd5ZjzqMQ",
    "ancestors": [
        "x6EY6r4jGJga8dAKK",
        "fkXgNBsWeK6fM3Gjc"
    ],
    "type": "variant",
    "price": 14.99,
    "inventoryManagement": true,
    "inventoryPolicy": true,
    "shopId": "J8Bhq3uTtdgwZx3rz",
    "taxable": true,
    "taxCode": "00000",
    "isVisible": true
}]

products.forEach(product => {
    console.log(`${product.title} -- ${product.price}`)
})

const productMap = products.map(product => {
    if (product.price > 20) {
        return { name: product.title, price: product.price / 2, changed: true }
    }
    return { name: product.title, price: product.price, changed: false }
})

console.log(productMap)