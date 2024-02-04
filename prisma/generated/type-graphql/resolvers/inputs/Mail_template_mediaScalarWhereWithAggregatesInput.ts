import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesNullableWithAggregatesFilter } from "../inputs/BytesNullableWithAggregatesFilter";
import { BytesWithAggregatesFilter } from "../inputs/BytesWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("Mail_template_mediaScalarWhereWithAggregatesInput", {})
export class Mail_template_mediaScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [Mail_template_mediaScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: Mail_template_mediaScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_mediaScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: Mail_template_mediaScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [Mail_template_mediaScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: Mail_template_mediaScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  mail_template_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesNullableWithAggregatesFilter, {
    nullable: true
  })
  language_id?: BytesNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesWithAggregatesFilter, {
    nullable: true
  })
  media_id?: BytesWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  position?: IntWithAggregatesFilter | undefined;
}
