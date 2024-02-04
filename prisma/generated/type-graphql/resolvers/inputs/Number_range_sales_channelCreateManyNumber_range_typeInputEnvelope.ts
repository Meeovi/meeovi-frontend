import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_range_sales_channelCreateManyNumber_range_typeInput } from "../inputs/Number_range_sales_channelCreateManyNumber_range_typeInput";

@TypeGraphQL.InputType("Number_range_sales_channelCreateManyNumber_range_typeInputEnvelope", {})
export class Number_range_sales_channelCreateManyNumber_range_typeInputEnvelope {
  @TypeGraphQL.Field(_type => [Number_range_sales_channelCreateManyNumber_range_typeInput], {
    nullable: false
  })
  data!: Number_range_sales_channelCreateManyNumber_range_typeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
