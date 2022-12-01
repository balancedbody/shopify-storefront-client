export const cartDetailsFragment = /* GraphQL */ `
  fragment cartDetails on Cart {
    id
    createdAt
    updatedAt
    totalQuantity
    checkoutUrl
    attributes {
      key
      value
    }
    cost {
      subtotalAmount {
        amount
        currencyCode
      }
      totalAmount {
        amount
        currencyCode
      }
      checkoutChargeAmount {
        amount
        currencyCode
      }
    }
    lines(first: 250) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
        node {
          id
          quantity
          attributes {
            key
            value
          }
          cost {
            totalAmount {
              amount
            }
          }
          merchandise {
            ... on ProductVariant {
              id
              requiresShipping
              sku
              title
              compareAtPrice {
                amount
              }
              image {
                altText
                url
                height
                width
              }
              price {
                amount
              }
              product {
                id
                title
                handle
              }
              selectedOptions {
                name
                value
              }
            }
          }
          sellingPlanAllocation {
            checkoutChargeAmount {
              amount
              currencyCode
            }
            sellingPlan {
              id
              name
              checkoutCharge {
                type
                value
              }
            }
          }
        }
      }
    }
  }
`;

export default cartDetailsFragment;
