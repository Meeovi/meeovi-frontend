import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_recipientUpdateOneRequiredWithoutNewsletter_recipient_tagNestedInput } from "../inputs/Newsletter_recipientUpdateOneRequiredWithoutNewsletter_recipient_tagNestedInput";
import { TagUpdateOneRequiredWithoutNewsletter_recipient_tagNestedInput } from "../inputs/TagUpdateOneRequiredWithoutNewsletter_recipient_tagNestedInput";

@TypeGraphQL.InputType("Newsletter_recipient_tagUpdateInput", {})
export class Newsletter_recipient_tagUpdateInput {
  @TypeGraphQL.Field(_type => Newsletter_recipientUpdateOneRequiredWithoutNewsletter_recipient_tagNestedInput, {
    nullable: true
  })
  newsletter_recipient?: Newsletter_recipientUpdateOneRequiredWithoutNewsletter_recipient_tagNestedInput | undefined;

  @TypeGraphQL.Field(_type => TagUpdateOneRequiredWithoutNewsletter_recipient_tagNestedInput, {
    nullable: true
  })
  tag?: TagUpdateOneRequiredWithoutNewsletter_recipient_tagNestedInput | undefined;
}
