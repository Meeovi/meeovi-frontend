import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerOrderByRelationAggregateInput } from "../inputs/CustomerOrderByRelationAggregateInput";
import { Customer_group_registration_sales_channelsOrderByRelationAggregateInput } from "../inputs/Customer_group_registration_sales_channelsOrderByRelationAggregateInput";
import { Customer_group_translationOrderByRelationAggregateInput } from "../inputs/Customer_group_translationOrderByRelationAggregateInput";
import { Sales_channelOrderByRelationAggregateInput } from "../inputs/Sales_channelOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("Customer_groupOrderByWithRelationAndSearchRelevanceInput", {})
export class Customer_groupOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  display_gross?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  registration_active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => CustomerOrderByRelationAggregateInput, {
    nullable: true
  })
  customer?: CustomerOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Customer_group_registration_sales_channelsOrderByRelationAggregateInput, {
    nullable: true
  })
  customer_group_registration_sales_channels?: Customer_group_registration_sales_channelsOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Customer_group_translationOrderByRelationAggregateInput, {
    nullable: true
  })
  customer_group_translation?: Customer_group_translationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channelOrderByRelationAggregateInput, {
    nullable: true
  })
  sales_channel?: Sales_channelOrderByRelationAggregateInput | undefined;
}
