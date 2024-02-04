import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_slotCountOrderByAggregateInput } from "../inputs/Cms_slotCountOrderByAggregateInput";
import { Cms_slotMaxOrderByAggregateInput } from "../inputs/Cms_slotMaxOrderByAggregateInput";
import { Cms_slotMinOrderByAggregateInput } from "../inputs/Cms_slotMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Cms_slotOrderByWithAggregationInput", {})
export class Cms_slotOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cms_block_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cms_block_version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  slot?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  locked?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Cms_slotCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Cms_slotCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Cms_slotMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Cms_slotMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Cms_slotMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Cms_slotMinOrderByAggregateInput | undefined;
}
