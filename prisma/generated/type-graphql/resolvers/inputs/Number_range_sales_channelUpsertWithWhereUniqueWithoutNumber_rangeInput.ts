import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_range_sales_channelCreateWithoutNumber_rangeInput } from "../inputs/Number_range_sales_channelCreateWithoutNumber_rangeInput";
import { Number_range_sales_channelUpdateWithoutNumber_rangeInput } from "../inputs/Number_range_sales_channelUpdateWithoutNumber_rangeInput";
import { Number_range_sales_channelWhereUniqueInput } from "../inputs/Number_range_sales_channelWhereUniqueInput";

@TypeGraphQL.InputType("Number_range_sales_channelUpsertWithWhereUniqueWithoutNumber_rangeInput", {})
export class Number_range_sales_channelUpsertWithWhereUniqueWithoutNumber_rangeInput {
  @TypeGraphQL.Field(_type => Number_range_sales_channelWhereUniqueInput, {
    nullable: false
  })
  where!: Number_range_sales_channelWhereUniqueInput;

  @TypeGraphQL.Field(_type => Number_range_sales_channelUpdateWithoutNumber_rangeInput, {
    nullable: false
  })
  update!: Number_range_sales_channelUpdateWithoutNumber_rangeInput;

  @TypeGraphQL.Field(_type => Number_range_sales_channelCreateWithoutNumber_rangeInput, {
    nullable: false
  })
  create!: Number_range_sales_channelCreateWithoutNumber_rangeInput;
}
