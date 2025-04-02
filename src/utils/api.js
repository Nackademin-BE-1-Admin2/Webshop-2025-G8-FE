
export function getBaseUrl() {
  // Get the group number from the hostname to determine the base URL for BE
  const href = window.location.href;
  if (href.includes("localhost")) {
    return "http://localhost:3000/";
  }
  return `YOUR DEPLOYED URL`;
}

export async function fetchProducts(endpoint = "api/products") {
  //! DONT USE THIS IN PRODUCTION
  const url = `${getBaseUrl()}${endpoint}`;
  const response = await fetch(url);
  if(response.ok){
    const data = await response.json();
    return data;
  }
  return [];    
}
