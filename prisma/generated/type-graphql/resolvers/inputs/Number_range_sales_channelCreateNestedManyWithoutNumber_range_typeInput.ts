import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_range_sales_channelCreateManyNumber_range_typeInputEnvelope } from "../inputs/Number_range_sales_channelCreateManyNumber_range_typeInputEnvelope";
import { Number_range_sales_channelCreateOrConnectWithoutNumber_range_typeInput } from "../inputs/Number_range_sales_channelCreateOrConnectWithoutNumber_range_typeInput";
import { Number_range_sales_channelCreateWithoutNumber_range_typeInput } from "../inputs/Number_range_sales_channelCreateWithoutNumber_range_typeInput";
import { Number_range_sales_channelWhereUniqueInput } from "../inputs/Number_range_sales_channelWhereUniqueInput";

@TypeGraphQL.InputType("Number_range_sales_channelCreateNestedManyWithoutNumber_range_typeInput", {})
export class Number_range_sales_channelCreateNestedManyWithoutNumber_range_typeInput {
  @TypeGraphQL.Field(_type => [Number_range_sales_channelCreateWithoutNumber_range_typeInput], {
    nullable: true
  })
  create?: Number_range_sales_channelCreateWithoutNumber_range_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_sales_channelCreateOrConnectWithoutNumber_range_typeInput], {
    nullable: true
  })
  connectOrCreate?: Number_range_sales_channelCreateOrConnectWithoutNumber_range_typeInput[] | undefined;

  @TypeGraphQL.Field(_type => Number_range_sales_channelCreateManyNumber_range_typeInputEnvelope, {
    nullable: true
  })
  createMany?: Number_range_sales_channelCreateManyNumber_range_typeInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Number_range_sales_channelWhereUniqueInput], {
    nullable: true
  })
  connect?: Number_range_sales_channelWhereUniqueInput[] | undefined;
}
