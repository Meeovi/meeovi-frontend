import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderOrderByWithRelationAndSearchRelevanceInput } from "../inputs/OrderOrderByWithRelationAndSearchRelevanceInput";
import { Order_addressOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Order_addressOrderByWithRelationAndSearchRelevanceInput";
import { Order_deliveryOrderByRelevanceInput } from "../inputs/Order_deliveryOrderByRelevanceInput";
import { Order_delivery_positionOrderByRelationAggregateInput } from "../inputs/Order_delivery_positionOrderByRelationAggregateInput";
import { Shipping_methodOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Shipping_methodOrderByWithRelationAndSearchRelevanceInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Order_deliveryOrderByWithRelationAndSearchRelevanceInput", {})
export class Order_deliveryOrderByWithRelationAndSearchRelevanceInput {
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
  order_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  order_version_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  state_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  shipping_order_address_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  shipping_order_address_version_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  shipping_method_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tracking_codes?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  shipping_date_earliest?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  shipping_date_latest?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  shipping_costs?: "asc" | "desc" | undefined;

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

  @TypeGraphQL.Field(_type => OrderOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  order?: OrderOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Shipping_methodOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  shipping_method?: Shipping_methodOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Order_addressOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  order_address?: Order_addressOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Order_delivery_positionOrderByRelationAggregateInput, {
    nullable: true
  })
  order_delivery_position?: Order_delivery_positionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Order_deliveryOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: Order_deliveryOrderByRelevanceInput | undefined;
}
