import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_templateCountOrderByAggregateInput } from "../inputs/App_templateCountOrderByAggregateInput";
import { App_templateMaxOrderByAggregateInput } from "../inputs/App_templateMaxOrderByAggregateInput";
import { App_templateMinOrderByAggregateInput } from "../inputs/App_templateMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("App_templateOrderByWithAggregationInput", {})
export class App_templateOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  template?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  path?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  app_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => App_templateCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: App_templateCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => App_templateMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: App_templateMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => App_templateMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: App_templateMinOrderByAggregateInput | undefined;
}
