import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_typeCreateWithoutDocumentInput } from "../inputs/Document_typeCreateWithoutDocumentInput";
import { Document_typeUpdateWithoutDocumentInput } from "../inputs/Document_typeUpdateWithoutDocumentInput";
import { Document_typeWhereInput } from "../inputs/Document_typeWhereInput";

@TypeGraphQL.InputType("Document_typeUpsertWithoutDocumentInput", {})
export class Document_typeUpsertWithoutDocumentInput {
  @TypeGraphQL.Field(_type => Document_typeUpdateWithoutDocumentInput, {
    nullable: false
  })
  update!: Document_typeUpdateWithoutDocumentInput;

  @TypeGraphQL.Field(_type => Document_typeCreateWithoutDocumentInput, {
    nullable: false
  })
  create!: Document_typeCreateWithoutDocumentInput;

  @TypeGraphQL.Field(_type => Document_typeWhereInput, {
    nullable: true
  })
  where?: Document_typeWhereInput | undefined;
}
