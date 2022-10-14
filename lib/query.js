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
