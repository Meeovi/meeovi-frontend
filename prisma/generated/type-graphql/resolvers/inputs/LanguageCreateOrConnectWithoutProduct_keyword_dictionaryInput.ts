import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutProduct_keyword_dictionaryInput } from "../inputs/LanguageCreateWithoutProduct_keyword_dictionaryInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateOrConnectWithoutProduct_keyword_dictionaryInput", {})
export class LanguageCreateOrConnectWithoutProduct_keyword_dictionaryInput {
  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: false
  })
  where!: LanguageWhereUniqueInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutProduct_keyword_dictionaryInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutProduct_keyword_dictionaryInput;
}
