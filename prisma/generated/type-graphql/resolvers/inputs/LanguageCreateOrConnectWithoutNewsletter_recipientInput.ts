import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutNewsletter_recipientInput } from "../inputs/LanguageCreateWithoutNewsletter_recipientInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateOrConnectWithoutNewsletter_recipientInput", {})
export class LanguageCreateOrConnectWithoutNewsletter_recipientInput {
  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: false
  })
  where!: LanguageWhereUniqueInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutNewsletter_recipientInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutNewsletter_recipientInput;
}
