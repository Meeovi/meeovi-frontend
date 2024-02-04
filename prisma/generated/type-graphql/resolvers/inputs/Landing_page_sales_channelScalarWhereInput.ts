import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";

@TypeGraphQL.InputType("Landing_page_sales_channelScalarWhereInput", {})
export class Landing_page_sales_channelScalarWhereInput {
  @TypeGraphQL.Field(_type => [Landing_page_sales_channelScalarWhereInput], {
    nullable: true
  })
  AND?: Landing_page_sales_channelScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_sales_channelScalarWhereInput], {
    nullable: true
  })
  OR?: Landing_page_sales_channelScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_sales_channelScalarWhereInput], {
    nullable: true
  })
  NOT?: Landing_page_sales_channelScalarWhereInput[] | undefined;

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
}
