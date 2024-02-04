import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_slot_translationCountOrderByAggregateInput } from "../inputs/Cms_slot_translationCountOrderByAggregateInput";
import { Cms_slot_translationMaxOrderByAggregateInput } from "../inputs/Cms_slot_translationMaxOrderByAggregateInput";
import { Cms_slot_translationMinOrderByAggregateInput } from "../inputs/Cms_slot_translationMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Cms_slot_translationOrderByWithAggregationInput", {})
export class Cms_slot_translationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cms_slot_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cms_slot_version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  language_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  config?: SortOrderInput | undefined;

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

  @TypeGraphQL.Field(_type => Cms_slot_translationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Cms_slot_translationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Cms_slot_translationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Cms_slot_translationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Cms_slot_translationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Cms_slot_translationMinOrderByAggregateInput | undefined;
}
