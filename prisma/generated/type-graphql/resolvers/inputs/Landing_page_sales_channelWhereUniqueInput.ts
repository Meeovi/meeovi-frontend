import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { Landing_pageRelationFilter } from "../inputs/Landing_pageRelationFilter";
import { Landing_page_sales_channelWhereInput } from "../inputs/Landing_page_sales_channelWhereInput";
import { Sales_channelRelationFilter } from "../inputs/Sales_channelRelationFilter";
import { landing_page_sales_channelLanding_page_idLanding_page_version_idSales_channel_idCompoundUniqueInput } from "../inputs/landing_page_sales_channelLanding_page_idLanding_page_version_idSales_channel_idCompoundUniqueInput";

@TypeGraphQL.InputType("Landing_page_sales_channelWhereUniqueInput", {})
export class Landing_page_sales_channelWhereUniqueInput {
  @TypeGraphQL.Field(_type => landing_page_sales_channelLanding_page_idLanding_page_version_idSales_channel_idCompoundUniqueInput, {
    nullable: true
  })
  landing_page_id_landing_page_version_id_sales_channel_id?: landing_page_sales_channelLanding_page_idLanding_page_version_idSales_channel_idCompoundUniqueInput | undefined;

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
