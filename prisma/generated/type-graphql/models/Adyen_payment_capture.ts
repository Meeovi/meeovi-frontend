import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Order_transaction } from "../models/Order_transaction";

@TypeGraphQL.ObjectType("Adyen_payment_capture", {})
export class Adyen_payment_capture {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  order_transaction_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  psp_reference?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  source!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  status!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  amount!: number;

  order_transaction?: Order_transaction;
}
