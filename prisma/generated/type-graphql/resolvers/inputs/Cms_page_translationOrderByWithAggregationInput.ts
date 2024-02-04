import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_page_translationCountOrderByAggregateInput } from "../inputs/Cms_page_translationCountOrderByAggregateInput";
import { Cms_page_translationMaxOrderByAggregateInput } from "../inputs/Cms_page_translationMaxOrderByAggregateInput";
import { Cms_page_translationMinOrderByAggregateInput } from "../inputs/Cms_page_translationMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Cms_page_translationOrderByWithAggregationInput", {})
export class Cms_page_translationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cms_page_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cms_page_version_id?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => Cms_page_translationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Cms_page_translationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Cms_page_translationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Cms_page_translationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Cms_page_translationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Cms_page_translationMinOrderByAggregateInput | undefined;
}
