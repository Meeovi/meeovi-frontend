import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutUnit_translationInput } from "../inputs/LanguageCreateOrConnectWithoutUnit_translationInput";
import { LanguageCreateWithoutUnit_translationInput } from "../inputs/LanguageCreateWithoutUnit_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutUnit_translationInput", {})
export class LanguageCreateNestedOneWithoutUnit_translationInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutUnit_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutUnit_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutUnit_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutUnit_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
