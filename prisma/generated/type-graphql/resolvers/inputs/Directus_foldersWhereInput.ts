import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Directus_filesListRelationFilter } from "../inputs/Directus_filesListRelationFilter";
import { Directus_foldersListRelationFilter } from "../inputs/Directus_foldersListRelationFilter";
import { Directus_foldersNullableRelationFilter } from "../inputs/Directus_foldersNullableRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Directus_foldersWhereInput", {})
export class Directus_foldersWhereInput {
  @TypeGraphQL.Field(_type => [Directus_foldersWhereInput], {
    nullable: true
  })
  AND?: Directus_foldersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_foldersWhereInput], {
    nullable: true
  })
  OR?: Directus_foldersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_foldersWhereInput], {
    nullable: true
  })
  NOT?: Directus_foldersWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  parent?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => Directus_filesListRelationFilter, {
    nullable: true
  })
  directus_files?: Directus_filesListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Directus_foldersNullableRelationFilter, {
    nullable: true
  })
  directus_folders?: Directus_foldersNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Directus_foldersListRelationFilter, {
    nullable: true
  })
  other_directus_folders?: Directus_foldersListRelationFilter | undefined;
}
