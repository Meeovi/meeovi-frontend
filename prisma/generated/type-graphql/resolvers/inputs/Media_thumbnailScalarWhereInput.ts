import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("Media_thumbnailScalarWhereInput", {})
export class Media_thumbnailScalarWhereInput {
  @TypeGraphQL.Field(_type => [Media_thumbnailScalarWhereInput], {
    nullable: true
  })
  AND?: Media_thumbnailScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_thumbnailScalarWhereInput], {
    nullable: true
  })
  OR?: Media_thumbnailScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_thumbnailScalarWhereInput], {
    nullable: true
  })
  NOT?: Media_thumbnailScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  media_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  width?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  height?: IntFilter | undefined;

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

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  path?: StringNullableFilter | undefined;
}
