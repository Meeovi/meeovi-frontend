import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutSales_channel_languageInput } from "../inputs/LanguageCreateWithoutSales_channel_languageInput";
import { LanguageUpdateWithoutSales_channel_languageInput } from "../inputs/LanguageUpdateWithoutSales_channel_languageInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutSales_channel_languageInput", {})
export class LanguageUpsertWithoutSales_channel_languageInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutSales_channel_languageInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutSales_channel_languageInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutSales_channel_languageInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutSales_channel_languageInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
