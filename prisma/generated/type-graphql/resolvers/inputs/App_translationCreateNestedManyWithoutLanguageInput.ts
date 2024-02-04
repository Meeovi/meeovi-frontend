import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { App_translationCreateManyLanguageInputEnvelope } from "../inputs/App_translationCreateManyLanguageInputEnvelope";
import { App_translationCreateOrConnectWithoutLanguageInput } from "../inputs/App_translationCreateOrConnectWithoutLanguageInput";
import { App_translationCreateWithoutLanguageInput } from "../inputs/App_translationCreateWithoutLanguageInput";
import { App_translationWhereUniqueInput } from "../inputs/App_translationWhereUniqueInput";

@TypeGraphQL.InputType("App_translationCreateNestedManyWithoutLanguageInput", {})
export class App_translationCreateNestedManyWithoutLanguageInput {
  @TypeGraphQL.Field(_type => [App_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: App_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [App_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: App_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => App_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: App_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [App_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: App_translationWhereUniqueInput[] | undefined;
}
