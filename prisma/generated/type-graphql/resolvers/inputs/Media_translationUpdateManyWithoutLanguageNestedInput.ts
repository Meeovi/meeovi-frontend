import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_translationCreateManyLanguageInputEnvelope } from "../inputs/Media_translationCreateManyLanguageInputEnvelope";
import { Media_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Media_translationCreateOrConnectWithoutLanguageInput";
import { Media_translationCreateWithoutLanguageInput } from "../inputs/Media_translationCreateWithoutLanguageInput";
import { Media_translationScalarWhereInput } from "../inputs/Media_translationScalarWhereInput";
import { Media_translationUpdateManyWithWhereWithoutLanguageInput } from "../inputs/Media_translationUpdateManyWithWhereWithoutLanguageInput";
import { Media_translationUpdateWithWhereUniqueWithoutLanguageInput } from "../inputs/Media_translationUpdateWithWhereUniqueWithoutLanguageInput";
import { Media_translationUpsertWithWhereUniqueWithoutLanguageInput } from "../inputs/Media_translationUpsertWithWhereUniqueWithoutLanguageInput";
import { Media_translationWhereUniqueInput } from "../inputs/Media_translationWhereUniqueInput";

@TypeGraphQL.InputType("Media_translationUpdateManyWithoutLanguageNestedInput", {})
export class Media_translationUpdateManyWithoutLanguageNestedInput {
  @TypeGraphQL.Field(_type => [Media_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Media_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Media_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_translationUpsertWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  upsert?: Media_translationUpsertWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Media_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Media_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Media_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Media_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Media_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Media_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Media_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_translationUpdateWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  update?: Media_translationUpdateWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_translationUpdateManyWithWhereWithoutLanguageInput], {
    nullable: true
  })
  updateMany?: Media_translationUpdateManyWithWhereWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Media_translationScalarWhereInput[] | undefined;
}
