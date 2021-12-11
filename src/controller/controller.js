const urlApi = "https://front-test-api.herokuapp.com/api/product"; 

/**
 * Get Products Api
 * @param {Hook set loading} setLoading 
 * @param {Hook set products} setProducts 
 */
export function getProductsApi(setLoading,setProducts) {

    setLoading(true);
    fetch(urlApi)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
}