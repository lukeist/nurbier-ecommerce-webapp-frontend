export const PRODUCT_QUERY = `
query {
    lights {
      data {
        attributes {
          title
          description
          price
          handle
          image {
            data {
              attributes {
                formats
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_PRODUCT_QUERY = `
query getProduct($handle: String!) {
  lights (filters: {handle: {eq: $handle}}){
    data {
      attributes {
        title
        description
        price
        compareAtPrice
        handle
        image {
          data {
            attributes {
              formats
            }
          }
        }
      }
    }
  }
}
`;
