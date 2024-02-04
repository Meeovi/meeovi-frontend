import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Locale_translationCreateManyLanguageInputEnvelope } from "../inputs/Locale_translationCreateManyLanguageInputEnvelope";
import { Locale_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Locale_translationCreateOrConnectWithoutLanguageInput";
import { Locale_translationCreateWithoutLanguageInput } from "../inputs/Locale_translationCreateWithoutLanguageInput";
import { Locale_translationWhereUniqueInput } from "../inputs/Locale_translationWhereUniqueInput";

@TypeGraphQL.InputType("Locale_translationCreateNestedManyWithoutLanguageInput", {})
export class Locale_translationCreateNestedManyWithoutLanguageInput {
  @TypeGraphQL.Field(_type => [Locale_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Locale_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Locale_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Locale_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Locale_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Locale_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Locale_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Locale_translationWhereUniqueInput[] | undefined;
}
