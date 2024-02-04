import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_wishlistCreateNestedOneWithoutCustomer_wishlist_productInput } from "../inputs/Customer_wishlistCreateNestedOneWithoutCustomer_wishlist_productInput";
import { ProductCreateNestedOneWithoutCustomer_wishlist_productInput } from "../inputs/ProductCreateNestedOneWithoutCustomer_wishlist_productInput";

@TypeGraphQL.InputType("Customer_wishlist_productCreateInput", {})
export class Customer_wishlist_productCreateInput {
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

  @TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutCustomer_wishlist_productInput, {
    nullable: false
  })
  product!: ProductCreateNestedOneWithoutCustomer_wishlist_productInput;
}
