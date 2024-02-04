import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Klaviyo_flag_storageCountOrderByAggregateInput } from "../inputs/Klaviyo_flag_storageCountOrderByAggregateInput";
import { Klaviyo_flag_storageMaxOrderByAggregateInput } from "../inputs/Klaviyo_flag_storageMaxOrderByAggregateInput";
import { Klaviyo_flag_storageMinOrderByAggregateInput } from "../inputs/Klaviyo_flag_storageMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Klaviyo_flag_storageOrderByWithAggregationInput", {})
export class Klaviyo_flag_storageOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  key?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  value?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sales_channel_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Klaviyo_flag_storageCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Klaviyo_flag_storageCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Klaviyo_flag_storageMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Klaviyo_flag_storageMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Klaviyo_flag_storageMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Klaviyo_flag_storageMinOrderByAggregateInput | undefined;
}
