import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_cms_blockCountOrderByAggregateInput } from "../inputs/App_cms_blockCountOrderByAggregateInput";
import { App_cms_blockMaxOrderByAggregateInput } from "../inputs/App_cms_blockMaxOrderByAggregateInput";
import { App_cms_blockMinOrderByAggregateInput } from "../inputs/App_cms_blockMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("App_cms_blockOrderByWithAggregationInput", {})
export class App_cms_blockOrderByWithAggregationInput {
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
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  block?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  template?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  styles?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => App_cms_blockCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: App_cms_blockCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => App_cms_blockMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: App_cms_blockMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => App_cms_blockMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: App_cms_blockMinOrderByAggregateInput | undefined;
}
