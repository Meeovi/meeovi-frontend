import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_range_typeCreateOrConnectWithoutNumber_range_sales_channelInput } from "../inputs/Number_range_typeCreateOrConnectWithoutNumber_range_sales_channelInput";
import { Number_range_typeCreateWithoutNumber_range_sales_channelInput } from "../inputs/Number_range_typeCreateWithoutNumber_range_sales_channelInput";
import { Number_range_typeWhereUniqueInput } from "../inputs/Number_range_typeWhereUniqueInput";

@TypeGraphQL.InputType("Number_range_typeCreateNestedOneWithoutNumber_range_sales_channelInput", {})
export class Number_range_typeCreateNestedOneWithoutNumber_range_sales_channelInput {
  @TypeGraphQL.Field(_type => Number_range_typeCreateWithoutNumber_range_sales_channelInput, {
    nullable: true
  })
  create?: Number_range_typeCreateWithoutNumber_range_sales_channelInput | undefined;

  @TypeGraphQL.Field(_type => Number_range_typeCreateOrConnectWithoutNumber_range_sales_channelInput, {
    nullable: true
  })
  connectOrCreate?: Number_range_typeCreateOrConnectWithoutNumber_range_sales_channelInput | undefined;

  @TypeGraphQL.Field(_type => Number_range_typeWhereUniqueInput, {
    nullable: true
  })
  connect?: Number_range_typeWhereUniqueInput | undefined;
}
