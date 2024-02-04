import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_slot_translationCreateManyLanguageInputEnvelope } from "../inputs/Cms_slot_translationCreateManyLanguageInputEnvelope";
import { Cms_slot_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Cms_slot_translationCreateOrConnectWithoutLanguageInput";
import { Cms_slot_translationCreateWithoutLanguageInput } from "../inputs/Cms_slot_translationCreateWithoutLanguageInput";
import { Cms_slot_translationScalarWhereInput } from "../inputs/Cms_slot_translationScalarWhereInput";
import { Cms_slot_translationUpdateManyWithWhereWithoutLanguageInput } from "../inputs/Cms_slot_translationUpdateManyWithWhereWithoutLanguageInput";
import { Cms_slot_translationUpdateWithWhereUniqueWithoutLanguageInput } from "../inputs/Cms_slot_translationUpdateWithWhereUniqueWithoutLanguageInput";
import { Cms_slot_translationUpsertWithWhereUniqueWithoutLanguageInput } from "../inputs/Cms_slot_translationUpsertWithWhereUniqueWithoutLanguageInput";
import { Cms_slot_translationWhereUniqueInput } from "../inputs/Cms_slot_translationWhereUniqueInput";

@TypeGraphQL.InputType("Cms_slot_translationUpdateManyWithoutLanguageNestedInput", {})
export class Cms_slot_translationUpdateManyWithoutLanguageNestedInput {
  @TypeGraphQL.Field(_type => [Cms_slot_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Cms_slot_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_slot_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Cms_slot_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_slot_translationUpsertWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  upsert?: Cms_slot_translationUpsertWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Cms_slot_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Cms_slot_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Cms_slot_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Cms_slot_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_slot_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Cms_slot_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_slot_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Cms_slot_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_slot_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Cms_slot_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_slot_translationUpdateWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  update?: Cms_slot_translationUpdateWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_slot_translationUpdateManyWithWhereWithoutLanguageInput], {
    nullable: true
  })
  updateMany?: Cms_slot_translationUpdateManyWithWhereWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_slot_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Cms_slot_translationScalarWhereInput[] | undefined;
}
