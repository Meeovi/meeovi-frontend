import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Order_transaction } from "../models/Order_transaction";
import { Order_transaction_capture_refund } from "../models/Order_transaction_capture_refund";
import { State_machine_state } from "../models/State_machine_state";
import { Order_transaction_captureCount } from "../resolvers/outputs/Order_transaction_captureCount";

@TypeGraphQL.ObjectType("Order_transaction_capture", {})
export class Order_transaction_capture {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  version_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  order_transaction_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  order_transaction_version_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  state_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  external_reference?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  amount!: string;

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

  order_transaction?: Order_transaction;

  state_machine_state?: State_machine_state;

  order_transaction_capture_refund?: Order_transaction_capture_refund[];

  @TypeGraphQL.Field(_type => Order_transaction_captureCount, {
    nullable: true
  })
  _count?: Order_transaction_captureCount | null;
}
