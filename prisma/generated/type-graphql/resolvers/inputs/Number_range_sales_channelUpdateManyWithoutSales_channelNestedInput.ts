import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_range_sales_channelCreateManySales_channelInputEnvelope } from "../inputs/Number_range_sales_channelCreateManySales_channelInputEnvelope";
import { Number_range_sales_channelCreateOrConnectWithoutSales_channelInput } from "../inputs/Number_range_sales_channelCreateOrConnectWithoutSales_channelInput";
import { Number_range_sales_channelCreateWithoutSales_channelInput } from "../inputs/Number_range_sales_channelCreateWithoutSales_channelInput";
import { Number_range_sales_channelScalarWhereInput } from "../inputs/Number_range_sales_channelScalarWhereInput";
import { Number_range_sales_channelUpdateManyWithWhereWithoutSales_channelInput } from "../inputs/Number_range_sales_channelUpdateManyWithWhereWithoutSales_channelInput";
import { Number_range_sales_channelUpdateWithWhereUniqueWithoutSales_channelInput } from "../inputs/Number_range_sales_channelUpdateWithWhereUniqueWithoutSales_channelInput";
import { Number_range_sales_channelUpsertWithWhereUniqueWithoutSales_channelInput } from "../inputs/Number_range_sales_channelUpsertWithWhereUniqueWithoutSales_channelInput";
import { Number_range_sales_channelWhereUniqueInput } from "../inputs/Number_range_sales_channelWhereUniqueInput";

@TypeGraphQL.InputType("Number_range_sales_channelUpdateManyWithoutSales_channelNestedInput", {})
export class Number_range_sales_channelUpdateManyWithoutSales_channelNestedInput {
  @TypeGraphQL.Field(_type => [Number_range_sales_channelCreateWithoutSales_channelInput], {
    nullable: true
  })
  create?: Number_range_sales_channelCreateWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_sales_channelCreateOrConnectWithoutSales_channelInput], {
    nullable: true
  })
  connectOrCreate?: Number_range_sales_channelCreateOrConnectWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_sales_channelUpsertWithWhereUniqueWithoutSales_channelInput], {
    nullable: true
  })
  upsert?: Number_range_sales_channelUpsertWithWhereUniqueWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => Number_range_sales_channelCreateManySales_channelInputEnvelope, {
    nullable: true
  })
  createMany?: Number_range_sales_channelCreateManySales_channelInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Number_range_sales_channelWhereUniqueInput], {
    nullable: true
  })
  set?: Number_range_sales_channelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_sales_channelWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Number_range_sales_channelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_sales_channelWhereUniqueInput], {
    nullable: true
  })
  delete?: Number_range_sales_channelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_sales_channelWhereUniqueInput], {
    nullable: true
  })
  connect?: Number_range_sales_channelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_sales_channelUpdateWithWhereUniqueWithoutSales_channelInput], {
    nullable: true
  })
  update?: Number_range_sales_channelUpdateWithWhereUniqueWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_sales_channelUpdateManyWithWhereWithoutSales_channelInput], {
    nullable: true
  })
  updateMany?: Number_range_sales_channelUpdateManyWithWhereWithoutSales_channelInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_sales_channelScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Number_range_sales_channelScalarWhereInput[] | undefined;
}
