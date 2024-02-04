import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_recipientCreateWithoutNewsletter_recipient_tagInput } from "../inputs/Newsletter_recipientCreateWithoutNewsletter_recipient_tagInput";
import { Newsletter_recipientUpdateWithoutNewsletter_recipient_tagInput } from "../inputs/Newsletter_recipientUpdateWithoutNewsletter_recipient_tagInput";
import { Newsletter_recipientWhereInput } from "../inputs/Newsletter_recipientWhereInput";

@TypeGraphQL.InputType("Newsletter_recipientUpsertWithoutNewsletter_recipient_tagInput", {})
export class Newsletter_recipientUpsertWithoutNewsletter_recipient_tagInput {
  @TypeGraphQL.Field(_type => Newsletter_recipientUpdateWithoutNewsletter_recipient_tagInput, {
    nullable: false
  })
  update!: Newsletter_recipientUpdateWithoutNewsletter_recipient_tagInput;

  @TypeGraphQL.Field(_type => Newsletter_recipientCreateWithoutNewsletter_recipient_tagInput, {
    nullable: false
  })
  create!: Newsletter_recipientCreateWithoutNewsletter_recipient_tagInput;

  @TypeGraphQL.Field(_type => Newsletter_recipientWhereInput, {
    nullable: true
  })
  where?: Newsletter_recipientWhereInput | undefined;
}
