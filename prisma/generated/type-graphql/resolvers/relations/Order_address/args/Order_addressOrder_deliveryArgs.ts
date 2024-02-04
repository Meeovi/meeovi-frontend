import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Order_deliveryOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Order_deliveryOrderByWithRelationAndSearchRelevanceInput";
import { Order_deliveryWhereInput } from "../../../inputs/Order_deliveryWhereInput";
import { Order_deliveryWhereUniqueInput } from "../../../inputs/Order_deliveryWhereUniqueInput";
import { Order_deliveryScalarFieldEnum } from "../../../../enums/Order_deliveryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class Order_addressOrder_deliveryArgs {
  @TypeGraphQL.Field(_type => Order_deliveryWhereInput, {
    nullable: true
  })
  where?: Order_deliveryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Order_deliveryOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Order_deliveryOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Order_deliveryWhereUniqueInput, {
    nullable: true
  })
  cursor?: Order_deliveryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Order_deliveryScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "version_id" | "order_id" | "order_version_id" | "state_id" | "shipping_order_address_id" | "shipping_order_address_version_id" | "shipping_method_id" | "tracking_codes" | "shipping_date_earliest" | "shipping_date_latest" | "shipping_costs" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
