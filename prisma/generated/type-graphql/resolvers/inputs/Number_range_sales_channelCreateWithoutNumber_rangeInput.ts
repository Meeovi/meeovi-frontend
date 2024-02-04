import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_range_typeCreateNestedOneWithoutNumber_range_sales_channelInput } from "../inputs/Number_range_typeCreateNestedOneWithoutNumber_range_sales_channelInput";
import { Sales_channelCreateNestedOneWithoutNumber_range_sales_channelInput } from "../inputs/Sales_channelCreateNestedOneWithoutNumber_range_sales_channelInput";

@TypeGraphQL.InputType("Number_range_sales_channelCreateWithoutNumber_rangeInput", {})
export class Number_range_sales_channelCreateWithoutNumber_rangeInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | undefined;

  @TypeGraphQL.Field(_type => Number_range_typeCreateNestedOneWithoutNumber_range_sales_channelInput, {
    nullable: false
  })
  number_range_type!: Number_range_typeCreateNestedOneWithoutNumber_range_sales_channelInput;

  @TypeGraphQL.Field(_type => Sales_channelCreateNestedOneWithoutNumber_range_sales_channelInput, {
    nullable: true
  })
  sales_channel?: Sales_channelCreateNestedOneWithoutNumber_range_sales_channelInput | undefined;
}
