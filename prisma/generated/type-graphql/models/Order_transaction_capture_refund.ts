import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Order_transaction_capture } from "../models/Order_transaction_capture";
import { Order_transaction_capture_refund_position } from "../models/Order_transaction_capture_refund_position";
import { State_machine_state } from "../models/State_machine_state";
import { Order_transaction_capture_refundCount } from "../resolvers/outputs/Order_transaction_capture_refundCount";

@TypeGraphQL.ObjectType("Order_transaction_capture_refund", {})
export class Order_transaction_capture_refund {
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
  capture_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  capture_version_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  state_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  reason?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  amount!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  custom_fields?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  external_reference?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  order_transaction_capture?: Order_transaction_capture;

  state_machine_state?: State_machine_state;

  order_transaction_capture_refund_position?: Order_transaction_capture_refund_position[];

  @TypeGraphQL.Field(_type => Order_transaction_capture_refundCount, {
    nullable: true
  })
  _count?: Order_transaction_capture_refundCount | null;
}
