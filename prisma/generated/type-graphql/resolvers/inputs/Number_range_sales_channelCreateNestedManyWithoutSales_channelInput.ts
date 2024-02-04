import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_range_sales_channelCreateManySales_channelInputEnvelope } from "../inputs/Number_range_sales_channelCreateManySales_channelInputEnvelope";
import { Number_range_sales_channelCreateOrConnectWithoutSales_channelInput } from "../inputs/Number_range_sales_channelCreateOrConnectWithoutSales_channelInput";
import { Number_range_sales_channelCreateWithoutSales_channelInput } from "../inputs/Number_range_sales_channelCreateWithoutSales_channelInput";
import { Number_range_sales_channelWhereUniqueInput } from "../inputs/Number_range_sales_channelWhereUniqueInput";

@TypeGraphQL.InputType("Number_range_sales_channelCreateNestedManyWithoutSales_channelInput", {})
export class Number_range_sales_channelCreateNestedManyWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => [Number_range_sales_channelCreateWithoutSales_channelInput], {
    nullable: true
  })
  create?: Number_range_sales_channelCreateWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_sales_channelCreateOrConnectWithoutSales_channelInput], {
    nullable: true
  })
  connectOrCreate?: Number_range_sales_channelCreateOrConnectWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => Number_range_sales_channelCreateManySales_channelInputEnvelope, {
    nullable: true
  })
  createMany?: Number_range_sales_channelCreateManySales_channelInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Number_range_sales_channelWhereUniqueInput], {
    nullable: true
  })
  connect?: Number_range_sales_channelWhereUniqueInput[] | undefined;
}
