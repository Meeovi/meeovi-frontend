import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_pageUpdateOneRequiredWithoutLanding_page_sales_channelNestedInput } from "../inputs/Landing_pageUpdateOneRequiredWithoutLanding_page_sales_channelNestedInput";

@TypeGraphQL.InputType("Landing_page_sales_channelUpdateWithoutSales_channelInput", {})
export class Landing_page_sales_channelUpdateWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => Landing_pageUpdateOneRequiredWithoutLanding_page_sales_channelNestedInput, {
    nullable: true
  })
  landing_page?: Landing_pageUpdateOneRequiredWithoutLanding_page_sales_channelNestedInput | undefined;
}
