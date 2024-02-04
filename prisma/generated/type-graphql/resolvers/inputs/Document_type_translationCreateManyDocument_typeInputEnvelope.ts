import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_type_translationCreateManyDocument_typeInput } from "../inputs/Document_type_translationCreateManyDocument_typeInput";

@TypeGraphQL.InputType("Document_type_translationCreateManyDocument_typeInputEnvelope", {})
export class Document_type_translationCreateManyDocument_typeInputEnvelope {
  @TypeGraphQL.Field(_type => [Document_type_translationCreateManyDocument_typeInput], {
    nullable: false
  })
  data!: Document_type_translationCreateManyDocument_typeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
