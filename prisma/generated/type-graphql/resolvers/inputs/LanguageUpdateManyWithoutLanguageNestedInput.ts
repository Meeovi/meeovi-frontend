import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LanguageCreateManyLanguageInputEnvelope } from "../inputs/LanguageCreateManyLanguageInputEnvelope";
import { LanguageCreateOrConnectWithoutLanguageInput } from "../inputs/LanguageCreateOrConnectWithoutLanguageInput";
import { LanguageCreateWithoutLanguageInput } from "../inputs/LanguageCreateWithoutLanguageInput";
import { LanguageScalarWhereInput } from "../inputs/LanguageScalarWhereInput";
import { LanguageUpdateManyWithWhereWithoutLanguageInput } from "../inputs/LanguageUpdateManyWithWhereWithoutLanguageInput";
import { LanguageUpdateWithWhereUniqueWithoutLanguageInput } from "../inputs/LanguageUpdateWithWhereUniqueWithoutLanguageInput";
import { LanguageUpsertWithWhereUniqueWithoutLanguageInput } from "../inputs/LanguageUpsertWithWhereUniqueWithoutLanguageInput";
import { LanguageWhereUniqueInput } from "../inputs/LanguageWhereUniqueInput";

@TypeGraphQL.InputType("LanguageUpdateManyWithoutLanguageNestedInput", {})
export class LanguageUpdateManyWithoutLanguageNestedInput {
  @TypeGraphQL.Field(_type => [LanguageCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: LanguageCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [LanguageCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: LanguageCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [LanguageUpsertWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  upsert?: LanguageUpsertWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => LanguageCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: LanguageCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [LanguageWhereUniqueInput], {
    nullable: true
  })
  set?: LanguageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LanguageWhereUniqueInput], {
    nullable: true
  })
  disconnect?: LanguageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LanguageWhereUniqueInput], {
    nullable: true
  })
  delete?: LanguageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LanguageWhereUniqueInput], {
    nullable: true
  })
  connect?: LanguageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [LanguageUpdateWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  update?: LanguageUpdateWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [LanguageUpdateManyWithWhereWithoutLanguageInput], {
    nullable: true
  })
  updateMany?: LanguageUpdateManyWithWhereWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [LanguageScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LanguageScalarWhereInput[] | undefined;
}
