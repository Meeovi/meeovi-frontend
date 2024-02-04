import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Sales_channelUpdateOneRequiredWithoutLanding_page_sales_channelNestedInput } from "../inputs/Sales_channelUpdateOneRequiredWithoutLanding_page_sales_channelNestedInput";

@TypeGraphQL.InputType("Landing_page_sales_channelUpdateWithoutLanding_pageInput", {})
export class Landing_page_sales_channelUpdateWithoutLanding_pageInput {
  @TypeGraphQL.Field(_type => Sales_channelUpdateOneRequiredWithoutLanding_page_sales_channelNestedInput, {
    nullable: true
  })
  sales_channel?: Sales_channelUpdateOneRequiredWithoutLanding_page_sales_channelNestedInput | undefined;
}
