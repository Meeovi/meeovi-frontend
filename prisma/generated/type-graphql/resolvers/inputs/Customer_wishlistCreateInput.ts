import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCreateNestedOneWithoutCustomer_wishlistInput } from "../inputs/CustomerCreateNestedOneWithoutCustomer_wishlistInput";
import { Customer_wishlist_productCreateNestedManyWithoutCustomer_wishlistInput } from "../inputs/Customer_wishlist_productCreateNestedManyWithoutCustomer_wishlistInput";
import { Sales_channelCreateNestedOneWithoutCustomer_wishlistInput } from "../inputs/Sales_channelCreateNestedOneWithoutCustomer_wishlistInput";

@TypeGraphQL.InputType("Customer_wishlistCreateInput", {})
export class Customer_wishlistCreateInput {
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

  @TypeGraphQL.Field(_type => CustomerCreateNestedOneWithoutCustomer_wishlistInput, {
    nullable: false
  })
  customer!: CustomerCreateNestedOneWithoutCustomer_wishlistInput;

  @TypeGraphQL.Field(_type => Sales_channelCreateNestedOneWithoutCustomer_wishlistInput, {
    nullable: false
  })
  sales_channel!: Sales_channelCreateNestedOneWithoutCustomer_wishlistInput;

  @TypeGraphQL.Field(_type => Customer_wishlist_productCreateNestedManyWithoutCustomer_wishlistInput, {
    nullable: true
  })
  customer_wishlist_product?: Customer_wishlist_productCreateNestedManyWithoutCustomer_wishlistInput | undefined;
}
