import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { Landing_pageRelationFilter } from "../inputs/Landing_pageRelationFilter";
import { Sales_channelRelationFilter } from "../inputs/Sales_channelRelationFilter";

@TypeGraphQL.InputType("Landing_page_sales_channelWhereInput", {})
export class Landing_page_sales_channelWhereInput {
  @TypeGraphQL.Field(_type => [Landing_page_sales_channelWhereInput], {
    nullable: true
  })
  AND?: Landing_page_sales_channelWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_sales_channelWhereInput], {
    nullable: true
  })
  OR?: Landing_page_sales_channelWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_sales_channelWhereInput], {
    nullable: true
  })
  NOT?: Landing_page_sales_channelWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  landing_page_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  landing_page_version_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  sales_channel_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => Landing_pageRelationFilter, {
    nullable: true
  })
  landing_page?: Landing_pageRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Sales_channelRelationFilter, {
    nullable: true
  })
  sales_channel?: Sales_channelRelationFilter | undefined;
}
