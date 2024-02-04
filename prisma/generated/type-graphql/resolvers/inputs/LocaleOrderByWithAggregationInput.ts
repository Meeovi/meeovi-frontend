import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LocaleCountOrderByAggregateInput } from "../inputs/LocaleCountOrderByAggregateInput";
import { LocaleMaxOrderByAggregateInput } from "../inputs/LocaleMaxOrderByAggregateInput";
import { LocaleMinOrderByAggregateInput } from "../inputs/LocaleMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("LocaleOrderByWithAggregationInput", {})
export class LocaleOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  code?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => LocaleCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: LocaleCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocaleMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: LocaleMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => LocaleMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: LocaleMinOrderByAggregateInput | undefined;
}
