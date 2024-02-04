import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Locale_translationCreateManyLocaleInputEnvelope } from "../inputs/Locale_translationCreateManyLocaleInputEnvelope";
import { Locale_translationCreateOrConnectWithoutLocaleInput } from "../inputs/Locale_translationCreateOrConnectWithoutLocaleInput";
import { Locale_translationCreateWithoutLocaleInput } from "../inputs/Locale_translationCreateWithoutLocaleInput";
import { Locale_translationScalarWhereInput } from "../inputs/Locale_translationScalarWhereInput";
import { Locale_translationUpdateManyWithWhereWithoutLocaleInput } from "../inputs/Locale_translationUpdateManyWithWhereWithoutLocaleInput";
import { Locale_translationUpdateWithWhereUniqueWithoutLocaleInput } from "../inputs/Locale_translationUpdateWithWhereUniqueWithoutLocaleInput";
import { Locale_translationUpsertWithWhereUniqueWithoutLocaleInput } from "../inputs/Locale_translationUpsertWithWhereUniqueWithoutLocaleInput";
import { Locale_translationWhereUniqueInput } from "../inputs/Locale_translationWhereUniqueInput";

@TypeGraphQL.InputType("Locale_translationUpdateManyWithoutLocaleNestedInput", {})
export class Locale_translationUpdateManyWithoutLocaleNestedInput {
  @TypeGraphQL.Field(_type => [Locale_translationCreateWithoutLocaleInput], {
    nullable: true
  })
  create?: Locale_translationCreateWithoutLocaleInput[] | undefined;

  @TypeGraphQL.Field(_type => [Locale_translationCreateOrConnectWithoutLocaleInput], {
    nullable: true
  })
  connectOrCreate?: Locale_translationCreateOrConnectWithoutLocaleInput[] | undefined;

  @TypeGraphQL.Field(_type => [Locale_translationUpsertWithWhereUniqueWithoutLocaleInput], {
    nullable: true
  })
  upsert?: Locale_translationUpsertWithWhereUniqueWithoutLocaleInput[] | undefined;

  @TypeGraphQL.Field(_type => Locale_translationCreateManyLocaleInputEnvelope, {
    nullable: true
  })
  createMany?: Locale_translationCreateManyLocaleInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Locale_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Locale_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Locale_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Locale_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Locale_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Locale_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Locale_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Locale_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Locale_translationUpdateWithWhereUniqueWithoutLocaleInput], {
    nullable: true
  })
  update?: Locale_translationUpdateWithWhereUniqueWithoutLocaleInput[] | undefined;

  @TypeGraphQL.Field(_type => [Locale_translationUpdateManyWithWhereWithoutLocaleInput], {
    nullable: true
  })
  updateMany?: Locale_translationUpdateManyWithWhereWithoutLocaleInput[] | undefined;

  @TypeGraphQL.Field(_type => [Locale_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Locale_translationScalarWhereInput[] | undefined;
}
