import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_wishlistCreateWithoutCustomer_wishlist_productInput } from "../inputs/Customer_wishlistCreateWithoutCustomer_wishlist_productInput";
import { Customer_wishlistWhereUniqueInput } from "../inputs/Customer_wishlistWhereUniqueInput";

@TypeGraphQL.InputType("Customer_wishlistCreateOrConnectWithoutCustomer_wishlist_productInput", {})
export class Customer_wishlistCreateOrConnectWithoutCustomer_wishlist_productInput {
  @TypeGraphQL.Field(_type => Customer_wishlistWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_wishlistWhereUniqueInput;

  @TypeGraphQL.Field(_type => Customer_wishlistCreateWithoutCustomer_wishlist_productInput, {
    nullable: false
  })
  create!: Customer_wishlistCreateWithoutCustomer_wishlist_productInput;
}
