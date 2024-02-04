import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CustomerOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/CustomerOrderByWithRelationAndSearchRelevanceInput";
import { CustomerWhereInput } from "../../../inputs/CustomerWhereInput";
import { CustomerWhereUniqueInput } from "../../../inputs/CustomerWhereUniqueInput";
import { CustomerScalarFieldEnum } from "../../../../enums/CustomerScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class SalutationCustomerArgs {
  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true
  })
  where?: CustomerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CustomerOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: CustomerOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: true
  })
  cursor?: CustomerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CustomerScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "auto_increment" | "customer_group_id" | "requested_customer_group_id" | "default_payment_method_id" | "sales_channel_id" | "language_id" | "last_payment_method_id" | "default_billing_address_id" | "default_shipping_address_id" | "customer_number" | "salutation_id" | "first_name" | "last_name" | "company" | "password" | "legacy_password" | "legacy_encoder" | "email" | "title" | "vat_ids" | "active" | "doubleOptInRegistration" | "double_opt_in_registration" | "doubleOptInEmailSentDate" | "double_opt_in_email_sent_date" | "doubleOptInConfirmDate" | "double_opt_in_confirm_date" | "hash" | "guest" | "first_login" | "last_login" | "newsletter_sales_channel_ids" | "birthday" | "last_order_date" | "order_count" | "order_total_amount" | "custom_fields" | "affiliate_code" | "campaign_code" | "created_at" | "updated_at" | "remote_address" | "tag_ids" | "bound_sales_channel_id" | "account_type" | "created_by_id" | "updated_by_id" | "review_count"> | undefined;
}
