import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_translationCreateManyLanguageInputEnvelope } from "../inputs/App_translationCreateManyLanguageInputEnvelope";
import { App_translationCreateOrConnectWithoutLanguageInput } from "../inputs/App_translationCreateOrConnectWithoutLanguageInput";
import { App_translationCreateWithoutLanguageInput } from "../inputs/App_translationCreateWithoutLanguageInput";
import { App_translationScalarWhereInput } from "../inputs/App_translationScalarWhereInput";
import { App_translationUpdateManyWithWhereWithoutLanguageInput } from "../inputs/App_translationUpdateManyWithWhereWithoutLanguageInput";
import { App_translationUpdateWithWhereUniqueWithoutLanguageInput } from "../inputs/App_translationUpdateWithWhereUniqueWithoutLanguageInput";
import { App_translationUpsertWithWhereUniqueWithoutLanguageInput } from "../inputs/App_translationUpsertWithWhereUniqueWithoutLanguageInput";
import { App_translationWhereUniqueInput } from "../inputs/App_translationWhereUniqueInput";

@TypeGraphQL.InputType("App_translationUpdateManyWithoutLanguageNestedInput", {})
export class App_translationUpdateManyWithoutLanguageNestedInput {
  @TypeGraphQL.Field(_type => [App_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: App_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: App_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_translationUpsertWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  upsert?: App_translationUpsertWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => App_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: App_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [App_translationWhereUniqueInput], {
    nullable: true
  })
  set?: App_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_translationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: App_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_translationWhereUniqueInput], {
    nullable: true
  })
  delete?: App_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: App_translationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_translationUpdateWithWhereUniqueWithoutLanguageInput], {
    nullable: true
  })
  update?: App_translationUpdateWithWhereUniqueWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_translationUpdateManyWithWhereWithoutLanguageInput], {
    nullable: true
  })
  updateMany?: App_translationUpdateManyWithWhereWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_translationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: App_translationScalarWhereInput[] | undefined;
}
