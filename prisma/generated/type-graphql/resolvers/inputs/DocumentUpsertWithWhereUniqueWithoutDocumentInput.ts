import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentCreateWithoutDocumentInput } from "../inputs/DocumentCreateWithoutDocumentInput";
import { DocumentUpdateWithoutDocumentInput } from "../inputs/DocumentUpdateWithoutDocumentInput";
import { DocumentWhereUniqueInput } from "../inputs/DocumentWhereUniqueInput";

@TypeGraphQL.InputType("DocumentUpsertWithWhereUniqueWithoutDocumentInput", {})
export class DocumentUpsertWithWhereUniqueWithoutDocumentInput {
  @TypeGraphQL.Field(_type => DocumentWhereUniqueInput, {
    nullable: false
  })
  where!: DocumentWhereUniqueInput;

  @TypeGraphQL.Field(_type => DocumentUpdateWithoutDocumentInput, {
    nullable: false
  })
  update!: DocumentUpdateWithoutDocumentInput;

  @TypeGraphQL.Field(_type => DocumentCreateWithoutDocumentInput, {
    nullable: false
  })
  create!: DocumentCreateWithoutDocumentInput;
}
