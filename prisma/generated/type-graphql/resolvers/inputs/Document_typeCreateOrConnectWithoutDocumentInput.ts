import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_typeCreateWithoutDocumentInput } from "../inputs/Document_typeCreateWithoutDocumentInput";
import { Document_typeWhereUniqueInput } from "../inputs/Document_typeWhereUniqueInput";

@TypeGraphQL.InputType("Document_typeCreateOrConnectWithoutDocumentInput", {})
export class Document_typeCreateOrConnectWithoutDocumentInput {
  @TypeGraphQL.Field(_type => Document_typeWhereUniqueInput, {
    nullable: false
  })
  where!: Document_typeWhereUniqueInput;

  @TypeGraphQL.Field(_type => Document_typeCreateWithoutDocumentInput, {
    nullable: false
  })
  create!: Document_typeCreateWithoutDocumentInput;
}
