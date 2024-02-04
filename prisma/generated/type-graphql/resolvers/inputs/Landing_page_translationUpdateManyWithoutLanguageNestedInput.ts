import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_page_translationCreateManyLanguageInputEnvelope } from "../inputs/Landing_page_translationCreateManyLanguageInputEnvelope";
import { Landing_page_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Landing_page_translationCreateOrConnectWithoutLanguageInput";
import { Landing_page_translationCreateWithoutLanguageInput } from "../inputs/Landing_page_translationCreateWithoutLanguageInput";
import { Landing_page_translationScalarWhereInput } from "../inputs/Landing_page_translationScalarWhereInput";
import { Landing_page_translationUpdateManyWithWhereWithoutLanguageInput } from "../inputs/Landing_page_translationUpdateManyWithWhereWithoutLanguageInput";
import { Landing_page_translationUpdateWithWhereUniqueWithoutLanguageInput } from "../inputs/Landing_page_translationUpdateWithWhereUniqueWithoutLanguageInput";
import { Landing_page_translationUpsertWithWhereUniqueWithoutLanguageInput } from "../inputs/Landing_page_translationUpsertWithWhereUniqueWithoutLanguageInput";
import { Landing_page_translationWhereUniqueInput } from "../inputs/Landing_page_translationWhereUniqueInput";

@TypeGraphQL.InputType("Landing_page_translationUpdateManyWithoutLanguageNestedInput", {})
export class Landing_page_translationUpdateManyWithoutLanguageNestedInput {
  @TypeGraphQL.Field(_type => [Landing_page_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Landing_page_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Landing_page_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_translationUpsertWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  upsert?: Landing_page_translationUpsertWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Landing_page_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Landing_page_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Landing_page_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Landing_page_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Landing_page_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Landing_page_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_translationUpdateWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  update?: Landing_page_translationUpdateWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_translationUpdateManyWithWhereWithoutLanguageInput], {
    nullable: true
  })
  updateMany?: Landing_page_translationUpdateManyWithWhereWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Landing_page_translationScalarWhereInput[] | undefined;
}
