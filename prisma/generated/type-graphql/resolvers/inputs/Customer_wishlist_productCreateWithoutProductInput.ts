import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_wishlistCreateNestedOneWithoutCustomer_wishlist_productInput } from "../inputs/Customer_wishlistCreateNestedOneWithoutCustomer_wishlist_productInput";

@TypeGraphQL.InputType("Customer_wishlist_productCreateWithoutProductInput", {})
export class Customer_wishlist_productCreateWithoutProductInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Customer_wishlistCreateNestedOneWithoutCustomer_wishlist_productInput, {
    nullable: false
  })
  customer_wishlist!: Customer_wishlistCreateNestedOneWithoutCustomer_wishlist_productInput;
}
