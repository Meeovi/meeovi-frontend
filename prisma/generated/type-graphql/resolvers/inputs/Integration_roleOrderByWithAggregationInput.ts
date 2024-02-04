import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Integration_roleCountOrderByAggregateInput } from "../inputs/Integration_roleCountOrderByAggregateInput";
import { Integration_roleMaxOrderByAggregateInput } from "../inputs/Integration_roleMaxOrderByAggregateInput";
import { Integration_roleMinOrderByAggregateInput } from "../inputs/Integration_roleMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Integration_roleOrderByWithAggregationInput", {})
export class Integration_roleOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  integration_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  acl_role_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => Integration_roleCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Integration_roleCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Integration_roleMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Integration_roleMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Integration_roleMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Integration_roleMinOrderByAggregateInput | undefined;
}
