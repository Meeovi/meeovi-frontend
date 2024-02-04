import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/OrderOrderByWithRelationAndSearchRelevanceInput";
import { OrderWhereInput } from "../../../inputs/OrderWhereInput";
import { OrderWhereUniqueInput } from "../../../inputs/OrderWhereUniqueInput";
import { OrderScalarFieldEnum } from "../../../../enums/OrderScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class UserOrder_order_created_by_idTouserArgs {
  @TypeGraphQL.Field(_type => OrderWhereInput, {
    nullable: true
  })
  where?: OrderWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OrderOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: OrderOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: true
  })
  cursor?: OrderWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [OrderScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "version_id" | "state_id" | "auto_increment" | "order_number" | "currency_id" | "language_id" | "currency_factor" | "sales_channel_id" | "billing_address_id" | "billing_address_version_id" | "price" | "order_date_time" | "order_date" | "amount_total" | "amount_net" | "position_price" | "tax_status" | "shipping_costs" | "shipping_total" | "deep_link_code" | "custom_fields" | "affiliate_code" | "campaign_code" | "customer_comment" | "created_at" | "updated_at" | "item_rounding" | "total_rounding" | "rule_ids" | "created_by_id" | "updated_by_id" | "source"> | undefined;
}
