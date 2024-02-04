import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_delivery_positionOrderByWithAggregationInput } from "../../../inputs/Order_delivery_positionOrderByWithAggregationInput";
import { Order_delivery_positionScalarWhereWithAggregatesInput } from "../../../inputs/Order_delivery_positionScalarWhereWithAggregatesInput";
import { Order_delivery_positionWhereInput } from "../../../inputs/Order_delivery_positionWhereInput";
import { Order_delivery_positionScalarFieldEnum } from "../../../../enums/Order_delivery_positionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByOrder_delivery_positionArgs {
  @TypeGraphQL.Field(_type => Order_delivery_positionWhereInput, {
    nullable: true
  })
  where?: Order_delivery_positionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Order_delivery_positionOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Order_delivery_positionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Order_delivery_positionScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "version_id" | "order_delivery_id" | "order_delivery_version_id" | "order_line_item_id" | "order_line_item_version_id" | "price" | "total_price" | "unit_price" | "quantity" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Order_delivery_positionScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Order_delivery_positionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
