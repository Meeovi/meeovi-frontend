import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateOrConnectWithoutMedia_translationInput } from "../inputs/LanguageCreateOrConnectWithoutMedia_translationInput";
import { LanguageCreateWithoutMedia_translationInput } from "../inputs/LanguageCreateWithoutMedia_translationInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageCreateNestedOneWithoutMedia_translationInput", {})
export class LanguageCreateNestedOneWithoutMedia_translationInput {
  @TypeGraphQL.Field(_type => LanguageCreateWithoutMedia_translationInput, {
    nullable: true
  })
  create?: LanguageCreateWithoutMedia_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateOrConnectWithoutMedia_translationInput, {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutMedia_translationInput | undefined;

  @TypeGraphQL.Field(_type => LanguageWhereUniqueInput, {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput | undefined;
}
