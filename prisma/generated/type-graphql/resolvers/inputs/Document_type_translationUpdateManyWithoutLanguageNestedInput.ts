import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_type_translationCreateManyLanguageInputEnvelope } from "../inputs/Document_type_translationCreateManyLanguageInputEnvelope";
import { Document_type_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Document_type_translationCreateOrConnectWithoutLanguageInput";
import { Document_type_translationCreateWithoutLanguageInput } from "../inputs/Document_type_translationCreateWithoutLanguageInput";
import { Document_type_translationScalarWhereInput } from "../inputs/Document_type_translationScalarWhereInput";
import { Document_type_translationUpdateManyWithWhereWithoutLanguageInput } from "../inputs/Document_type_translationUpdateManyWithWhereWithoutLanguageInput";
import { Document_type_translationUpdateWithWhereUniqueWithoutLanguageInput } from "../inputs/Document_type_translationUpdateWithWhereUniqueWithoutLanguageInput";
import { Document_type_translationUpsertWithWhereUniqueWithoutLanguageInput } from "../inputs/Document_type_translationUpsertWithWhereUniqueWithoutLanguageInput";
import { Document_type_translationWhereUniqueInput } from "../inputs/Document_type_translationWhereUniqueInput";

@TypeGraphQL.InputType("Document_type_translationUpdateManyWithoutLanguageNestedInput", {})
export class Document_type_translationUpdateManyWithoutLanguageNestedInput {
  @TypeGraphQL.Field(_type => [Document_type_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Document_type_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_type_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Document_type_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_type_translationUpsertWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  upsert?: Document_type_translationUpsertWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Document_type_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Document_type_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Document_type_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Document_type_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_type_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Document_type_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_type_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Document_type_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_type_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Document_type_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_type_translationUpdateWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  update?: Document_type_translationUpdateWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_type_translationUpdateManyWithWhereWithoutLanguageInput], {
    nullable: true
  })
  updateMany?: Document_type_translationUpdateManyWithWhereWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Document_type_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Document_type_translationScalarWhereInput[] | undefined;
}
