import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_translationCreateManyLanguageInputEnvelope } from "../inputs/Media_translationCreateManyLanguageInputEnvelope";
import { Media_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Media_translationCreateOrConnectWithoutLanguageInput";
import { Media_translationCreateWithoutLanguageInput } from "../inputs/Media_translationCreateWithoutLanguageInput";
import { Media_translationWhereUniqueInput } from "../inputs/Media_translationWhereUniqueInput";

@TypeGraphQL.InputType("Media_translationCreateNestedManyWithoutLanguageInput", {})
export class Media_translationCreateNestedManyWithoutLanguageInput {
  @TypeGraphQL.Field(_type => [Media_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Media_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Media_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Media_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Media_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Media_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Media_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Media_translationWhereUniqueInput[] | undefined;
}
