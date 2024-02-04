import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagUpdateOneRequiredWithoutNewsletter_recipient_tagNestedInput } from "../inputs/TagUpdateOneRequiredWithoutNewsletter_recipient_tagNestedInput";

@TypeGraphQL.InputType("Newsletter_recipient_tagUpdateWithoutNewsletter_recipientInput", {})
export class Newsletter_recipient_tagUpdateWithoutNewsletter_recipientInput {
  @TypeGraphQL.Field(_type => TagUpdateOneRequiredWithoutNewsletter_recipient_tagNestedInput, {
    nullable: true
  })
  tag?: TagUpdateOneRequiredWithoutNewsletter_recipient_tagNestedInput | undefined;
}
