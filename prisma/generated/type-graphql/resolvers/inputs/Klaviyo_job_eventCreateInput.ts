import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Sales_channelCreateNestedOneWithoutKlaviyo_job_eventInput } from "../inputs/Sales_channelCreateNestedOneWithoutKlaviyo_job_eventInput";

@TypeGraphQL.InputType("Klaviyo_job_eventCreateInput", {})
export class Klaviyo_job_eventCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  entity_id!: Buffer;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  happened_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Sales_channelCreateNestedOneWithoutKlaviyo_job_eventInput, {
    nullable: false
  })
  sales_channel!: Sales_channelCreateNestedOneWithoutKlaviyo_job_eventInput;
}
