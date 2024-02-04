import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MigrationAvgOrderByAggregateInput } from "../inputs/MigrationAvgOrderByAggregateInput";
import { MigrationCountOrderByAggregateInput } from "../inputs/MigrationCountOrderByAggregateInput";
import { MigrationMaxOrderByAggregateInput } from "../inputs/MigrationMaxOrderByAggregateInput";
import { MigrationMinOrderByAggregateInput } from "../inputs/MigrationMinOrderByAggregateInput";
import { MigrationSumOrderByAggregateInput } from "../inputs/MigrationSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("MigrationOrderByWithAggregationInput", {})
export class MigrationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  class?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  creation_timestamp?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  update?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  update_destructive?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  message?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => MigrationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: MigrationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MigrationAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: MigrationAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MigrationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: MigrationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MigrationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: MigrationMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => MigrationSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: MigrationSumOrderByAggregateInput | undefined;
}
