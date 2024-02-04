import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_range_sales_channelCreateWithoutSales_channelInput } from "../inputs/Number_range_sales_channelCreateWithoutSales_channelInput";
import { Number_range_sales_channelUpdateWithoutSales_channelInput } from "../inputs/Number_range_sales_channelUpdateWithoutSales_channelInput";
import { Number_range_sales_channelWhereUniqueInput } from "../inputs/Number_range_sales_channelWhereUniqueInput";

@TypeGraphQL.InputType("Number_range_sales_channelUpsertWithWhereUniqueWithoutSales_channelInput", {})
export class Number_range_sales_channelUpsertWithWhereUniqueWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => Number_range_sales_channelWhereUniqueInput, {
    nullable: false
  })
  where!: Number_range_sales_channelWhereUniqueInput;

  @TypeGraphQL.Field(_type => Number_range_sales_channelUpdateWithoutSales_channelInput, {
    nullable: false
  })
  update!: Number_range_sales_channelUpdateWithoutSales_channelInput;

  @TypeGraphQL.Field(_type => Number_range_sales_channelCreateWithoutSales_channelInput, {
    nullable: false
  })
  create!: Number_range_sales_channelCreateWithoutSales_channelInput;
}
