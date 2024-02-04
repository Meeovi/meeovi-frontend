import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductOrderByRelevanceFieldEnum } from "../../enums/ProductOrderByRelevanceFieldEnum";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ProductOrderByRelevanceInput", {})
export class ProductOrderByRelevanceInput {
  @TypeGraphQL.Field(_type => [ProductOrderByRelevanceFieldEnum], {
    nullable: false
  })
  fields!: Array<"product_number" | "category_tree" | "category_ids" | "stream_ids" | "option_ids" | "property_ids" | "price" | "listing_prices" | "manufacturer_number" | "ean" | "purchase_prices" | "tag_ids" | "variant_restrictions" | "configurator_group_config" | "display_group" | "cheapest_price" | "cheapest_price_accessor" | "states" | "variant_listing_config">;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false
  })
  sort!: "asc" | "desc";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  search!: string;
}
