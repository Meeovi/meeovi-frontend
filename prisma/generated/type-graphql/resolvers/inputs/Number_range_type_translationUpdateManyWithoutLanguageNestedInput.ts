import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Number_range_type_translationCreateManyLanguageInputEnvelope } from "../inputs/Number_range_type_translationCreateManyLanguageInputEnvelope";
import { Number_range_type_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Number_range_type_translationCreateOrConnectWithoutLanguageInput";
import { Number_range_type_translationCreateWithoutLanguageInput } from "../inputs/Number_range_type_translationCreateWithoutLanguageInput";
import { Number_range_type_translationScalarWhereInput } from "../inputs/Number_range_type_translationScalarWhereInput";
import { Number_range_type_translationUpdateManyWithWhereWithoutLanguageInput } from "../inputs/Number_range_type_translationUpdateManyWithWhereWithoutLanguageInput";
import { Number_range_type_translationUpdateWithWhereUniqueWithoutLanguageInput } from "../inputs/Number_range_type_translationUpdateWithWhereUniqueWithoutLanguageInput";
import { Number_range_type_translationUpsertWithWhereUniqueWithoutLanguageInput } from "../inputs/Number_range_type_translationUpsertWithWhereUniqueWithoutLanguageInput";
import { Number_range_type_translationWhereUniqueInput } from "../inputs/Number_range_type_translationWhereUniqueInput";

@TypeGraphQL.InputType("Number_range_type_translationUpdateManyWithoutLanguageNestedInput", {})
export class Number_range_type_translationUpdateManyWithoutLanguageNestedInput {
  @TypeGraphQL.Field(_type => [Number_range_type_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Number_range_type_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_type_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Number_range_type_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_type_translationUpsertWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  upsert?: Number_range_type_translationUpsertWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Number_range_type_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Number_range_type_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Number_range_type_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Number_range_type_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_type_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Number_range_type_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_type_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Number_range_type_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_type_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Number_range_type_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_type_translationUpdateWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  update?: Number_range_type_translationUpdateWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_type_translationUpdateManyWithWhereWithoutLanguageInput], {
    nullable: true
  })
  updateMany?: Number_range_type_translationUpdateManyWithWhereWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Number_range_type_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Number_range_type_translationScalarWhereInput[] | undefined;
}
