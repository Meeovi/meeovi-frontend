import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Media_translationCreateManyLanguageInput } from "../inputs/Media_translationCreateManyLanguageInput";

@TypeGraphQL.InputType("Media_translationCreateManyLanguageInputEnvelope", {})
export class Media_translationCreateManyLanguageInputEnvelope {
  @TypeGraphQL.Field(_type => [Media_translationCreateManyLanguageInput], {
    nullable: false
  })
  data!: Media_translationCreateManyLanguageInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
