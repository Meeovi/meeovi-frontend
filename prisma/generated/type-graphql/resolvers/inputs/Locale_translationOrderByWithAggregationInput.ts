import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Locale_translationCountOrderByAggregateInput } from "../inputs/Locale_translationCountOrderByAggregateInput";
import { Locale_translationMaxOrderByAggregateInput } from "../inputs/Locale_translationMaxOrderByAggregateInput";
import { Locale_translationMinOrderByAggregateInput } from "../inputs/Locale_translationMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Locale_translationOrderByWithAggregationInput", {})
export class Locale_translationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  locale_id?: "asc" | "desc" | undefined;

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
  territory?: SortOrderInput | undefined;

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

  @TypeGraphQL.Field(_type => Locale_translationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Locale_translationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Locale_translationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Locale_translationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Locale_translationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Locale_translationMinOrderByAggregateInput | undefined;
}
