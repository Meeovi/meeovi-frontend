import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Adyen_paymentCreateWithoutOrder_transactionInput", {})
export class Adyen_paymentCreateWithoutOrder_transactionInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  pspreference?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  original_reference?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  merchant_reference?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  merchant_order_reference?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  payment_method!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  amount_value!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  amount_currency!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  additional_data?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  capture_mode?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;
}
