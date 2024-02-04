import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { BytesNullableFilter } from "../inputs/BytesNullableFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("Mail_template_mediaScalarWhereInput", {})
export class Mail_template_mediaScalarWhereInput {
  @TypeGraphQL.Field(_type => [Mail_template_mediaScalarWhereInput], {
    nullable: true
  })
  AND?: Mail_template_mediaScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_mediaScalarWhereInput], {
    nullable: true
  })
  OR?: Mail_template_mediaScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_mediaScalarWhereInput], {
    nullable: true
  })
  NOT?: Mail_template_mediaScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  id?: BytesFilter | undefined;

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
}
