import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Acl_roleCountOrderByAggregateInput } from "../inputs/Acl_roleCountOrderByAggregateInput";
import { Acl_roleMaxOrderByAggregateInput } from "../inputs/Acl_roleMaxOrderByAggregateInput";
import { Acl_roleMinOrderByAggregateInput } from "../inputs/Acl_roleMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Acl_roleOrderByWithAggregationInput", {})
export class Acl_roleOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  description?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  privileges?: "asc" | "desc" | undefined;

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
  deleted_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Acl_roleCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Acl_roleCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Acl_roleMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Acl_roleMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Acl_roleMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Acl_roleMinOrderByAggregateInput | undefined;
}
