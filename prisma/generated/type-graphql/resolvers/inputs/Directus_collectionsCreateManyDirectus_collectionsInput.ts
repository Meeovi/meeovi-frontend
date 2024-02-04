import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Directus_collectionsCreateManyDirectus_collectionsInput", {})
export class Directus_collectionsCreateManyDirectus_collectionsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  collection!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  icon?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  note?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  display_template?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  hidden?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  singleton?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  translations?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  archive_field?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  archive_app_filter?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  archive_value?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  unarchive_value?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sort_field?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  accountability?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  color?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  item_duplication_fields?: string | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  sort?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  collapse?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  preview_url?: string | undefined;
}
