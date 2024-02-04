import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_recipient_tagCreateWithoutNewsletter_recipientInput } from "../inputs/Newsletter_recipient_tagCreateWithoutNewsletter_recipientInput";
import { Newsletter_recipient_tagWhereUniqueInput } from "../inputs/Newsletter_recipient_tagWhereUniqueInput";

@TypeGraphQL.InputType("Newsletter_recipient_tagCreateOrConnectWithoutNewsletter_recipientInput", {})
export class Newsletter_recipient_tagCreateOrConnectWithoutNewsletter_recipientInput {
  @TypeGraphQL.Field(_type => Newsletter_recipient_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Newsletter_recipient_tagWhereUniqueInput;

  @TypeGraphQL.Field(_type => Newsletter_recipient_tagCreateWithoutNewsletter_recipientInput, {
    nullable: false
  })
  create!: Newsletter_recipient_tagCreateWithoutNewsletter_recipientInput;
}
