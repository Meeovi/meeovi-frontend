import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_state_translationCreateManyLanguageInputEnvelope } from "../inputs/Country_state_translationCreateManyLanguageInputEnvelope";
import { Country_state_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Country_state_translationCreateOrConnectWithoutLanguageInput";
import { Country_state_translationCreateWithoutLanguageInput } from "../inputs/Country_state_translationCreateWithoutLanguageInput";
import { Country_state_translationScalarWhereInput } from "../inputs/Country_state_translationScalarWhereInput";
import { Country_state_translationUpdateManyWithWhereWithoutLanguageInput } from "../inputs/Country_state_translationUpdateManyWithWhereWithoutLanguageInput";
import { Country_state_translationUpdateWithWhereUniqueWithoutLanguageInput } from "../inputs/Country_state_translationUpdateWithWhereUniqueWithoutLanguageInput";
import { Country_state_translationUpsertWithWhereUniqueWithoutLanguageInput } from "../inputs/Country_state_translationUpsertWithWhereUniqueWithoutLanguageInput";
import { Country_state_translationWhereUniqueInput } from "../inputs/Country_state_translationWhereUniqueInput";

@TypeGraphQL.InputType("Country_state_translationUpdateManyWithoutLanguageNestedInput", {})
export class Country_state_translationUpdateManyWithoutLanguageNestedInput {
  @TypeGraphQL.Field(_type => [Country_state_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Country_state_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_state_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Country_state_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_state_translationUpsertWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  upsert?: Country_state_translationUpsertWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Country_state_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Country_state_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Country_state_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Country_state_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_state_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Country_state_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_state_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Country_state_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_state_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Country_state_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_state_translationUpdateWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  update?: Country_state_translationUpdateWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_state_translationUpdateManyWithWhereWithoutLanguageInput], {
    nullable: true
  })
  updateMany?: Country_state_translationUpdateManyWithWhereWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_state_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Country_state_translationScalarWhereInput[] | undefined;
}
