import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_state_translationCreateManyLanguageInputEnvelope } from "../inputs/Country_state_translationCreateManyLanguageInputEnvelope";
import { Country_state_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Country_state_translationCreateOrConnectWithoutLanguageInput";
import { Country_state_translationCreateWithoutLanguageInput } from "../inputs/Country_state_translationCreateWithoutLanguageInput";
import { Country_state_translationWhereUniqueInput } from "../inputs/Country_state_translationWhereUniqueInput";

@TypeGraphQL.InputType("Country_state_translationCreateNestedManyWithoutLanguageInput", {})
export class Country_state_translationCreateNestedManyWithoutLanguageInput {
  @TypeGraphQL.Field(_type => [Country_state_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Country_state_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_state_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Country_state_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Country_state_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Country_state_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Country_state_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Country_state_translationWhereUniqueInput[] | undefined;
}
