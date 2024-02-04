import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_streamOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Product_streamOrderByWithRelationAndSearchRelevanceInput";
import { Product_stream_filterOrderByRelationAggregateInput } from "../inputs/Product_stream_filterOrderByRelationAggregateInput";
import { Product_stream_filterOrderByRelevanceInput } from "../inputs/Product_stream_filterOrderByRelevanceInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_stream_filterOrderByWithRelationAndSearchRelevanceInput", {})
export class Product_stream_filterOrderByWithRelationAndSearchRelevanceInput {
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
  parent_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  field?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  operator?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  value?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  parameters?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  position?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  custom_fields?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Product_stream_filterOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  product_stream_filter?: Product_stream_filterOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Product_stream_filterOrderByRelationAggregateInput, {
    nullable: true
  })
  other_product_stream_filter?: Product_stream_filterOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_streamOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  product_stream?: Product_streamOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Product_stream_filterOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Product_stream_filterOrderByRelevanceInput | undefined;
}
