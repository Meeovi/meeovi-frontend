import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutCategory_translationInput } from "../inputs/LanguageCreateOrConnectWithoutCategory_translationInput";
import { LanguageCreateWithoutCategory_translationInput } from "../inputs/LanguageCreateWithoutCategory_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutCategory_translationInput", {})
export class LanguageCreateNestedOneWithoutCategory_translationInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutCategory_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutCategory_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutCategory_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutCategory_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
