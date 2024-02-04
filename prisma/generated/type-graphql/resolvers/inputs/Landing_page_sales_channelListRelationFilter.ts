import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_page_sales_channelWhereInput } from "../inputs/Landing_page_sales_channelWhereInput";

@TypeGraphQL.InputType("Landing_page_sales_channelListRelationFilter", {})
export class Landing_page_sales_channelListRelationFilter {
  @TypeGraphQL.Field(_type => Landing_page_sales_channelWhereInput, {
    nullable: true
  })
  every?: Landing_page_sales_channelWhereInput | undefined;

  @TypeGraphQL.Field(_type => Landing_page_sales_channelWhereInput, {
    nullable: true
  })
  some?: Landing_page_sales_channelWhereInput | undefined;

  @TypeGraphQL.Field(_type => Landing_page_sales_channelWhereInput, {
    nullable: true
  })
  none?: Landing_page_sales_channelWhereInput | undefined;
}
