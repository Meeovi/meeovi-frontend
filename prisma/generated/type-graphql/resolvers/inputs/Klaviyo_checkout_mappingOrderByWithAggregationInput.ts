import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Klaviyo_checkout_mappingCountOrderByAggregateInput } from "../inputs/Klaviyo_checkout_mappingCountOrderByAggregateInput";
import { Klaviyo_checkout_mappingMaxOrderByAggregateInput } from "../inputs/Klaviyo_checkout_mappingMaxOrderByAggregateInput";
import { Klaviyo_checkout_mappingMinOrderByAggregateInput } from "../inputs/Klaviyo_checkout_mappingMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Klaviyo_checkout_mappingOrderByWithAggregationInput", {})
export class Klaviyo_checkout_mappingOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  reference?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  mapping_table?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => Klaviyo_checkout_mappingCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Klaviyo_checkout_mappingCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Klaviyo_checkout_mappingMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Klaviyo_checkout_mappingMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Klaviyo_checkout_mappingMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Klaviyo_checkout_mappingMinOrderByAggregateInput | undefined;
}
