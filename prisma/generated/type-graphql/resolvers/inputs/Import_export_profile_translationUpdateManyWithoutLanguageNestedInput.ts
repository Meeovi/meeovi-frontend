import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Import_export_profile_translationCreateManyLanguageInputEnvelope } from "../inputs/Import_export_profile_translationCreateManyLanguageInputEnvelope";
import { Import_export_profile_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Import_export_profile_translationCreateOrConnectWithoutLanguageInput";
import { Import_export_profile_translationCreateWithoutLanguageInput } from "../inputs/Import_export_profile_translationCreateWithoutLanguageInput";
import { Import_export_profile_translationScalarWhereInput } from "../inputs/Import_export_profile_translationScalarWhereInput";
import { Import_export_profile_translationUpdateManyWithWhereWithoutLanguageInput } from "../inputs/Import_export_profile_translationUpdateManyWithWhereWithoutLanguageInput";
import { Import_export_profile_translationUpdateWithWhereUniqueWithoutLanguageInput } from "../inputs/Import_export_profile_translationUpdateWithWhereUniqueWithoutLanguageInput";
import { Import_export_profile_translationUpsertWithWhereUniqueWithoutLanguageInput } from "../inputs/Import_export_profile_translationUpsertWithWhereUniqueWithoutLanguageInput";
import { Import_export_profile_translationWhereUniqueInput } from "../inputs/Import_export_profile_translationWhereUniqueInput";

@TypeGraphQL.InputType("Import_export_profile_translationUpdateManyWithoutLanguageNestedInput", {})
export class Import_export_profile_translationUpdateManyWithoutLanguageNestedInput {
  @TypeGraphQL.Field(_type => [Import_export_profile_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Import_export_profile_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_profile_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Import_export_profile_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_profile_translationUpsertWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  upsert?: Import_export_profile_translationUpsertWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Import_export_profile_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Import_export_profile_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Import_export_profile_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Import_export_profile_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_profile_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Import_export_profile_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_profile_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Import_export_profile_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_profile_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Import_export_profile_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_profile_translationUpdateWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  update?: Import_export_profile_translationUpdateWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_profile_translationUpdateManyWithWhereWithoutLanguageInput], {
    nullable: true
  })
  updateMany?: Import_export_profile_translationUpdateManyWithWhereWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_profile_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Import_export_profile_translationScalarWhereInput[] | undefined;
}
