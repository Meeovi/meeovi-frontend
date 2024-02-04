import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_typeUpdateWithoutDocumentInput } from "../inputs/Document_typeUpdateWithoutDocumentInput";
import { Document_typeWhereInput } from "../inputs/Document_typeWhereInput";

@TypeGraphQL.InputType("Document_typeUpdateToOneWithWhereWithoutDocumentInput", {})
export class Document_typeUpdateToOneWithWhereWithoutDocumentInput {
  @TypeGraphQL.Field(_type => Document_typeWhereInput, {
    nullable: true
  })
  where?: Document_typeWhereInput | undefined;

  @TypeGraphQL.Field(_type => Document_typeUpdateWithoutDocumentInput, {
    nullable: false
  })
  data!: Document_typeUpdateWithoutDocumentInput;
}
