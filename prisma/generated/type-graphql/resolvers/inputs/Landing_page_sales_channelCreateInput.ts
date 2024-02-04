import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_pageCreateNestedOneWithoutLanding_page_sales_channelInput } from "../inputs/Landing_pageCreateNestedOneWithoutLanding_page_sales_channelInput";
import { Sales_channelCreateNestedOneWithoutLanding_page_sales_channelInput } from "../inputs/Sales_channelCreateNestedOneWithoutLanding_page_sales_channelInput";

@TypeGraphQL.InputType("Landing_page_sales_channelCreateInput", {})
export class Landing_page_sales_channelCreateInput {
  @TypeGraphQL.Field(_type => Landing_pageCreateNestedOneWithoutLanding_page_sales_channelInput, {
    nullable: false
  })
  landing_page!: Landing_pageCreateNestedOneWithoutLanding_page_sales_channelInput;

  @TypeGraphQL.Field(_type => Sales_channelCreateNestedOneWithoutLanding_page_sales_channelInput, {
    nullable: false
  })
  sales_channel!: Sales_channelCreateNestedOneWithoutLanding_page_sales_channelInput;
}
