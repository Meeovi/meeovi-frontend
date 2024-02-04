import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Acl_user_roleCountOrderByAggregateInput } from "../inputs/Acl_user_roleCountOrderByAggregateInput";
import { Acl_user_roleMaxOrderByAggregateInput } from "../inputs/Acl_user_roleMaxOrderByAggregateInput";
import { Acl_user_roleMinOrderByAggregateInput } from "../inputs/Acl_user_roleMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Acl_user_roleOrderByWithAggregationInput", {})
export class Acl_user_roleOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  user_id?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => Acl_user_roleCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Acl_user_roleCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Acl_user_roleMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Acl_user_roleMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Acl_user_roleMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Acl_user_roleMinOrderByAggregateInput | undefined;
}
