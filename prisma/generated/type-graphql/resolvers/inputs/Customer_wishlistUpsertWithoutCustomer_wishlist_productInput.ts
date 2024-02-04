import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_wishlistCreateWithoutCustomer_wishlist_productInput } from "../inputs/Customer_wishlistCreateWithoutCustomer_wishlist_productInput";
import { Customer_wishlistUpdateWithoutCustomer_wishlist_productInput } from "../inputs/Customer_wishlistUpdateWithoutCustomer_wishlist_productInput";
import { Customer_wishlistWhereInput } from "../inputs/Customer_wishlistWhereInput";

@TypeGraphQL.InputType("Customer_wishlistUpsertWithoutCustomer_wishlist_productInput", {})
export class Customer_wishlistUpsertWithoutCustomer_wishlist_productInput {
  @TypeGraphQL.Field(_type => Customer_wishlistUpdateWithoutCustomer_wishlist_productInput, {
    nullable: false
  })
  update!: Customer_wishlistUpdateWithoutCustomer_wishlist_productInput;

  @TypeGraphQL.Field(_type => Customer_wishlistCreateWithoutCustomer_wishlist_productInput, {
    nullable: false
  })
  create!: Customer_wishlistCreateWithoutCustomer_wishlist_productInput;

  @TypeGraphQL.Field(_type => Customer_wishlistWhereInput, {
    nullable: true
  })
  where?: Customer_wishlistWhereInput | undefined;
}
