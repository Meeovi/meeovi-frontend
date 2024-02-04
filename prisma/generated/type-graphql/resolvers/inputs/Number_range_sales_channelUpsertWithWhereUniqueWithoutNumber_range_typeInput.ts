import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_range_sales_channelCreateWithoutNumber_range_typeInput } from "../inputs/Number_range_sales_channelCreateWithoutNumber_range_typeInput";
import { Number_range_sales_channelUpdateWithoutNumber_range_typeInput } from "../inputs/Number_range_sales_channelUpdateWithoutNumber_range_typeInput";
import { Number_range_sales_channelWhereUniqueInput } from "../inputs/Number_range_sales_channelWhereUniqueInput";

@TypeGraphQL.InputType("Number_range_sales_channelUpsertWithWhereUniqueWithoutNumber_range_typeInput", {})
export class Number_range_sales_channelUpsertWithWhereUniqueWithoutNumber_range_typeInput {
  @TypeGraphQL.Field(_type => Number_range_sales_channelWhereUniqueInput, {
    nullable: false
  })
  where!: Number_range_sales_channelWhereUniqueInput;

  @TypeGraphQL.Field(_type => Number_range_sales_channelUpdateWithoutNumber_range_typeInput, {
    nullable: false
  })
  update!: Number_range_sales_channelUpdateWithoutNumber_range_typeInput;

  @TypeGraphQL.Field(_type => Number_range_sales_channelCreateWithoutNumber_range_typeInput, {
    nullable: false
  })
  create!: Number_range_sales_channelCreateWithoutNumber_range_typeInput;
}
