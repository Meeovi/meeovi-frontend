import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Mail_template_mediaCreateManyLanguageInput } from "../inputs/Mail_template_mediaCreateManyLanguageInput";

@TypeGraphQL.InputType("Mail_template_mediaCreateManyLanguageInputEnvelope", {})
export class Mail_template_mediaCreateManyLanguageInputEnvelope {
  @TypeGraphQL.Field(_type => [Mail_template_mediaCreateManyLanguageInput], {
    nullable: false
  })
  data!: Mail_template_mediaCreateManyLanguageInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
