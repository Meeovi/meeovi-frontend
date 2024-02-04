import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_translationUpdateWithoutLanguageInput } from "../inputs/Media_translationUpdateWithoutLanguageInput";
import { Media_translationWhereUniqueInput } from "../inputs/Media_translationWhereUniqueInput";

@TypeGraphQL.InputType("Media_translationUpdateWithWhereUniqueWithoutLanguageInput", {})
export class Media_translationUpdateWithWhereUniqueWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Media_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Media_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Media_translationUpdateWithoutLanguageInput, {
    nullable: false
  })
  data!: Media_translationUpdateWithoutLanguageInput;
}
