import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Sales_channelCreateNestedOneWithoutKlaviyo_flag_storageInput } from "../inputs/Sales_channelCreateNestedOneWithoutKlaviyo_flag_storageInput";

@TypeGraphQL.InputType("Klaviyo_flag_storageCreateInput", {})
export class Klaviyo_flag_storageCreateInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  key!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  value!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Sales_channelCreateNestedOneWithoutKlaviyo_flag_storageInput, {
    nullable: false
  })
  sales_channel!: Sales_channelCreateNestedOneWithoutKlaviyo_flag_storageInput;
}
