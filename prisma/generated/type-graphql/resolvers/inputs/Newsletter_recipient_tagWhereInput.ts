import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BytesFilter } from "../inputs/BytesFilter";
import { Newsletter_recipientRelationFilter } from "../inputs/Newsletter_recipientRelationFilter";
import { TagRelationFilter } from "../inputs/TagRelationFilter";

@TypeGraphQL.InputType("Newsletter_recipient_tagWhereInput", {})
export class Newsletter_recipient_tagWhereInput {
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
