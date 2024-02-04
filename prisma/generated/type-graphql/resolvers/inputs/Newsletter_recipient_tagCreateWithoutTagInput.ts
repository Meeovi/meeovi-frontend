import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_recipientCreateNestedOneWithoutNewsletter_recipient_tagInput } from "../inputs/Newsletter_recipientCreateNestedOneWithoutNewsletter_recipient_tagInput";

@TypeGraphQL.InputType("Newsletter_recipient_tagCreateWithoutTagInput", {})
export class Newsletter_recipient_tagCreateWithoutTagInput {
  @TypeGraphQL.Field(_type => Newsletter_recipientCreateNestedOneWithoutNewsletter_recipient_tagInput, {
    nullable: false
  })
  newsletter_recipient!: Newsletter_recipientCreateNestedOneWithoutNewsletter_recipient_tagInput;
}
