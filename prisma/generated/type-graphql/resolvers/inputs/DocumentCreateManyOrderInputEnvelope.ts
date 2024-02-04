import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentCreateManyOrderInput } from "../inputs/DocumentCreateManyOrderInput";

@TypeGraphQL.InputType("DocumentCreateManyOrderInputEnvelope", {})
export class DocumentCreateManyOrderInputEnvelope {
  @TypeGraphQL.Field(_type => [DocumentCreateManyOrderInput], {
    nullable: false
  })
  data!: DocumentCreateManyOrderInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
