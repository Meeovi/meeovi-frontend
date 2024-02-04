import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentCreateWithoutOther_documentInput } from "../inputs/DocumentCreateWithoutOther_documentInput";
import { DocumentWhereUniqueInput } from "../inputs/DocumentWhereUniqueInput";

@TypeGraphQL.InputType("DocumentCreateOrConnectWithoutOther_documentInput", {})
export class DocumentCreateOrConnectWithoutOther_documentInput {
  @TypeGraphQL.Field(_type => DocumentWhereUniqueInput, {
    nullable: false
  })
  where!: DocumentWhereUniqueInput;

  @TypeGraphQL.Field(_type => DocumentCreateWithoutOther_documentInput, {
    nullable: false
  })
  create!: DocumentCreateWithoutOther_documentInput;
}
