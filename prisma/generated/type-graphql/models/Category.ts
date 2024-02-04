import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Category_tag } from "../models/Category_tag";
import { Category_translation } from "../models/Category_translation";
import { Cms_page } from "../models/Cms_page";
import { Custom_entity } from "../models/Custom_entity";
import { Main_category } from "../models/Main_category";
import { Media } from "../models/Media";
import { Product_category } from "../models/Product_category";
import { Product_category_tree } from "../models/Product_category_tree";
import { Product_stream } from "../models/Product_stream";
import { Sales_channel } from "../models/Sales_channel";
import { CategoryCount } from "../resolvers/outputs/CategoryCount";

@TypeGraphQL.ObjectType("Category", {})
export class Category {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  version_id!: Buffer;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  auto_increment!: number;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  parent_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  parent_version_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  media_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  cms_page_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  cms_page_version_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  product_stream_id?: Buffer | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  product_assignment_type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  path?: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  after_category_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  after_category_version_id?: Buffer | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  level!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  active!: boolean;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  child_count!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  display_nested_products!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  visible!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  custom_entity_type_id?: Buffer | null;

  category_category_after_category_id_after_category_version_idTocategory?: Category | null;

  other_category_category_after_category_id_after_category_version_idTocategory?: Category[];

  cms_page?: Cms_page | null;

  custom_entity?: Custom_entity | null;

  media?: Media | null;

  category_category_parent_id_parent_version_idTocategory?: Category | null;

  other_category_category_parent_id_parent_version_idTocategory?: Category[];

  product_stream?: Product_stream | null;

  category_tag?: Category_tag[];

  category_translation?: Category_translation[];

  main_category?: Main_category[];

  product_category?: Product_category[];

  product_category_tree?: Product_category_tree[];

  sales_channel_sales_channel_footer_category_id_footer_category_version_idTocategory?: Sales_channel[];

  sales_channel_sales_channel_navigation_category_id_navigation_category_version_idTocategory?: Sales_channel[];

  sales_channel_sales_channel_service_category_id_service_category_version_idTocategory?: Sales_channel[];

  @TypeGraphQL.Field(_type => CategoryCount, {
    nullable: true
  })
  _count?: CategoryCount | null;
}
