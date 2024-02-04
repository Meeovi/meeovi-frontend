import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Newsletter_recipientCreateWithoutLanguageInput } from "../inputs/Newsletter_recipientCreateWithoutLanguageInput";
import { Newsletter_recipientWhereUniqueInput } from "../inputs/Newsletter_recipientWhereUniqueInput";

@TypeGraphQL.InputType("Newsletter_recipientCreateOrConnectWithoutLanguageInput", {})
export class Newsletter_recipientCreateOrConnectWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Newsletter_recipientWhereUniqueInput, {
    nullable: false
  })
  where!: Newsletter_recipientWhereUniqueInput;

  @TypeGraphQL.Field(_type => Newsletter_recipientCreateWithoutLanguageInput, {
    nullable: false
  })
  create!: Newsletter_recipientCreateWithoutLanguageInput;
}
