import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_exportOrderByRelevanceInput } from "../inputs/Product_exportOrderByRelevanceInput";
import { Product_streamOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Product_streamOrderByWithRelationAndSearchRelevanceInput";
import { Sales_channelOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Sales_channelOrderByWithRelationAndSearchRelevanceInput";
import { Sales_channel_domainOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Sales_channel_domainOrderByWithRelationAndSearchRelevanceInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_exportOrderByWithRelationAndSearchRelevanceInput", {})
export class Product_exportOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  product_stream_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  storefront_sales_channel_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sales_channel_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  sales_channel_domain_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  file_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  access_key?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  encoding?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  file_format?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  include_variants?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  generate_by_cronjob?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  generated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  interval?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  header_template?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  body_template?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  footer_template?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  currency_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  paused_schedule?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  is_running?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Product_streamOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  product_stream?: Product_streamOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_domainOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  sales_channel_domain?: Sales_channel_domainOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channelOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  sales_channel_product_export_sales_channel_idTosales_channel?: Sales_channelOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channelOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  sales_channel_product_export_storefront_sales_channel_idTosales_channel?: Sales_channelOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Product_exportOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Product_exportOrderByRelevanceInput | undefined;
}
