import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_exportAvgOrderByAggregateInput } from "../inputs/Product_exportAvgOrderByAggregateInput";
import { Product_exportCountOrderByAggregateInput } from "../inputs/Product_exportCountOrderByAggregateInput";
import { Product_exportMaxOrderByAggregateInput } from "../inputs/Product_exportMaxOrderByAggregateInput";
import { Product_exportMinOrderByAggregateInput } from "../inputs/Product_exportMinOrderByAggregateInput";
import { Product_exportSumOrderByAggregateInput } from "../inputs/Product_exportSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_exportOrderByWithAggregationInput", {})
export class Product_exportOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => Product_exportCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Product_exportCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_exportAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Product_exportAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_exportMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Product_exportMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_exportMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Product_exportMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_exportSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Product_exportSumOrderByAggregateInput | undefined;
}
