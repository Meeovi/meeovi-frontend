import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Locale_translationCreateManyLocaleInputEnvelope } from "../inputs/Locale_translationCreateManyLocaleInputEnvelope";
import { Locale_translationCreateOrConnectWithoutLocaleInput } from "../inputs/Locale_translationCreateOrConnectWithoutLocaleInput";
import { Locale_translationCreateWithoutLocaleInput } from "../inputs/Locale_translationCreateWithoutLocaleInput";
import { Locale_translationWhereUniqueInput } from "../inputs/Locale_translationWhereUniqueInput";

@TypeGraphQL.InputType("Locale_translationCreateNestedManyWithoutLocaleInput", {})
export class Locale_translationCreateNestedManyWithoutLocaleInput {
  @TypeGraphQL.Field(_type => [Locale_translationCreateWithoutLocaleInput], {
    nullable: true
  })
  create?: Locale_translationCreateWithoutLocaleInput[] | undefined;

  @TypeGraphQL.Field(_type => [Locale_translationCreateOrConnectWithoutLocaleInput], {
    nullable: true
  })
  connectOrCreate?: Locale_translationCreateOrConnectWithoutLocaleInput[] | undefined;

  @TypeGraphQL.Field(_type => Locale_translationCreateManyLocaleInputEnvelope, {
    nullable: true
  })
  createMany?: Locale_translationCreateManyLocaleInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Locale_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Locale_translationWhereUniqueInput[] | undefined;
}
