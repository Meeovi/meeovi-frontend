import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("Directus_foldersScalarWhereWithAggregatesInput", {})
export class Directus_foldersScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Directus_foldersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Directus_foldersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_foldersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Directus_foldersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Directus_foldersScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Directus_foldersScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  parent?: StringNullableWithAggregatesFilter | undefined;
}
