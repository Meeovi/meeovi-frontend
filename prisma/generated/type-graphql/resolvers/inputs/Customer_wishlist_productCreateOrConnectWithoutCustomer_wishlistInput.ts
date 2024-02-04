import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_wishlist_productCreateWithoutCustomer_wishlistInput } from "../inputs/Customer_wishlist_productCreateWithoutCustomer_wishlistInput";
import { Customer_wishlist_productWhereUniqueInput } from "../inputs/Customer_wishlist_productWhereUniqueInput";

@TypeGraphQL.InputType("Customer_wishlist_productCreateOrConnectWithoutCustomer_wishlistInput", {})
export class Customer_wishlist_productCreateOrConnectWithoutCustomer_wishlistInput {
  @TypeGraphQL.Field(_type => Customer_wishlist_productWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_wishlist_productWhereUniqueInput;

  @TypeGraphQL.Field(_type => Customer_wishlist_productCreateWithoutCustomer_wishlistInput, {
    nullable: false
  })
  create!: Customer_wishlist_productCreateWithoutCustomer_wishlistInput;
}
