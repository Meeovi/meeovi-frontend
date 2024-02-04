import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateWithoutProduct_search_configInput } from "../inputs/LanguageCreateWithoutProduct_search_configInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateOrConnectWithoutProduct_search_configInput", {})
export class LanguageCreateOrConnectWithoutProduct_search_configInput {
  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: false
  })
  where!: LanguageWhereUniqueInput;

  @TypeGraphQL.Field(_type => LanguageCreateWithoutProduct_search_configInput, {
    nullable: false
  })
  create!: LanguageCreateWithoutProduct_search_configInput;
}
