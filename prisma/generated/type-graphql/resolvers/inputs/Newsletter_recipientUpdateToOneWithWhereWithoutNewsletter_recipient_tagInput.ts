import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_recipientUpdateWithoutNewsletter_recipient_tagInput } from "../inputs/Newsletter_recipientUpdateWithoutNewsletter_recipient_tagInput";
import { Newsletter_recipientWhereInput } from "../inputs/Newsletter_recipientWhereInput";

@TypeGraphQL.InputType("Newsletter_recipientUpdateToOneWithWhereWithoutNewsletter_recipient_tagInput", {})
export class Newsletter_recipientUpdateToOneWithWhereWithoutNewsletter_recipient_tagInput {
  @TypeGraphQL.Field(_type => Newsletter_recipientWhereInput, {
    nullable: true
  })
  where?: Newsletter_recipientWhereInput | undefined;

  @TypeGraphQL.Field(_type => Newsletter_recipientUpdateWithoutNewsletter_recipient_tagInput, {
    nullable: false
  })
  data!: Newsletter_recipientUpdateWithoutNewsletter_recipient_tagInput;
}
