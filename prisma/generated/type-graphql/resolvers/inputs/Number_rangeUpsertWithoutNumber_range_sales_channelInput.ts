import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_rangeCreateWithoutNumber_range_sales_channelInput } from "../inputs/Number_rangeCreateWithoutNumber_range_sales_channelInput";
import { Number_rangeUpdateWithoutNumber_range_sales_channelInput } from "../inputs/Number_rangeUpdateWithoutNumber_range_sales_channelInput";
import { Number_rangeWhereInput } from "../inputs/Number_rangeWhereInput";

@TypeGraphQL.InputType("Number_rangeUpsertWithoutNumber_range_sales_channelInput", {})
export class Number_rangeUpsertWithoutNumber_range_sales_channelInput {
  @TypeGraphQL.Field(_type => Number_rangeUpdateWithoutNumber_range_sales_channelInput, {
    nullable: false
  })
  update!: Number_rangeUpdateWithoutNumber_range_sales_channelInput;

  @TypeGraphQL.Field(_type => Number_rangeCreateWithoutNumber_range_sales_channelInput, {
    nullable: false
  })
  create!: Number_rangeCreateWithoutNumber_range_sales_channelInput;

  @TypeGraphQL.Field(_type => Number_rangeWhereInput, {
    nullable: true
  })
  where?: Number_rangeWhereInput | undefined;
}
