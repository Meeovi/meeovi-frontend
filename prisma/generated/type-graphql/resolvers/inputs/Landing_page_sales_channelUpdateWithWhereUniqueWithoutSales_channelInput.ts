import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_page_sales_channelUpdateWithoutSales_channelInput } from "../inputs/Landing_page_sales_channelUpdateWithoutSales_channelInput";
import { Landing_page_sales_channelWhereUniqueInput } from "../inputs/Landing_page_sales_channelWhereUniqueInput";

@TypeGraphQL.InputType("Landing_page_sales_channelUpdateWithWhereUniqueWithoutSales_channelInput", {})
export class Landing_page_sales_channelUpdateWithWhereUniqueWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => Landing_page_sales_channelWhereUniqueInput, {
    nullable: false
  })
  where!: Landing_page_sales_channelWhereUniqueInput;

  @TypeGraphQL.Field(_type => Landing_page_sales_channelUpdateWithoutSales_channelInput, {
    nullable: false
  })
  data!: Landing_page_sales_channelUpdateWithoutSales_channelInput;
}
