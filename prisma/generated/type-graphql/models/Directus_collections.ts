import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Directus_collectionsCount } from "../resolvers/outputs/Directus_collectionsCount";

@TypeGraphQL.ObjectType("Directus_collections", {})
export class Directus_collections {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  collection!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  icon?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  note?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  display_template?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  hidden!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  singleton!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  translations?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  archive_field?: string | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  archive_app_filter!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  archive_value?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  unarchive_value?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sort_field?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  accountability?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  color?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  item_duplication_fields?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  sort?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  group?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  collapse!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  preview_url?: string | null;

  directus_collections?: Directus_collections | null;

  other_directus_collections?: Directus_collections[];

  @TypeGraphQL.Field(_type => Directus_collectionsCount, {
    nullable: true
  })
  _count?: Directus_collectionsCount | null;
}
