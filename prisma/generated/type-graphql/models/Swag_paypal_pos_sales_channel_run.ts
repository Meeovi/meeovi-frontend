import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Sales_channel } from "../models/Sales_channel";
import { Swag_paypal_pos_sales_channel_run_log } from "../models/Swag_paypal_pos_sales_channel_run_log";
import { Swag_paypal_pos_sales_channel_runCount } from "../resolvers/outputs/Swag_paypal_pos_sales_channel_runCount";

@TypeGraphQL.ObjectType("Swag_paypal_pos_sales_channel_run", {})
export class Swag_paypal_pos_sales_channel_run {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  sales_channel_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  task!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  finished_at?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  status!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  message_count!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  step_index!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  steps!: string;

  sales_channel?: Sales_channel;

  swag_paypal_pos_sales_channel_run_log?: Swag_paypal_pos_sales_channel_run_log[];

  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channel_runCount, {
    nullable: true
  })
  _count?: Swag_paypal_pos_sales_channel_runCount | null;
}
