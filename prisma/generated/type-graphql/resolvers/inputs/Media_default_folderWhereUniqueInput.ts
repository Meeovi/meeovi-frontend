import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { Media_default_folderWhereInput } from "../inputs/Media_default_folderWhereInput";
import { Media_folderNullableRelationFilter } from "../inputs/Media_folderNullableRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Media_default_folderWhereUniqueInput", {})
export class Media_default_folderWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  entity?: string | undefined;

  @TypeGraphQL.Field(_type => [Media_default_folderWhereInput], {
    nullable: true
  })
  AND?: Media_default_folderWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_default_folderWhereInput], {
    nullable: true
  })
  OR?: Media_default_folderWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_default_folderWhereInput], {
    nullable: true
  })
  NOT?: Media_default_folderWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  association_fields?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  custom_fields?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  created_at?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  updated_at?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => Media_folderNullableRelationFilter, {
    nullable: true
  })
  media_folder?: Media_folderNullableRelationFilter | undefined;
}
