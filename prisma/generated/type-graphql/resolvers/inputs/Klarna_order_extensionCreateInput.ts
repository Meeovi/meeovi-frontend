import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateNestedOneWithoutKlarna_order_extensionInput } from "../inputs/OrderCreateNestedOneWithoutKlarna_order_extensionInput";

@TypeGraphQL.InputType("Klarna_order_extensionCreateInput", {})
export class Klarna_order_extensionCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  version_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  order_address_hash?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  order_cart_hash?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  order_cart_hash_version?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => OrderCreateNestedOneWithoutKlarna_order_extensionInput, {
    nullable: false
  })
  order!: OrderCreateNestedOneWithoutKlarna_order_extensionInput;
}
