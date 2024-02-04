import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_wishlistUpdateWithoutCustomer_wishlist_productInput } from "../inputs/Customer_wishlistUpdateWithoutCustomer_wishlist_productInput";
import { Customer_wishlistWhereInput } from "../inputs/Customer_wishlistWhereInput";

@TypeGraphQL.InputType("Customer_wishlistUpdateToOneWithWhereWithoutCustomer_wishlist_productInput", {})
export class Customer_wishlistUpdateToOneWithWhereWithoutCustomer_wishlist_productInput {
  @TypeGraphQL.Field(_type => Customer_wishlistWhereInput, {
    nullable: true
  })
  where?: Customer_wishlistWhereInput | undefined;

  @TypeGraphQL.Field(_type => Customer_wishlistUpdateWithoutCustomer_wishlist_productInput, {
    nullable: false
  })
  data!: Customer_wishlistUpdateWithoutCustomer_wishlist_productInput;
}
