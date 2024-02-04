import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Product_configurator_settingAvgOrderByAggregateInput } from "../inputs/Product_configurator_settingAvgOrderByAggregateInput";
import { Product_configurator_settingCountOrderByAggregateInput } from "../inputs/Product_configurator_settingCountOrderByAggregateInput";
import { Product_configurator_settingMaxOrderByAggregateInput } from "../inputs/Product_configurator_settingMaxOrderByAggregateInput";
import { Product_configurator_settingMinOrderByAggregateInput } from "../inputs/Product_configurator_settingMinOrderByAggregateInput";
import { Product_configurator_settingSumOrderByAggregateInput } from "../inputs/Product_configurator_settingSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Product_configurator_settingOrderByWithAggregationInput", {})
export class Product_configurator_settingOrderByWithAggregationInput {
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
  product_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  product_version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  property_group_option_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  price?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  position?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  media_id?: SortOrderInput | undefined;

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

  @TypeGraphQL.Field(_type => Product_configurator_settingCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: Product_configurator_settingCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_configurator_settingAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: Product_configurator_settingAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_configurator_settingMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: Product_configurator_settingMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_configurator_settingMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: Product_configurator_settingMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_configurator_settingSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: Product_configurator_settingSumOrderByAggregateInput | undefined;
}
