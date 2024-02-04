import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AppAvgOrderByAggregateInput } from "../inputs/AppAvgOrderByAggregateInput";
import { AppCountOrderByAggregateInput } from "../inputs/AppCountOrderByAggregateInput";
import { AppMaxOrderByAggregateInput } from "../inputs/AppMaxOrderByAggregateInput";
import { AppMinOrderByAggregateInput } from "../inputs/AppMinOrderByAggregateInput";
import { AppSumOrderByAggregateInput } from "../inputs/AppSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AppOrderByWithAggregationInput", {})
export class AppOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  path?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  author?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  copyright?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  license?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  privacy?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  version?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  base_app_url?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  allow_disable?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  configurable?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  icon?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  app_secret?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  modules?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  main_module?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  cookies?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  allowed_hosts?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  integration_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  acl_role_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  template_load_priority?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => AppCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: AppCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AppAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: AppAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AppMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: AppMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AppMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: AppMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AppSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: AppSumOrderByAggregateInput | undefined;
}
