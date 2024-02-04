import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentOrderByRelationAggregateInput } from "../inputs/DocumentOrderByRelationAggregateInput";
import { DocumentOrderByRelevanceInput } from "../inputs/DocumentOrderByRelevanceInput";
import { Document_typeOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Document_typeOrderByWithRelationAndSearchRelevanceInput";
import { MediaOrderByWithRelationAndSearchRelevanceInput } from "../inputs/MediaOrderByWithRelationAndSearchRelevanceInput";
import { OrderOrderByWithRelationAndSearchRelevanceInput } from "../inputs/OrderOrderByWithRelationAndSearchRelevanceInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("DocumentOrderByWithRelationAndSearchRelevanceInput", {})
export class DocumentOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  document_type_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  referenced_document_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  file_type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  order_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  order_version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  config?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sent?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  static?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  deep_link_code?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  document_media_file_id?: SortOrderInput | undefined;

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

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  document_number?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => MediaOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  media?: MediaOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Document_typeOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  document_type?: Document_typeOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => OrderOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  order?: OrderOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => DocumentOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  document?: DocumentOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => DocumentOrderByRelationAggregateInput, {
    nullable: true
  })
  other_document?: DocumentOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => DocumentOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: DocumentOrderByRelevanceInput | undefined;
}
