import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("Newsletter_recipient_tagCreateManyTagInput", {})
export class Newsletter_recipient_tagCreateManyTagInput {
  @TypeGraphQL.Field(_type => GraphQLScalars.ByteResolver, {
    nullable: false
  })
  newsletter_recipient_id!: Buffer;
}
