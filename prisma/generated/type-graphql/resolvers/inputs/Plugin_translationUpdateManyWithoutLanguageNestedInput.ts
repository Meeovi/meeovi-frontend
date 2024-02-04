import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Plugin_translationCreateManyLanguageInputEnvelope } from "../inputs/Plugin_translationCreateManyLanguageInputEnvelope";
import { Plugin_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Plugin_translationCreateOrConnectWithoutLanguageInput";
import { Plugin_translationCreateWithoutLanguageInput } from "../inputs/Plugin_translationCreateWithoutLanguageInput";
import { Plugin_translationScalarWhereInput } from "../inputs/Plugin_translationScalarWhereInput";
import { Plugin_translationUpdateManyWithWhereWithoutLanguageInput } from "../inputs/Plugin_translationUpdateManyWithWhereWithoutLanguageInput";
import { Plugin_translationUpdateWithWhereUniqueWithoutLanguageInput } from "../inputs/Plugin_translationUpdateWithWhereUniqueWithoutLanguageInput";
import { Plugin_translationUpsertWithWhereUniqueWithoutLanguageInput } from "../inputs/Plugin_translationUpsertWithWhereUniqueWithoutLanguageInput";
import { Plugin_translationWhereUniqueInput } from "../inputs/Plugin_translationWhereUniqueInput";

@TypeGraphQL.InputType("Plugin_translationUpdateManyWithoutLanguageNestedInput", {})
export class Plugin_translationUpdateManyWithoutLanguageNestedInput {
  @TypeGraphQL.Field(_type => [Plugin_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Plugin_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Plugin_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Plugin_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Plugin_translationUpsertWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  upsert?: Plugin_translationUpsertWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Plugin_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Plugin_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Plugin_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Plugin_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Plugin_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Plugin_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Plugin_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Plugin_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Plugin_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Plugin_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Plugin_translationUpdateWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  update?: Plugin_translationUpdateWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Plugin_translationUpdateManyWithWhereWithoutLanguageInput], {
    nullable: true
  })
  updateMany?: Plugin_translationUpdateManyWithWhereWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Plugin_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Plugin_translationScalarWhereInput[] | undefined;
}
