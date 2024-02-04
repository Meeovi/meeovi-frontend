import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_page_translationCreateWithoutLanguageInput } from "../inputs/Landing_page_translationCreateWithoutLanguageInput";
import { Landing_page_translationUpdateWithoutLanguageInput } from "../inputs/Landing_page_translationUpdateWithoutLanguageInput";
import { Landing_page_translationWhereUniqueInput } from "../inputs/Landing_page_translationWhereUniqueInput";

@TypeGraphQL.InputType("Landing_page_translationUpsertWithWhereUniqueWithoutLanguageInput", {})
export class Landing_page_translationUpsertWithWhereUniqueWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Landing_page_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Landing_page_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Landing_page_translationUpdateWithoutLanguageInput, {
    nullable: false
  })
  update!: Landing_page_translationUpdateWithoutLanguageInput;

  @TypeGraphQL.Field(_type => Landing_page_translationCreateWithoutLanguageInput, {
    nullable: false
  })
  create!: Landing_page_translationCreateWithoutLanguageInput;
}
