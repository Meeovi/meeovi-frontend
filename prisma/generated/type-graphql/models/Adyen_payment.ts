import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Order_transaction } from "../models/Order_transaction";

/**
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
@TypeGraphQL.ObjectType("Adyen_payment", {
  description: "This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments"
})
export class Adyen_payment {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  pspreference?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  original_reference?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  merchant_reference?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  merchant_order_reference?: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  order_transaction_id!: Buffer;

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
  additional_data?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  capture_mode?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  order_transaction?: Order_transaction;
}
