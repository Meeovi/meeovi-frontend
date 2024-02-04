import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Locale_translationCreateManyLanguageInputEnvelope } from "../inputs/Locale_translationCreateManyLanguageInputEnvelope";
import { Locale_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Locale_translationCreateOrConnectWithoutLanguageInput";
import { Locale_translationCreateWithoutLanguageInput } from "../inputs/Locale_translationCreateWithoutLanguageInput";
import { Locale_translationScalarWhereInput } from "../inputs/Locale_translationScalarWhereInput";
import { Locale_translationUpdateManyWithWhereWithoutLanguageInput } from "../inputs/Locale_translationUpdateManyWithWhereWithoutLanguageInput";
import { Locale_translationUpdateWithWhereUniqueWithoutLanguageInput } from "../inputs/Locale_translationUpdateWithWhereUniqueWithoutLanguageInput";
import { Locale_translationUpsertWithWhereUniqueWithoutLanguageInput } from "../inputs/Locale_translationUpsertWithWhereUniqueWithoutLanguageInput";
import { Locale_translationWhereUniqueInput } from "../inputs/Locale_translationWhereUniqueInput";

@TypeGraphQL.InputType("Locale_translationUpdateManyWithoutLanguageNestedInput", {})
export class Locale_translationUpdateManyWithoutLanguageNestedInput {
  @TypeGraphQL.Field(_type => [Locale_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Locale_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Locale_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Locale_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Locale_translationUpsertWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  upsert?: Locale_translationUpsertWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Locale_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Locale_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Locale_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Locale_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Locale_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Locale_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Locale_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Locale_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Locale_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Locale_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Locale_translationUpdateWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  update?: Locale_translationUpdateWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Locale_translationUpdateManyWithWhereWithoutLanguageInput], {
    nullable: true
  })
  updateMany?: Locale_translationUpdateManyWithWhereWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Locale_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Locale_translationScalarWhereInput[] | undefined;
}
