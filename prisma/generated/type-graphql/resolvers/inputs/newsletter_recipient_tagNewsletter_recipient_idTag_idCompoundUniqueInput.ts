import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("newsletter_recipient_tagNewsletter_recipient_idTag_idCompoundUniqueInput", {})
export class newsletter_recipient_tagNewsletter_recipient_idTag_idCompoundUniqueInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  newsletter_recipient_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  tag_id!: Buffer;
}
