import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_range_sales_channelCreateManyNumber_rangeInputEnvelope } from "../inputs/Number_range_sales_channelCreateManyNumber_rangeInputEnvelope";
import { Number_range_sales_channelCreateOrConnectWithoutNumber_rangeInput } from "../inputs/Number_range_sales_channelCreateOrConnectWithoutNumber_rangeInput";
import { Number_range_sales_channelCreateWithoutNumber_rangeInput } from "../inputs/Number_range_sales_channelCreateWithoutNumber_rangeInput";
import { Number_range_sales_channelScalarWhereInput } from "../inputs/Number_range_sales_channelScalarWhereInput";
import { Number_range_sales_channelUpdateManyWithWhereWithoutNumber_rangeInput } from "../inputs/Number_range_sales_channelUpdateManyWithWhereWithoutNumber_rangeInput";
import { Number_range_sales_channelUpdateWithWhereUniqueWithoutNumber_rangeInput } from "../inputs/Number_range_sales_channelUpdateWithWhereUniqueWithoutNumber_rangeInput";
import { Number_range_sales_channelUpsertWithWhereUniqueWithoutNumber_rangeInput } from "../inputs/Number_range_sales_channelUpsertWithWhereUniqueWithoutNumber_rangeInput";
import { Number_range_sales_channelWhereUniqueInput } from "../inputs/Number_range_sales_channelWhereUniqueInput";

@TypeGraphQL.InputType("Number_range_sales_channelUpdateManyWithoutNumber_rangeNestedInput", {})
export class Number_range_sales_channelUpdateManyWithoutNumber_rangeNestedInput {
  @TypeGraphQL.Field(_type => [Number_range_sales_channelCreateWithoutNumber_rangeInput], {
    nullable: true
  })
  create?: Number_range_sales_channelCreateWithoutNumber_rangeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_sales_channelCreateOrConnectWithoutNumber_rangeInput], {
    nullable: true
  })
  connectOrCreate?: Number_range_sales_channelCreateOrConnectWithoutNumber_rangeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_sales_channelUpsertWithWhereUniqueWithoutNumber_rangeInput], {
    nullable: true
  })
  upsert?: Number_range_sales_channelUpsertWithWhereUniqueWithoutNumber_rangeInput[] | undefined;

  @TypeGraphQL.Field(_type => Number_range_sales_channelCreateManyNumber_rangeInputEnvelope, {
    nullable: true
  })
  createMany?: Number_range_sales_channelCreateManyNumber_rangeInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [Number_range_sales_channelUpdateWithWhereUniqueWithoutNumber_rangeInput], {
    nullable: true
  })
  update?: Number_range_sales_channelUpdateWithWhereUniqueWithoutNumber_rangeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_sales_channelUpdateManyWithWhereWithoutNumber_rangeInput], {
    nullable: true
  })
  updateMany?: Number_range_sales_channelUpdateManyWithWhereWithoutNumber_rangeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_sales_channelScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Number_range_sales_channelScalarWhereInput[] | undefined;
}
