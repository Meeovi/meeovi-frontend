import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { LanguageNullableRelationFilter } from "../inputs/LanguageNullableRelationFilter";
import { Mail_templateRelationFilter } from "../inputs/Mail_templateRelationFilter";
import { Mail_template_mediaWhereInput } from "../inputs/Mail_template_mediaWhereInput";
import { MediaRelationFilter } from "../inputs/MediaRelationFilter";

@TypeGraphQL.InputType("Mail_template_mediaWhereUniqueInput", {})
export class Mail_template_mediaWhereUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: true
  })
  id?: Buffer | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_mediaWhereInput], {
    nullable: true
  })
  AND?: Mail_template_mediaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_mediaWhereInput], {
    nullable: true
  })
  OR?: Mail_template_mediaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_mediaWhereInput], {
    nullable: true
  })
  NOT?: Mail_template_mediaWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  mail_template_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableFilter, {
    nullable: true
  })
  language_id?: BytesNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  media_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  position?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => LanguageNullableRelationFilter, {
    nullable: true
  })
  language?: LanguageNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => Mail_templateRelationFilter, {
    nullable: true
  })
  mail_template?: Mail_templateRelationFilter | undefined;

  @TypeGraphQL.Field(_type => MediaRelationFilter, {
    nullable: true
  })
  media?: MediaRelationFilter | undefined;
}
