import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentCreateManyMediaInput } from "../inputs/DocumentCreateManyMediaInput";

@TypeGraphQL.InputType("DocumentCreateManyMediaInputEnvelope", {})
export class DocumentCreateManyMediaInputEnvelope {
  @TypeGraphQL.Field(_type => [DocumentCreateManyMediaInput], {
    nullable: false
  })
  data!: DocumentCreateManyMediaInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
