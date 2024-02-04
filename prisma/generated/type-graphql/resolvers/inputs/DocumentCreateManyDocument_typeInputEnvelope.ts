import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentCreateManyDocument_typeInput } from "../inputs/DocumentCreateManyDocument_typeInput";

@TypeGraphQL.InputType("DocumentCreateManyDocument_typeInputEnvelope", {})
export class DocumentCreateManyDocument_typeInputEnvelope {
  @TypeGraphQL.Field(_type => [DocumentCreateManyDocument_typeInput], {
    nullable: false
  })
  data!: DocumentCreateManyDocument_typeInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
