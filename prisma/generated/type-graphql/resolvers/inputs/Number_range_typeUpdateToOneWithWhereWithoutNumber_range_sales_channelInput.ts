import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_range_typeUpdateWithoutNumber_range_sales_channelInput } from "../inputs/Number_range_typeUpdateWithoutNumber_range_sales_channelInput";
import { Number_range_typeWhereInput } from "../inputs/Number_range_typeWhereInput";

@TypeGraphQL.InputType("Number_range_typeUpdateToOneWithWhereWithoutNumber_range_sales_channelInput", {})
export class Number_range_typeUpdateToOneWithWhereWithoutNumber_range_sales_channelInput {
  @TypeGraphQL.Field(_type => Number_range_typeWhereInput, {
    nullable: true
  })
  where?: Number_range_typeWhereInput | undefined;

  @TypeGraphQL.Field(_type => Number_range_typeUpdateWithoutNumber_range_sales_channelInput, {
    nullable: false
  })
  data!: Number_range_typeUpdateWithoutNumber_range_sales_channelInput;
}
