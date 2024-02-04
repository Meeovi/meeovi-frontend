import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Country_translationCreateManyCountryInputEnvelope } from "../inputs/Country_translationCreateManyCountryInputEnvelope";
import { Country_translationCreateOrConnectWithoutCountryInput } from "../inputs/Country_translationCreateOrConnectWithoutCountryInput";
import { Country_translationCreateWithoutCountryInput } from "../inputs/Country_translationCreateWithoutCountryInput";
import { Country_translationScalarWhereInput } from "../inputs/Country_translationScalarWhereInput";
import { Country_translationUpdateManyWithWhereWithoutCountryInput } from "../inputs/Country_translationUpdateManyWithWhereWithoutCountryInput";
import { Country_translationUpdateWithWhereUniqueWithoutCountryInput } from "../inputs/Country_translationUpdateWithWhereUniqueWithoutCountryInput";
import { Country_translationUpsertWithWhereUniqueWithoutCountryInput } from "../inputs/Country_translationUpsertWithWhereUniqueWithoutCountryInput";
import { Country_translationWhereUniqueInput } from "../inputs/Country_translationWhereUniqueInput";

@TypeGraphQL.InputType("Country_translationUpdateManyWithoutCountryNestedInput", {})
export class Country_translationUpdateManyWithoutCountryNestedInput {
  @TypeGraphQL.Field(_type => [Country_translationCreateWithoutCountryInput], {
    nullable: true
  })
  create?: Country_translationCreateWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_translationCreateOrConnectWithoutCountryInput], {
    nullable: true
  })
  connectOrCreate?: Country_translationCreateOrConnectWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_translationUpsertWithWhereUniqueWithoutCountryInput], {
    nullable: true
  })
  upsert?: Country_translationUpsertWithWhereUniqueWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => Country_translationCreateManyCountryInputEnvelope, {
    nullable: true
  })
  createMany?: Country_translationCreateManyCountryInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Country_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Country_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Country_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Country_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Country_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_translationUpdateWithWhereUniqueWithoutCountryInput], {
    nullable: true
  })
  update?: Country_translationUpdateWithWhereUniqueWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_translationUpdateManyWithWhereWithoutCountryInput], {
    nullable: true
  })
  updateMany?: Country_translationUpdateManyWithWhereWithoutCountryInput[] | undefined;

  @TypeGraphQL.Field(_type => [Country_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Country_translationScalarWhereInput[] | undefined;
}
