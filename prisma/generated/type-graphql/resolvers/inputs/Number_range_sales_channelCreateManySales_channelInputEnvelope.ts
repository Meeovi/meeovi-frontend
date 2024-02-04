import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_range_sales_channelCreateManySales_channelInput } from "../inputs/Number_range_sales_channelCreateManySales_channelInput";

@TypeGraphQL.InputType("Number_range_sales_channelCreateManySales_channelInputEnvelope", {})
export class Number_range_sales_channelCreateManySales_channelInputEnvelope {
  @TypeGraphQL.Field(_type => [Number_range_sales_channelCreateManySales_channelInput], {
    nullable: false
  })
  data!: Number_range_sales_channelCreateManySales_channelInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
