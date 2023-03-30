export const FAKE_STORE_URL = "https://fakestoreapi.com/products";

export const productCategories = ["men's clothing", "jewelery", "electronics", "women's clothing"]

export const categoryList = (product, category) => {
    let newVal = product.map((eachEle) => {
        return eachEle[category];
    })

    return newVal = ['All' , ...new Set(newVal)]
}

export const filterResult = (json , inputvalue) => {
    const result = json.filter((eachEle) => eachEle.title?.toLowerCase().includes(inputvalue?.toLowerCase()))
    console.log(result)
    return result
}
