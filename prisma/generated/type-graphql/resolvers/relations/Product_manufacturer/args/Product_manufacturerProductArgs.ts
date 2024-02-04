import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProductOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/ProductOrderByWithRelationAndSearchRelevanceInput";
import { ProductWhereInput } from "../../../inputs/ProductWhereInput";
import { ProductWhereUniqueInput } from "../../../inputs/ProductWhereUniqueInput";
import { ProductScalarFieldEnum } from "../../../../enums/ProductScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class Product_manufacturerProductArgs {
  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true
  })
  where?: ProductWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProductOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: ProductOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  cursor?: ProductWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ProductScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "version_id" | "auto_increment" | "product_number" | "active" | "parent_id" | "parent_version_id" | "tax_id" | "product_manufacturer_id" | "product_manufacturer_version_id" | "delivery_time_id" | "deliveryTime" | "product_media_id" | "product_media_version_id" | "cms_page_id" | "cms_page_version_id" | "unit_id" | "product_feature_set_id" | "category_tree" | "category_ids" | "stream_ids" | "option_ids" | "property_ids" | "manufacturer" | "cover" | "media" | "prices" | "visibilities" | "properties" | "categories" | "translations" | "price" | "listing_prices" | "manufacturer_number" | "ean" | "sales" | "stock" | "available_stock" | "available" | "restock_time" | "is_closeout" | "purchase_steps" | "max_purchase" | "min_purchase" | "purchase_unit" | "reference_unit" | "shipping_free" | "purchase_price" | "purchase_prices" | "mark_as_topseller" | "weight" | "width" | "height" | "length" | "release_date" | "tag_ids" | "tags" | "variant_restrictions" | "configurator_group_config" | "main_variant_id" | "created_at" | "updated_at" | "rating_average" | "display_group" | "child_count" | "crossSellings" | "featureSet" | "customFieldSets" | "custom_field_set_selection_active" | "canonical_product_id" | "canonicalProduct" | "cmsPage" | "cheapest_price" | "cheapest_price_accessor" | "states" | "display_parent" | "variant_listing_config"> | undefined;
}
