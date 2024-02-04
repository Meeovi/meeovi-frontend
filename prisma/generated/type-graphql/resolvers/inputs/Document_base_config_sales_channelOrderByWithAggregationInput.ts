import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_base_config_sales_channelCountOrderByAggregateInput } from "../inputs/Document_base_config_sales_channelCountOrderByAggregateInput";
import { Document_base_config_sales_channelMaxOrderByAggregateInput } from "../inputs/Document_base_config_sales_channelMaxOrderByAggregateInput";
import { Document_base_config_sales_channelMinOrderByAggregateInput } from "../inputs/Document_base_config_sales_channelMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Document_base_config_sales_channelOrderByWithAggregationInput", {})
export class Document_base_config_sales_channelOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  document_base_config_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  document_type_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  sales_channel_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Document_base_config_sales_channelCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Document_base_config_sales_channelCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Document_base_config_sales_channelMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Document_base_config_sales_channelMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Document_base_config_sales_channelMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Document_base_config_sales_channelMinOrderByAggregateInput | undefined;
}
