import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_page_translationCreateManyLanguageInputEnvelope } from "../inputs/Cms_page_translationCreateManyLanguageInputEnvelope";
import { Cms_page_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Cms_page_translationCreateOrConnectWithoutLanguageInput";
import { Cms_page_translationCreateWithoutLanguageInput } from "../inputs/Cms_page_translationCreateWithoutLanguageInput";
import { Cms_page_translationScalarWhereInput } from "../inputs/Cms_page_translationScalarWhereInput";
import { Cms_page_translationUpdateManyWithWhereWithoutLanguageInput } from "../inputs/Cms_page_translationUpdateManyWithWhereWithoutLanguageInput";
import { Cms_page_translationUpdateWithWhereUniqueWithoutLanguageInput } from "../inputs/Cms_page_translationUpdateWithWhereUniqueWithoutLanguageInput";
import { Cms_page_translationUpsertWithWhereUniqueWithoutLanguageInput } from "../inputs/Cms_page_translationUpsertWithWhereUniqueWithoutLanguageInput";
import { Cms_page_translationWhereUniqueInput } from "../inputs/Cms_page_translationWhereUniqueInput";

@TypeGraphQL.InputType("Cms_page_translationUpdateManyWithoutLanguageNestedInput", {})
export class Cms_page_translationUpdateManyWithoutLanguageNestedInput {
  @TypeGraphQL.Field(_type => [Cms_page_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Cms_page_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_page_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Cms_page_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_page_translationUpsertWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  upsert?: Cms_page_translationUpsertWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Cms_page_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Cms_page_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Cms_page_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Cms_page_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_page_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Cms_page_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_page_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Cms_page_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_page_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Cms_page_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_page_translationUpdateWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  update?: Cms_page_translationUpdateWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_page_translationUpdateManyWithWhereWithoutLanguageInput], {
    nullable: true
  })
  updateMany?: Cms_page_translationUpdateManyWithWhereWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_page_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Cms_page_translationScalarWhereInput[] | undefined;
}
