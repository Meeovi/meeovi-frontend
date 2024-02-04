import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_page_sales_channelCreateWithoutSales_channelInput } from "../inputs/Landing_page_sales_channelCreateWithoutSales_channelInput";
import { Landing_page_sales_channelWhereUniqueInput } from "../inputs/Landing_page_sales_channelWhereUniqueInput";

@TypeGraphQL.InputType("Landing_page_sales_channelCreateOrConnectWithoutSales_channelInput", {})
export class Landing_page_sales_channelCreateOrConnectWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => Landing_page_sales_channelWhereUniqueInput, {
    nullable: false
  })
  where!: Landing_page_sales_channelWhereUniqueInput;

  @TypeGraphQL.Field(_type => Landing_page_sales_channelCreateWithoutSales_channelInput, {
    nullable: false
  })
  create!: Landing_page_sales_channelCreateWithoutSales_channelInput;
}
