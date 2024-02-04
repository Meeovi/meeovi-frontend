import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_type_translationCountOrderByAggregateInput } from "../inputs/Document_type_translationCountOrderByAggregateInput";
import { Document_type_translationMaxOrderByAggregateInput } from "../inputs/Document_type_translationMaxOrderByAggregateInput";
import { Document_type_translationMinOrderByAggregateInput } from "../inputs/Document_type_translationMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Document_type_translationOrderByWithAggregationInput", {})
export class Document_type_translationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  document_type_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  language_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  name?: SortOrderInput | undefined;

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

  @TypeGraphQL.Field(_type => Document_type_translationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Document_type_translationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Document_type_translationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Document_type_translationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Document_type_translationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Document_type_translationMinOrderByAggregateInput | undefined;
}
