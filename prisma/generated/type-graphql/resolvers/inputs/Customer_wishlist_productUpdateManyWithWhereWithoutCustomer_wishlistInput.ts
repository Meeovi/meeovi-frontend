import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_wishlist_productScalarWhereInput } from "../inputs/Customer_wishlist_productScalarWhereInput";
import { Customer_wishlist_productUpdateManyMutationInput } from "../inputs/Customer_wishlist_productUpdateManyMutationInput";

@TypeGraphQL.InputType("Customer_wishlist_productUpdateManyWithWhereWithoutCustomer_wishlistInput", {})
export class Customer_wishlist_productUpdateManyWithWhereWithoutCustomer_wishlistInput {
  @TypeGraphQL.Field(_type => Customer_wishlist_productScalarWhereInput, {
    nullable: false
  })
  where!: Customer_wishlist_productScalarWhereInput;

  @TypeGraphQL.Field(_type => Customer_wishlist_productUpdateManyMutationInput, {
    nullable: false
  })
  data!: Customer_wishlist_productUpdateManyMutationInput;
}
