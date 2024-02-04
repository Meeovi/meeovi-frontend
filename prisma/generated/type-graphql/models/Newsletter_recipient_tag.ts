import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Newsletter_recipient } from "../models/Newsletter_recipient";
import { Tag } from "../models/Tag";

@TypeGraphQL.ObjectType("Newsletter_recipient_tag", {})
export class Newsletter_recipient_tag {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  newsletter_recipient_id!: Buffer;

  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  tag_id!: Buffer;

  newsletter_recipient?: Newsletter_recipient;

  tag?: Tag;
}
