import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_rangeCreateOrConnectWithoutNumber_range_sales_channelInput } from "../inputs/Number_rangeCreateOrConnectWithoutNumber_range_sales_channelInput";
import { Number_rangeCreateWithoutNumber_range_sales_channelInput } from "../inputs/Number_rangeCreateWithoutNumber_range_sales_channelInput";
import { Number_rangeUpdateToOneWithWhereWithoutNumber_range_sales_channelInput } from "../inputs/Number_rangeUpdateToOneWithWhereWithoutNumber_range_sales_channelInput";
import { Number_rangeUpsertWithoutNumber_range_sales_channelInput } from "../inputs/Number_rangeUpsertWithoutNumber_range_sales_channelInput";
import { Number_rangeWhereUniqueInput } from "../inputs/Number_rangeWhereUniqueInput";

@TypeGraphQL.InputType("Number_rangeUpdateOneRequiredWithoutNumber_range_sales_channelNestedInput", {})
export class Number_rangeUpdateOneRequiredWithoutNumber_range_sales_channelNestedInput {
  @TypeGraphQL.Field(_type => Number_rangeCreateWithoutNumber_range_sales_channelInput, {
    nullable: true
  })
  create?: Number_rangeCreateWithoutNumber_range_sales_channelInput | undefined;

  @TypeGraphQL.Field(_type => Number_rangeCreateOrConnectWithoutNumber_range_sales_channelInput, {
    nullable: true
  })
  connectOrCreate?: Number_rangeCreateOrConnectWithoutNumber_range_sales_channelInput | undefined;

  @TypeGraphQL.Field(_type => Number_rangeUpsertWithoutNumber_range_sales_channelInput, {
    nullable: true
  })
  upsert?: Number_rangeUpsertWithoutNumber_range_sales_channelInput | undefined;

  @TypeGraphQL.Field(_type => Number_rangeWhereUniqueInput, {
    nullable: true
  })
  connect?: Number_rangeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Number_rangeUpdateToOneWithWhereWithoutNumber_range_sales_channelInput, {
    nullable: true
  })
  update?: Number_rangeUpdateToOneWithWhereWithoutNumber_range_sales_channelInput | undefined;
}
