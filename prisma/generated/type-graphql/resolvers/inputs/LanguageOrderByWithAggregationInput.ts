import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCountOrderByAggregateInput } from "../inputs/LanguageCountOrderByAggregateInput";
import { LanguageMaxOrderByAggregateInput } from "../inputs/LanguageMaxOrderByAggregateInput";
import { LanguageMinOrderByAggregateInput } from "../inputs/LanguageMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("LanguageOrderByWithAggregationInput", {})
export class LanguageOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  parent_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  swag_language_pack_language_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  locale_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  translation_code_id?: SortOrderInput | undefined;

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

  @TypeGraphQL.Field(_type => LanguageCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: LanguageCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LanguageMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: LanguageMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LanguageMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: LanguageMinOrderByAggregateInput | undefined;
}
