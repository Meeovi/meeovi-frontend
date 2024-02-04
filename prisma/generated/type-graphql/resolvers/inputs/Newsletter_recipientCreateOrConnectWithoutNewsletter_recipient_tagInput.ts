import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_recipientCreateWithoutNewsletter_recipient_tagInput } from "../inputs/Newsletter_recipientCreateWithoutNewsletter_recipient_tagInput";
import { Newsletter_recipientWhereUniqueInput } from "../inputs/Newsletter_recipientWhereUniqueInput";

@TypeGraphQL.InputType("Newsletter_recipientCreateOrConnectWithoutNewsletter_recipient_tagInput", {})
export class Newsletter_recipientCreateOrConnectWithoutNewsletter_recipient_tagInput {
  @TypeGraphQL.Field(_type => Newsletter_recipientWhereUniqueInput, {
    nullable: false
  })
  where!: Newsletter_recipientWhereUniqueInput;

  @TypeGraphQL.Field(_type => Newsletter_recipientCreateWithoutNewsletter_recipient_tagInput, {
    nullable: false
  })
  create!: Newsletter_recipientCreateWithoutNewsletter_recipient_tagInput;
}
