import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_administration_snippetCountOrderByAggregateInput } from "../inputs/App_administration_snippetCountOrderByAggregateInput";
import { App_administration_snippetMaxOrderByAggregateInput } from "../inputs/App_administration_snippetMaxOrderByAggregateInput";
import { App_administration_snippetMinOrderByAggregateInput } from "../inputs/App_administration_snippetMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("App_administration_snippetOrderByWithAggregationInput", {})
export class App_administration_snippetOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  app_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  locale_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  value?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => App_administration_snippetCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: App_administration_snippetCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => App_administration_snippetMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: App_administration_snippetMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => App_administration_snippetMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: App_administration_snippetMinOrderByAggregateInput | undefined;
}
