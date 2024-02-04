import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Customer } from "../models/Customer";
import { Customer_wishlist_product } from "../models/Customer_wishlist_product";
import { Sales_channel } from "../models/Sales_channel";
import { Customer_wishlistCount } from "../resolvers/outputs/Customer_wishlistCount";

@TypeGraphQL.ObjectType("Customer_wishlist", {})
export class Customer_wishlist {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  customer_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  sales_channel_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  customer?: Customer;

  sales_channel?: Sales_channel;

  customer_wishlist_product?: Customer_wishlist_product[];

  @TypeGraphQL.Field(_type => Customer_wishlistCount, {
    nullable: true
  })
  _count?: Customer_wishlistCount | null;
}
