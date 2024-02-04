import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentCreateWithoutDocumentInput } from "../inputs/DocumentCreateWithoutDocumentInput";
import { DocumentWhereUniqueInput } from "../inputs/DocumentWhereUniqueInput";

@TypeGraphQL.InputType("DocumentCreateOrConnectWithoutDocumentInput", {})
export class DocumentCreateOrConnectWithoutDocumentInput {
  @TypeGraphQL.Field(_type => DocumentWhereUniqueInput, {
    nullable: false
  })
  where!: DocumentWhereUniqueInput;

  @TypeGraphQL.Field(_type => DocumentCreateWithoutDocumentInput, {
    nullable: false
  })
  create!: DocumentCreateWithoutDocumentInput;
}
