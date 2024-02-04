import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Sales_channelCreateNestedOneWithoutLanding_page_sales_channelInput } from "../inputs/Sales_channelCreateNestedOneWithoutLanding_page_sales_channelInput";

@TypeGraphQL.InputType("Landing_page_sales_channelCreateWithoutLanding_pageInput", {})
export class Landing_page_sales_channelCreateWithoutLanding_pageInput {
  @TypeGraphQL.Field(_type => Sales_channelCreateNestedOneWithoutLanding_page_sales_channelInput, {
    nullable: false
  })
  sales_channel!: Sales_channelCreateNestedOneWithoutLanding_page_sales_channelInput;
}
