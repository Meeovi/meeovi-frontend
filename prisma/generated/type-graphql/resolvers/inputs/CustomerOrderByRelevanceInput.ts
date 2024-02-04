import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerOrderByRelevanceFieldEnum } from "../../enums/CustomerOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CustomerOrderByRelevanceInput", {})
export class CustomerOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [CustomerOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"customer_number" | "first_name" | "last_name" | "company" | "password" | "legacy_password" | "legacy_encoder" | "email" | "title" | "vat_ids" | "hash" | "newsletter_sales_channel_ids" | "custom_fields" | "affiliate_code" | "campaign_code" | "remote_address" | "tag_ids" | "account_type">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
