import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Plugin_translationCreateManyLanguageInputEnvelope } from "../inputs/Plugin_translationCreateManyLanguageInputEnvelope";
import { Plugin_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Plugin_translationCreateOrConnectWithoutLanguageInput";
import { Plugin_translationCreateWithoutLanguageInput } from "../inputs/Plugin_translationCreateWithoutLanguageInput";
import { Plugin_translationWhereUniqueInput } from "../inputs/Plugin_translationWhereUniqueInput";

@TypeGraphQL.InputType("Plugin_translationCreateNestedManyWithoutLanguageInput", {})
export class Plugin_translationCreateNestedManyWithoutLanguageInput {
  @TypeGraphQL.Field(_type => [Plugin_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Plugin_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Plugin_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Plugin_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Plugin_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Plugin_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Plugin_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Plugin_translationWhereUniqueInput[] | undefined;
}
