import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Sales_channelOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Sales_channelOrderByWithRelationAndSearchRelevanceInput";
import { Sales_channelWhereInput } from "../../../inputs/Sales_channelWhereInput";
import { Sales_channelWhereUniqueInput } from "../../../inputs/Sales_channelWhereUniqueInput";
import { Sales_channelScalarFieldEnum } from "../../../../enums/Sales_channelScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class LanguageSales_channelArgs {
  @TypeGraphQL.Field(_type => Sales_channelWhereInput, {
    nullable: true
  })
  where?: Sales_channelWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Sales_channelOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Sales_channelOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Sales_channelWhereUniqueInput, {
    nullable: true
  })
  cursor?: Sales_channelWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Sales_channelScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "type_id" | "short_name" | "configuration" | "access_key" | "language_id" | "currency_id" | "payment_method_id" | "shipping_method_id" | "country_id" | "navigation_category_id" | "navigation_category_version_id" | "navigation_category_depth" | "home_cms_page_id" | "home_cms_page_version_id" | "hreflang_active" | "hreflang_default_domain_id" | "footer_category_id" | "footer_category_version_id" | "service_category_id" | "service_category_version_id" | "active" | "maintenance" | "maintenance_ip_whitelist" | "customer_group_id" | "mail_header_footer_id" | "payment_method_ids" | "analytics_id" | "tax_calculation_type" | "created_at" | "updated_at"> | undefined;
}
