import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryOrderByRelationAggregateInput } from "../inputs/CategoryOrderByRelationAggregateInput";
import { Product_cross_sellingOrderByRelationAggregateInput } from "../inputs/Product_cross_sellingOrderByRelationAggregateInput";
import { Product_exportOrderByRelationAggregateInput } from "../inputs/Product_exportOrderByRelationAggregateInput";
import { Product_streamOrderByRelevanceInput } from "../inputs/Product_streamOrderByRelevanceInput";
import { Product_stream_filterOrderByRelationAggregateInput } from "../inputs/Product_stream_filterOrderByRelationAggregateInput";
import { Product_stream_mappingOrderByRelationAggregateInput } from "../inputs/Product_stream_mappingOrderByRelationAggregateInput";
import { Product_stream_translationOrderByRelationAggregateInput } from "../inputs/Product_stream_translationOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { Swag_paypal_pos_sales_channelOrderByRelationAggregateInput } from "../inputs/Swag_paypal_pos_sales_channelOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_streamOrderByWithRelationAndSearchRelevanceInput", {})
export class Product_streamOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  api_filter?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  invalid?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => CategoryOrderByRelationAggregateInput, {
    nullable: true
  })
  category?: CategoryOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_cross_sellingOrderByRelationAggregateInput, {
    nullable: true
  })
  product_cross_selling?: Product_cross_sellingOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_exportOrderByRelationAggregateInput, {
    nullable: true
  })
  product_export?: Product_exportOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_stream_filterOrderByRelationAggregateInput, {
    nullable: true
  })
  product_stream_filter?: Product_stream_filterOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_stream_mappingOrderByRelationAggregateInput, {
    nullable: true
  })
  product_stream_mapping?: Product_stream_mappingOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_stream_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  product_stream_translation?: Product_stream_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Swag_paypal_pos_sales_channelOrderByRelationAggregateInput, {
    nullable: true
  })
  swag_paypal_pos_sales_channel?: Swag_paypal_pos_sales_channelOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Product_streamOrderByRelevanceInput | undefined;
}
