import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_translationCreateWithoutLanguageInput } from "../inputs/Media_translationCreateWithoutLanguageInput";
import { Media_translationWhereUniqueInput } from "../inputs/Media_translationWhereUniqueInput";

@TypeGraphQL.InputType("Media_translationCreateOrConnectWithoutLanguageInput", {})
export class Media_translationCreateOrConnectWithoutLanguageInput {
  @TypeGraphQL.Field(_type => Media_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Media_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Media_translationCreateWithoutLanguageInput, {
    nullable: false
  })
  create!: Media_translationCreateWithoutLanguageInput;
}
