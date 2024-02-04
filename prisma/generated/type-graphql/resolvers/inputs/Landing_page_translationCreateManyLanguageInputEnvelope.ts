import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_page_translationCreateManyLanguageInput } from "../inputs/Landing_page_translationCreateManyLanguageInput";

@TypeGraphQL.InputType("Landing_page_translationCreateManyLanguageInputEnvelope", {})
export class Landing_page_translationCreateManyLanguageInputEnvelope {
  @TypeGraphQL.Field(_type => [Landing_page_translationCreateManyLanguageInput], {
    nullable: false
  })
  data!: Landing_page_translationCreateManyLanguageInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
