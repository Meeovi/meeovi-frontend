import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_recipient_tagCreateManyNewsletter_recipientInput } from "../inputs/Newsletter_recipient_tagCreateManyNewsletter_recipientInput";

@TypeGraphQL.InputType("Newsletter_recipient_tagCreateManyNewsletter_recipientInputEnvelope", {})
export class Newsletter_recipient_tagCreateManyNewsletter_recipientInputEnvelope {
  @TypeGraphQL.Field(_type => [Newsletter_recipient_tagCreateManyNewsletter_recipientInput], {
    nullable: false
  })
  data!: Newsletter_recipient_tagCreateManyNewsletter_recipientInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
