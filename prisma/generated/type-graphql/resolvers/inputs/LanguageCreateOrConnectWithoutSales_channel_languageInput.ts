import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutSales_channel_languageInput } from "../inputs/LanguageCreateWithoutSales_channel_languageInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateOrConnectWithoutSales_channel_languageInput", {})
export class LanguageCreateOrConnectWithoutSales_channel_languageInput {
  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: false
  })
  where!: LanguageWhereUniqueInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutSales_channel_languageInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutSales_channel_languageInput;
}
