import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Category } from "../models/Category";
import { Cms_page_translation } from "../models/Cms_page_translation";
import { Cms_section } from "../models/Cms_section";
import { Landing_page } from "../models/Landing_page";
import { Media } from "../models/Media";
import { Product } from "../models/Product";
import { Sales_channel } from "../models/Sales_channel";
import { Cms_pageCount } from "../resolvers/outputs/Cms_pageCount";

@TypeGraphQL.ObjectType("Cms_page", {})
export class Cms_page {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  version_id!: Buffer;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  entity?: string | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  preview_media_id?: Buffer | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  locked!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  css_class?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  config?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  category?: Category[];

  media?: Media | null;

  cms_page_translation?: Cms_page_translation[];

  cms_section?: Cms_section[];

  landing_page?: Landing_page[];

  product?: Product[];

  sales_channel?: Sales_channel[];

  @TypeGraphQL.Field(_type => Cms_pageCount, {
    nullable: true
  })
  _count?: Cms_pageCount | null;
}
