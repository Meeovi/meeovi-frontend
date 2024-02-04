import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderOrderByRelevanceFieldEnum } from "../../enums/OrderOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("OrderOrderByRelevanceInput", {})
export class OrderOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [OrderOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"order_number" | "price" | "tax_status" | "shipping_costs" | "deep_link_code" | "custom_fields" | "affiliate_code" | "campaign_code" | "customer_comment" | "item_rounding" | "total_rounding" | "rule_ids" | "source">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
