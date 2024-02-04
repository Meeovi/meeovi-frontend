import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_deliveryOrderByWithAggregationInput } from "../../../inputs/Order_deliveryOrderByWithAggregationInput";
import { Order_deliveryScalarWhereWithAggregatesInput } from "../../../inputs/Order_deliveryScalarWhereWithAggregatesInput";
import { Order_deliveryWhereInput } from "../../../inputs/Order_deliveryWhereInput";
import { Order_deliveryScalarFieldEnum } from "../../../../enums/Order_deliveryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByOrder_deliveryArgs {
  @TypeGraphQL.Field(_type => Order_deliveryWhereInput, {
    nullable: true
  })
  where?: Order_deliveryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Order_deliveryOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Order_deliveryOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_deliveryScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "version_id" | "order_id" | "order_version_id" | "state_id" | "shipping_order_address_id" | "shipping_order_address_version_id" | "shipping_method_id" | "tracking_codes" | "shipping_date_earliest" | "shipping_date_latest" | "shipping_costs" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Order_deliveryScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Order_deliveryScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
