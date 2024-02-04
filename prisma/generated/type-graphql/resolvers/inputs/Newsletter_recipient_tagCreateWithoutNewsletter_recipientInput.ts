import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateNestedOneWithoutNewsletter_recipient_tagInput } from "../inputs/TagCreateNestedOneWithoutNewsletter_recipient_tagInput";

@TypeGraphQL.InputType("Newsletter_recipient_tagCreateWithoutNewsletter_recipientInput", {})
export class Newsletter_recipient_tagCreateWithoutNewsletter_recipientInput {
  @TypeGraphQL.Field(_type => TagCreateNestedOneWithoutNewsletter_recipient_tagInput, {
    nullable: false
  })
  tag!: TagCreateNestedOneWithoutNewsletter_recipient_tagInput;
}
