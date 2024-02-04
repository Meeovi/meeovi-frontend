import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentUpdateWithoutDocumentInput } from "../inputs/DocumentUpdateWithoutDocumentInput";
import { DocumentWhereUniqueInput } from "../inputs/DocumentWhereUniqueInput";

@TypeGraphQL.InputType("DocumentUpdateWithWhereUniqueWithoutDocumentInput", {})
export class DocumentUpdateWithWhereUniqueWithoutDocumentInput {
  @TypeGraphQL.Field(_type => DocumentWhereUniqueInput, {
    nullable: false
  })
  where!: DocumentWhereUniqueInput;

  @TypeGraphQL.Field(_type => DocumentUpdateWithoutDocumentInput, {
    nullable: false
  })
  data!: DocumentUpdateWithoutDocumentInput;
}
