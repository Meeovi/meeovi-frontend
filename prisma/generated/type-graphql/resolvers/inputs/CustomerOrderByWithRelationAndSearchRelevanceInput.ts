import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CartOrderByRelationAggregateInput } from "../inputs/CartOrderByRelationAggregateInput";
import { CustomerOrderByRelevanceInput } from "../inputs/CustomerOrderByRelevanceInput";
import { Customer_addressOrderByRelationAggregateInput } from "../inputs/Customer_addressOrderByRelationAggregateInput";
import { Customer_groupOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Customer_groupOrderByWithRelationAndSearchRelevanceInput";
import { Customer_recoveryOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Customer_recoveryOrderByWithRelationAndSearchRelevanceInput";
import { Customer_tagOrderByRelationAggregateInput } from "../inputs/Customer_tagOrderByRelationAggregateInput";
import { Customer_wishlistOrderByRelationAggregateInput } from "../inputs/Customer_wishlistOrderByRelationAggregateInput";
import { Order_customerOrderByRelationAggregateInput } from "../inputs/Order_customerOrderByRelationAggregateInput";
import { Payment_methodOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Payment_methodOrderByWithRelationAndSearchRelevanceInput";
import { Product_reviewOrderByRelationAggregateInput } from "../inputs/Product_reviewOrderByRelationAggregateInput";
import { Promotion_persona_customerOrderByRelationAggregateInput } from "../inputs/Promotion_persona_customerOrderByRelationAggregateInput";
import { Sales_channelOrderByWithRelationAndSearchRelevanceInput } from "../inputs/Sales_channelOrderByWithRelationAndSearchRelevanceInput";
import { Sales_channel_api_contextOrderByRelationAggregateInput } from "../inputs/Sales_channel_api_contextOrderByRelationAggregateInput";
import { SalutationOrderByWithRelationAndSearchRelevanceInput } from "../inputs/SalutationOrderByWithRelationAndSearchRelevanceInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { UserOrderByWithRelationAndSearchRelevanceInput } from "../inputs/UserOrderByWithRelationAndSearchRelevanceInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CustomerOrderByWithRelationAndSearchRelevanceInput", {})
export class CustomerOrderByWithRelationAndSearchRelevanceInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  auto_increment?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customer_group_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  requested_customer_group_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  default_payment_method_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  sales_channel_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  language_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  last_payment_method_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  default_billing_address_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  default_shipping_address_id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  customer_number?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  salutation_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  first_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  last_name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  company?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  password?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  legacy_password?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  legacy_encoder?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  title?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  vat_ids?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  active?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  doubleOptInRegistration?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  double_opt_in_registration?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  doubleOptInEmailSentDate?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  double_opt_in_email_sent_date?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  doubleOptInConfirmDate?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  double_opt_in_confirm_date?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  hash?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  guest?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  first_login?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  last_login?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  newsletter_sales_channel_ids?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  birthday?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  last_order_date?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  order_count?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  order_total_amount?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  custom_fields?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  affiliate_code?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  campaign_code?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  created_at?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_at?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  remote_address?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  tag_ids?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  bound_sales_channel_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  account_type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  created_by_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  updated_by_id?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  review_count?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => CartOrderByRelationAggregateInput, {
    nullable: true
  })
  cart?: CartOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channelOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  sales_channel_customer_bound_sales_channel_idTosales_channel?: Sales_channelOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => UserOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  user_customer_created_by_idTouser?: UserOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Customer_groupOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  customer_group?: Customer_groupOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  payment_method_customer_default_payment_method_idTopayment_method?: Payment_methodOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Payment_methodOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  payment_method_customer_last_payment_method_idTopayment_method?: Payment_methodOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channelOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  sales_channel_customer_sales_channel_idTosales_channel?: Sales_channelOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => SalutationOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  salutation?: SalutationOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => UserOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  user_customer_updated_by_idTouser?: UserOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Customer_addressOrderByRelationAggregateInput, {
    nullable: true
  })
  customer_address?: Customer_addressOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Customer_recoveryOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true
  })
  customer_recovery?: Customer_recoveryOrderByWithRelationAndSearchRelevanceInput | undefined;

  @TypeGraphQL.Field(_type => Customer_tagOrderByRelationAggregateInput, {
    nullable: true
  })
  customer_tag?: Customer_tagOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Customer_wishlistOrderByRelationAggregateInput, {
    nullable: true
  })
  customer_wishlist?: Customer_wishlistOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Order_customerOrderByRelationAggregateInput, {
    nullable: true
  })
  order_customer?: Order_customerOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Product_reviewOrderByRelationAggregateInput, {
    nullable: true
  })
  product_review?: Product_reviewOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Promotion_persona_customerOrderByRelationAggregateInput, {
    nullable: true
  })
  promotion_persona_customer?: Promotion_persona_customerOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => Sales_channel_api_contextOrderByRelationAggregateInput, {
    nullable: true
  })
  sales_channel_api_context?: Sales_channel_api_contextOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CustomerOrderByRelevanceInput, {
    nullable: true
  })
  _relevance?: CustomerOrderByRelevanceInput | undefined;
}
