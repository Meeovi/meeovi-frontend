import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutProduct_search_configInput } from "../inputs/LanguageCreateOrConnectWithoutProduct_search_configInput";
import { LanguageCreateWithoutProduct_search_configInput } from "../inputs/LanguageCreateWithoutProduct_search_configInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutProduct_search_configInput", {})
export class LanguageCreateNestedOneWithoutProduct_search_configInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutProduct_search_configInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutProduct_search_configInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutProduct_search_configInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutProduct_search_configInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
