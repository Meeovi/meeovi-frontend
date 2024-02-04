import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentOrderByRelationAggregateInput } from "../inputs/DocumentOrderByRelationAggregateInput";
import { Document_base_configOrderByRelationAggregateInput } from "../inputs/Document_base_configOrderByRelationAggregateInput";
import { Document_base_config_sales_channelOrderByRelationAggregateInput } from "../inputs/Document_base_config_sales_channelOrderByRelationAggregateInput";
import { Document_typeOrderByRelevanceInput } from "../inputs/Document_typeOrderByRelevanceInput";
import { Document_type_translationOrderByRelationAggregateInput } from "../inputs/Document_type_translationOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Document_typeOrderByWithRelationAndSearchRelevanceInput", {})
export class Document_typeOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  technical_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => DocumentOrderByRelationAggregateInput, {
    nullable: true
  })
  document?: DocumentOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Document_base_configOrderByRelationAggregateInput, {
    nullable: true
  })
  document_base_config?: Document_base_configOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Document_base_config_sales_channelOrderByRelationAggregateInput, {
    nullable: true
  })
  document_base_config_sales_channel?: Document_base_config_sales_channelOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Document_type_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  document_type_translation?: Document_type_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Document_typeOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Document_typeOrderByRelevanceInput | undefined;
}
