import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutProduct_search_configInput } from "../inputs/LanguageCreateWithoutProduct_search_configInput";
import { LanguageUpdateWithoutProduct_search_configInput } from "../inputs/LanguageUpdateWithoutProduct_search_configInput";
import { LanguageWhereInput } from "../inputs/LanguageWhereInput";

@TypeGraphQL.InputType("LanguageUpsertWithoutProduct_search_configInput", {})
export class LanguageUpsertWithoutProduct_search_configInput {
  @TypeGraphQL.Field(_type => LanguageUpdateWithoutProduct_search_configInput, {
    nullable: false
  })
  update!: LanguageUpdateWithoutProduct_search_configInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutProduct_search_configInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutProduct_search_configInput;

  @TypeGraphQL.Field(_type => LanguageWhereInput, {
    nullable: true
  })
  where?: LanguageWhereInput | undefined;
}
