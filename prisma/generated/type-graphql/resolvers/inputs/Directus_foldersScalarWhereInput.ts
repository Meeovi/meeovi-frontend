import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Directus_foldersScalarWhereInput", {})
export class Directus_foldersScalarWhereInput {
  @TypeGraphQL.Field(_type => [Directus_foldersScalarWhereInput], {
    nullable: true
  })
  AND?: Directus_foldersScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_foldersScalarWhereInput], {
    nullable: true
  })
  OR?: Directus_foldersScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_foldersScalarWhereInput], {
    nullable: true
  })
  NOT?: Directus_foldersScalarWhereInput[] | undefined;

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
}
