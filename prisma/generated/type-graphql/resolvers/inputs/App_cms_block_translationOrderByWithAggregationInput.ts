import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_cms_block_translationCountOrderByAggregateInput } from "../inputs/App_cms_block_translationCountOrderByAggregateInput";
import { App_cms_block_translationMaxOrderByAggregateInput } from "../inputs/App_cms_block_translationMaxOrderByAggregateInput";
import { App_cms_block_translationMinOrderByAggregateInput } from "../inputs/App_cms_block_translationMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("App_cms_block_translationOrderByWithAggregationInput", {})
export class App_cms_block_translationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  label?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  app_cms_block_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  language_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => App_cms_block_translationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: App_cms_block_translationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => App_cms_block_translationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: App_cms_block_translationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => App_cms_block_translationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: App_cms_block_translationMinOrderByAggregateInput | undefined;
}
