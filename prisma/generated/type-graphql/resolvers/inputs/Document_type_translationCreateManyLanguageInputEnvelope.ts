import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_type_translationCreateManyLanguageInput } from "../inputs/Document_type_translationCreateManyLanguageInput";

@TypeGraphQL.InputType("Document_type_translationCreateManyLanguageInputEnvelope", {})
export class Document_type_translationCreateManyLanguageInputEnvelope {
  @TypeGraphQL.Field(_type => [Document_type_translationCreateManyLanguageInput], {
    nullable: false
  })
  data!: Document_type_translationCreateManyLanguageInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
