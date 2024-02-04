import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutApp_translationInput } from "../inputs/LanguageCreateOrConnectWithoutApp_translationInput";
import { LanguageCreateWithoutApp_translationInput } from "../inputs/LanguageCreateWithoutApp_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutApp_translationInput", {})
export class LanguageCreateNestedOneWithoutApp_translationInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutApp_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutApp_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutApp_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutApp_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
