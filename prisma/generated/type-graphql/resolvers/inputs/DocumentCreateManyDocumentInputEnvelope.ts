import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentCreateManyDocumentInput } from "../inputs/DocumentCreateManyDocumentInput";

@TypeGraphQL.InputType("DocumentCreateManyDocumentInputEnvelope", {})
export class DocumentCreateManyDocumentInputEnvelope {
  @TypeGraphQL.Field(_type => [DocumentCreateManyDocumentInput], {
    nullable: false
  })
  data!: DocumentCreateManyDocumentInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
