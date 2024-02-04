import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Cms_page } from "../models/Cms_page";
import { Landing_page_sales_channel } from "../models/Landing_page_sales_channel";
import { Landing_page_tag } from "../models/Landing_page_tag";
import { Landing_page_translation } from "../models/Landing_page_translation";
import { Landing_pageCount } from "../resolvers/outputs/Landing_pageCount";

@TypeGraphQL.ObjectType("Landing_page", {})
export class Landing_page {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  version_id!: Buffer;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  active!: boolean;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  cms_page_id?: Buffer | null;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  cms_page_version_id!: Buffer;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  created_at!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updated_at?: Date | null;

  cms_page?: Cms_page | null;

  landing_page_sales_channel?: Landing_page_sales_channel[];

  landing_page_tag?: Landing_page_tag[];

  landing_page_translation?: Landing_page_translation[];

  @TypeGraphQL.Field(_type => Landing_pageCount, {
    nullable: true
  })
  _count?: Landing_pageCount | null;
}
