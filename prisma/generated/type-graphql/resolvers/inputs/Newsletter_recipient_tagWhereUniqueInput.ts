import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { Newsletter_recipientRelationFilter } from "../inputs/Newsletter_recipientRelationFilter";
import { Newsletter_recipient_tagWhereInput } from "../inputs/Newsletter_recipient_tagWhereInput";
import { TagRelationFilter } from "../inputs/TagRelationFilter";
import { newsletter_recipient_tagNewsletter_recipient_idTag_idCompoundUniqueInput } from "../inputs/newsletter_recipient_tagNewsletter_recipient_idTag_idCompoundUniqueInput";

@TypeGraphQL.InputType("Newsletter_recipient_tagWhereUniqueInput", {})
export class Newsletter_recipient_tagWhereUniqueInput {
  @TypeGraphQL.Field(_type => newsletter_recipient_tagNewsletter_recipient_idTag_idCompoundUniqueInput, {
    nullable: true
  })
  newsletter_recipient_id_tag_id?: newsletter_recipient_tagNewsletter_recipient_idTag_idCompoundUniqueInput | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipient_tagWhereInput], {
    nullable: true
  })
  AND?: Newsletter_recipient_tagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipient_tagWhereInput], {
    nullable: true
  })
  OR?: Newsletter_recipient_tagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [Newsletter_recipient_tagWhereInput], {
    nullable: true
  })
  NOT?: Newsletter_recipient_tagWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  newsletter_recipient_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => BytesFilter, {
    nullable: true
  })
  tag_id?: BytesFilter | undefined;

  @TypeGraphQL.Field(_type => Newsletter_recipientRelationFilter, {
    nullable: true
  })
  newsletter_recipient?: Newsletter_recipientRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TagRelationFilter, {
    nullable: true
  })
  tag?: TagRelationFilter | undefined;
}
