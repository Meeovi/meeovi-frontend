import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentCreateWithoutDocument_typeInput } from "../inputs/DocumentCreateWithoutDocument_typeInput";
import { DocumentWhereUniqueInput } from "../inputs/DocumentWhereUniqueInput";

@TypeGraphQL.InputType("DocumentCreateOrConnectWithoutDocument_typeInput", {})
export class DocumentCreateOrConnectWithoutDocument_typeInput {
  @TypeGraphQL.Field(_type => DocumentWhereUniqueInput, {
    nullable: false
  })
  where!: DocumentWhereUniqueInput;

  @TypeGraphQL.Field(_type => DocumentCreateWithoutDocument_typeInput, {
    nullable: false
  })
  create!: DocumentCreateWithoutDocument_typeInput;
}
