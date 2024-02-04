import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_range_sales_channelScalarWhereInput } from "../inputs/Number_range_sales_channelScalarWhereInput";
import { Number_range_sales_channelUpdateManyMutationInput } from "../inputs/Number_range_sales_channelUpdateManyMutationInput";

@TypeGraphQL.InputType("Number_range_sales_channelUpdateManyWithWhereWithoutSales_channelInput", {})
export class Number_range_sales_channelUpdateManyWithWhereWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => Number_range_sales_channelScalarWhereInput, {
    nullable: false
  })
  where!: Number_range_sales_channelScalarWhereInput;

  @TypeGraphQL.Field(_type => Number_range_sales_channelUpdateManyMutationInput, {
    nullable: false
  })
  data!: Number_range_sales_channelUpdateManyMutationInput;
}
