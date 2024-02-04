import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_page_translationCountOrderByAggregateInput } from "../inputs/Landing_page_translationCountOrderByAggregateInput";
import { Landing_page_translationMaxOrderByAggregateInput } from "../inputs/Landing_page_translationMaxOrderByAggregateInput";
import { Landing_page_translationMinOrderByAggregateInput } from "../inputs/Landing_page_translationMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Landing_page_translationOrderByWithAggregationInput", {})
export class Landing_page_translationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  landing_page_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  landing_page_version_id?: "asc" | "desc" | undefined;

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
  url?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  meta_title?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  meta_description?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  keywords?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  custom_fields?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  slot_config?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Landing_page_translationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Landing_page_translationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Landing_page_translationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Landing_page_translationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Landing_page_translationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Landing_page_translationMinOrderByAggregateInput | undefined;
}
