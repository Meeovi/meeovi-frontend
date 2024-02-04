import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_range_sales_channelWhereInput } from "../inputs/Number_range_sales_channelWhereInput";

@TypeGraphQL.InputType("Number_range_sales_channelListRelationFilter", {})
export class Number_range_sales_channelListRelationFilter {
  @TypeGraphQL.Field(_type => Number_range_sales_channelWhereInput, {
    nullable: true
  })
  every?: Number_range_sales_channelWhereInput | undefined;

  @TypeGraphQL.Field(_type => Number_range_sales_channelWhereInput, {
    nullable: true
  })
  some?: Number_range_sales_channelWhereInput | undefined;

  @TypeGraphQL.Field(_type => Number_range_sales_channelWhereInput, {
    nullable: true
  })
  none?: Number_range_sales_channelWhereInput | undefined;
}
