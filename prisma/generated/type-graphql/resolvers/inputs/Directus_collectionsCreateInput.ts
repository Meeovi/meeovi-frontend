import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_collectionsCreateNestedManyWithoutDirectus_collectionsInput } from "../inputs/Directus_collectionsCreateNestedManyWithoutDirectus_collectionsInput";
import { Directus_collectionsCreateNestedOneWithoutOther_directus_collectionsInput } from "../inputs/Directus_collectionsCreateNestedOneWithoutOther_directus_collectionsInput";

@TypeGraphQL.InputType("Directus_collectionsCreateInput", {})
export class Directus_collectionsCreateInput {
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

  @TypeGraphQL.Field(_type => Directus_collectionsCreateNestedOneWithoutOther_directus_collectionsInput, {
    nullable: true
  })
  directus_collections?: Directus_collectionsCreateNestedOneWithoutOther_directus_collectionsInput | undefined;

  @TypeGraphQL.Field(_type => Directus_collectionsCreateNestedManyWithoutDirectus_collectionsInput, {
    nullable: true
  })
  other_directus_collections?: Directus_collectionsCreateNestedManyWithoutDirectus_collectionsInput | undefined;
}
