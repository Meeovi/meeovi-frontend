import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_translationCreateManyLanguageInputEnvelope } from "../inputs/Country_translationCreateManyLanguageInputEnvelope";
import { Country_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Country_translationCreateOrConnectWithoutLanguageInput";
import { Country_translationCreateWithoutLanguageInput } from "../inputs/Country_translationCreateWithoutLanguageInput";
import { Country_translationWhereUniqueInput } from "../inputs/Country_translationWhereUniqueInput";

@TypeGraphQL.InputType("Country_translationCreateNestedManyWithoutLanguageInput", {})
export class Country_translationCreateNestedManyWithoutLanguageInput {
  @TypeGraphQL.Field(_type => [Country_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Country_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Country_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Country_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Country_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Country_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Country_translationWhereUniqueInput[] | undefined;
}
