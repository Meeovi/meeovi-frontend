import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Currency_translationCreateManyLanguageInputEnvelope } from "../inputs/Currency_translationCreateManyLanguageInputEnvelope";
import { Currency_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Currency_translationCreateOrConnectWithoutLanguageInput";
import { Currency_translationCreateWithoutLanguageInput } from "../inputs/Currency_translationCreateWithoutLanguageInput";
import { Currency_translationScalarWhereInput } from "../inputs/Currency_translationScalarWhereInput";
import { Currency_translationUpdateManyWithWhereWithoutLanguageInput } from "../inputs/Currency_translationUpdateManyWithWhereWithoutLanguageInput";
import { Currency_translationUpdateWithWhereUniqueWithoutLanguageInput } from "../inputs/Currency_translationUpdateWithWhereUniqueWithoutLanguageInput";
import { Currency_translationUpsertWithWhereUniqueWithoutLanguageInput } from "../inputs/Currency_translationUpsertWithWhereUniqueWithoutLanguageInput";
import { Currency_translationWhereUniqueInput } from "../inputs/Currency_translationWhereUniqueInput";

@TypeGraphQL.InputType("Currency_translationUpdateManyWithoutLanguageNestedInput", {})
export class Currency_translationUpdateManyWithoutLanguageNestedInput {
  @TypeGraphQL.Field(_type => [Currency_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Currency_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Currency_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_translationUpsertWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  upsert?: Currency_translationUpsertWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Currency_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Currency_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Currency_translationWhereUniqueInput], {
    nullable: true
  })
  set?: Currency_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: Currency_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: Currency_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Currency_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_translationUpdateWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  update?: Currency_translationUpdateWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_translationUpdateManyWithWhereWithoutLanguageInput], {
    nullable: true
  })
  updateMany?: Currency_translationUpdateManyWithWhereWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: Currency_translationScalarWhereInput[] | undefined;
}
