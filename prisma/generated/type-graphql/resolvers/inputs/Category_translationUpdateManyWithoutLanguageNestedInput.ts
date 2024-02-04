import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Category_translationCreateManyLanguageInputEnvelope } from "../inputs/Category_translationCreateManyLanguageInputEnvelope";
import { Category_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Category_translationCreateOrConnectWithoutLanguageInput";
import { Category_translationCreateWithoutLanguageInput } from "../inputs/Category_translationCreateWithoutLanguageInput";
import { Category_translationScalarWhereInput } from "../inputs/Category_translationScalarWhereInput";
import { Category_translationUpdateManyWithWhereWithoutLanguageInput } from "../inputs/Category_translationUpdateManyWithWhereWithoutLanguageInput";
import { Category_translationUpdateWithWhereUniqueWithoutLanguageInput } from "../inputs/Category_translationUpdateWithWhereUniqueWithoutLanguageInput";
import { Category_translationUpsertWithWhereUniqueWithoutLanguageInput } from "../inputs/Category_translationUpsertWithWhereUniqueWithoutLanguageInput";
import { Category_translationWhereUniqueInput } from "../inputs/Category_translationWhereUniqueInput";

@TypeGraphQL.InputType("Category_translationUpdateManyWithoutLanguageNestedInput", {})
export class Category_translationUpdateManyWithoutLanguageNestedInput {
  @TypeGraphQL.Field(_type => [Category_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Category_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Category_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Category_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Category_translationUpsertWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  upsert?: Category_translationUpsertWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Category_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Category_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Category_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Category_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Category_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Category_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Category_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Category_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Category_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Category_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Category_translationUpdateWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  update?: Category_translationUpdateWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Category_translationUpdateManyWithWhereWithoutLanguageInput], {
    nullable: true
  })
  updateMany?: Category_translationUpdateManyWithWhereWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Category_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Category_translationScalarWhereInput[] | undefined;
}
