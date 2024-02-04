import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_range_sales_channelCreateManyNumber_rangeInput } from "../inputs/Number_range_sales_channelCreateManyNumber_rangeInput";

@TypeGraphQL.InputType("Number_range_sales_channelCreateManyNumber_rangeInputEnvelope", {})
export class Number_range_sales_channelCreateManyNumber_rangeInputEnvelope {
  @TypeGraphQL.Field(_type => [Number_range_sales_channelCreateManyNumber_rangeInput], {
    nullable: false
  })
  data!: Number_range_sales_channelCreateManyNumber_rangeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
