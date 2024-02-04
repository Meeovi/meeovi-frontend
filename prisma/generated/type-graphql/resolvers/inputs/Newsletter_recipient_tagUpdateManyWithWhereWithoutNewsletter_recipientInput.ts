import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_recipient_tagScalarWhereInput } from "../inputs/Newsletter_recipient_tagScalarWhereInput";
import { Newsletter_recipient_tagUpdateManyMutationInput } from "../inputs/Newsletter_recipient_tagUpdateManyMutationInput";

@TypeGraphQL.InputType("Newsletter_recipient_tagUpdateManyWithWhereWithoutNewsletter_recipientInput", {})
export class Newsletter_recipient_tagUpdateManyWithWhereWithoutNewsletter_recipientInput {
  @TypeGraphQL.Field(_type => Newsletter_recipient_tagScalarWhereInput, {
    nullable: false
  })
  where!: Newsletter_recipient_tagScalarWhereInput;

  @TypeGraphQL.Field(_type => Newsletter_recipient_tagUpdateManyMutationInput, {
    nullable: false
  })
  data!: Newsletter_recipient_tagUpdateManyMutationInput;
}
