import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntegrationCountOrderByAggregateInput } from "../inputs/IntegrationCountOrderByAggregateInput";
import { IntegrationMaxOrderByAggregateInput } from "../inputs/IntegrationMaxOrderByAggregateInput";
import { IntegrationMinOrderByAggregateInput } from "../inputs/IntegrationMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("IntegrationOrderByWithAggregationInput", {})
export class IntegrationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  write_access?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  access_key?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  secret_access_key?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  label?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  admin?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  last_usage_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  deleted_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: IntegrationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: IntegrationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => IntegrationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: IntegrationMinOrderByAggregateInput | undefined;
}
