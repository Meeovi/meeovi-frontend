import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_range_sales_channelCreateManyNumber_rangeInputEnvelope } from "../inputs/Number_range_sales_channelCreateManyNumber_rangeInputEnvelope";
import { Number_range_sales_channelCreateOrConnectWithoutNumber_rangeInput } from "../inputs/Number_range_sales_channelCreateOrConnectWithoutNumber_rangeInput";
import { Number_range_sales_channelCreateWithoutNumber_rangeInput } from "../inputs/Number_range_sales_channelCreateWithoutNumber_rangeInput";
import { Number_range_sales_channelWhereUniqueInput } from "../inputs/Number_range_sales_channelWhereUniqueInput";

@TypeGraphQL.InputType("Number_range_sales_channelCreateNestedManyWithoutNumber_rangeInput", {})
export class Number_range_sales_channelCreateNestedManyWithoutNumber_rangeInput {
  @TypeGraphQL.Field(_type => [Number_range_sales_channelCreateWithoutNumber_rangeInput], {
    nullable: true
  })
  create?: Number_range_sales_channelCreateWithoutNumber_rangeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_sales_channelCreateOrConnectWithoutNumber_rangeInput], {
    nullable: true
  })
  connectOrCreate?: Number_range_sales_channelCreateOrConnectWithoutNumber_rangeInput[] | undefined;

  @TypeGraphQL.Field(_type => Number_range_sales_channelCreateManyNumber_rangeInputEnvelope, {
    nullable: true
  })
  createMany?: Number_range_sales_channelCreateManyNumber_rangeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Number_range_sales_channelWhereUniqueInput], {
    nullable: true
  })
  connect?: Number_range_sales_channelWhereUniqueInput[] | undefined;
}
