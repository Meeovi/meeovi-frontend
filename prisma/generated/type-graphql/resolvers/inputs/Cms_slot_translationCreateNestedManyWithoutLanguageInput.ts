import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_slot_translationCreateManyLanguageInputEnvelope } from "../inputs/Cms_slot_translationCreateManyLanguageInputEnvelope";
import { Cms_slot_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Cms_slot_translationCreateOrConnectWithoutLanguageInput";
import { Cms_slot_translationCreateWithoutLanguageInput } from "../inputs/Cms_slot_translationCreateWithoutLanguageInput";
import { Cms_slot_translationWhereUniqueInput } from "../inputs/Cms_slot_translationWhereUniqueInput";

@TypeGraphQL.InputType("Cms_slot_translationCreateNestedManyWithoutLanguageInput", {})
export class Cms_slot_translationCreateNestedManyWithoutLanguageInput {
  @TypeGraphQL.Field(_type => [Cms_slot_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Cms_slot_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_slot_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Cms_slot_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Cms_slot_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Cms_slot_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Cms_slot_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Cms_slot_translationWhereUniqueInput[] | undefined;
}
