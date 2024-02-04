import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_translationCreateManyLanguageInputEnvelope } from "../inputs/Country_translationCreateManyLanguageInputEnvelope";
import { Country_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Country_translationCreateOrConnectWithoutLanguageInput";
import { Country_translationCreateWithoutLanguageInput } from "../inputs/Country_translationCreateWithoutLanguageInput";
import { Country_translationScalarWhereInput } from "../inputs/Country_translationScalarWhereInput";
import { Country_translationUpdateManyWithWhereWithoutLanguageInput } from "../inputs/Country_translationUpdateManyWithWhereWithoutLanguageInput";
import { Country_translationUpdateWithWhereUniqueWithoutLanguageInput } from "../inputs/Country_translationUpdateWithWhereUniqueWithoutLanguageInput";
import { Country_translationUpsertWithWhereUniqueWithoutLanguageInput } from "../inputs/Country_translationUpsertWithWhereUniqueWithoutLanguageInput";
import { Country_translationWhereUniqueInput } from "../inputs/Country_translationWhereUniqueInput";

@TypeGraphQL.InputType("Country_translationUpdateManyWithoutLanguageNestedInput", {})
export class Country_translationUpdateManyWithoutLanguageNestedInput {
  @TypeGraphQL.Field(_type => [Country_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Country_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Country_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_translationUpsertWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  upsert?: Country_translationUpsertWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Country_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Country_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Country_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Country_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Country_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Country_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Country_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_translationUpdateWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  update?: Country_translationUpdateWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_translationUpdateManyWithWhereWithoutLanguageInput], {
    nullable: true
  })
  updateMany?: Country_translationUpdateManyWithWhereWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Country_translationScalarWhereInput[] | undefined;
}
