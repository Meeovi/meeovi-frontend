import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_page_translationCreateManyLanguageInputEnvelope } from "../inputs/Landing_page_translationCreateManyLanguageInputEnvelope";
import { Landing_page_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Landing_page_translationCreateOrConnectWithoutLanguageInput";
import { Landing_page_translationCreateWithoutLanguageInput } from "../inputs/Landing_page_translationCreateWithoutLanguageInput";
import { Landing_page_translationWhereUniqueInput } from "../inputs/Landing_page_translationWhereUniqueInput";

@TypeGraphQL.InputType("Landing_page_translationCreateNestedManyWithoutLanguageInput", {})
export class Landing_page_translationCreateNestedManyWithoutLanguageInput {
  @TypeGraphQL.Field(_type => [Landing_page_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Landing_page_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Landing_page_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Landing_page_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Landing_page_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Landing_page_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Landing_page_translationWhereUniqueInput[] | undefined;
}
