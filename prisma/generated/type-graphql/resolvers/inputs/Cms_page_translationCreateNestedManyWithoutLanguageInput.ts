import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_page_translationCreateManyLanguageInputEnvelope } from "../inputs/Cms_page_translationCreateManyLanguageInputEnvelope";
import { Cms_page_translationCreateOrConnectWithoutLanguageInput } from "../inputs/Cms_page_translationCreateOrConnectWithoutLanguageInput";
import { Cms_page_translationCreateWithoutLanguageInput } from "../inputs/Cms_page_translationCreateWithoutLanguageInput";
import { Cms_page_translationWhereUniqueInput } from "../inputs/Cms_page_translationWhereUniqueInput";

@TypeGraphQL.InputType("Cms_page_translationCreateNestedManyWithoutLanguageInput", {})
export class Cms_page_translationCreateNestedManyWithoutLanguageInput {
  @TypeGraphQL.Field(_type => [Cms_page_translationCreateWithoutLanguageInput], {
    nullable: true
  })
  create?: Cms_page_translationCreateWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_page_translationCreateOrConnectWithoutLanguageInput], {
    nullable: true
  })
  connectOrCreate?: Cms_page_translationCreateOrConnectWithoutLanguageInput[] | undefined;

  @TypeGraphQL.Field(_type => Cms_page_translationCreateManyLanguageInputEnvelope, {
    nullable: true
  })
  createMany?: Cms_page_translationCreateManyLanguageInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Cms_page_translationWhereUniqueInput], {
    nullable: true
  })
  connect?: Cms_page_translationWhereUniqueInput[] | undefined;
}
